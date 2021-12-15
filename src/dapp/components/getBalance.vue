<template>

  <api-test-ui :api-test="apiTest" :perform-check="performCheck"/>

</template>

<script lang="ts">

import {
  computed,
  defineComponent,
  reactive,
  ref
}                             from 'vue'

import {
  LogLevel,
  useApiLog
}                             from '../useApiLog'

import {
  ApiTest,
  ApiTestStatus,
  createApiTest,
  setApiTestStatus
}                             from '../lib/ApiTest'

import {
  isString,
  returnsPromise,
}                             from '../lib/utils'

import { addApiTest }         from '../lib/ApiTestSuite'

import {
  decodeCborValue,
  logCoin,
  logMultiAsset
}                             from '../lib/utilsCbor'

import ApiTestUi              from './apiTestUi.vue'

export default defineComponent({

  name:                       'checkGetBalance',

  props: {

    getBalance:               { type: Function, required: true },
    logIdSuffix:              { type: String, required: true }
  },

  components: {

    ApiTestUi
  },

  setup(props) {

    const {

      getLog,
      clearLog,

      addLogSucceeded,
      addLogError
    }                         = useApiLog()

    const apiTest: ApiTest    = reactive<ApiTest>(
      createApiTest(
        'getBalance',
        'Check',
        [
          '- check getBalance function return types and cbor'
        ]
      )
    )

    const logId               = apiTest.label
    const logs                = getLog(logId)

    const showAllLogs         = ref(false)

    const filteredLogs        = computed(() => {

      return logs.filter(item => (item.level === LogLevel.error || item.level <= (showAllLogs.value ? LogLevel.error : LogLevel.important)))
    })

    function resetStatus() {

      clearLog(logId)

      setApiTestStatus(apiTest, ApiTestStatus.idle)
    }

    resetStatus()

    addApiTest(apiTest)

    function setApiTestFailed(msg: string) {

      addLogError(logId, '<b>'+msg+'</b>')
      setApiTestStatus(apiTest, ApiTestStatus.failed)
    }

    async function performCheck() {

      resetStatus()

      setApiTestStatus(apiTest, ApiTestStatus.running)

      try {

        let r: any            = await returnsPromise(logId, 'getBalance', props.getBalance)

        if(!isString(r))      { return setApiTestFailed('getBalance: return type not string') }

        addLogSucceeded(logId, '&bull; "getBalance" returned: ' + r)

        const decoded         = decodeCborValue(r)

        addLogSucceeded(logId, '&bull; "getBalance" valid cbor')

        logCoin(      logId, decoded)
        logMultiAsset(logId, decoded)

      } catch(e: any) {

        addLogError(logId, 'getBalance: error: ' + JSON.stringify(e, null, 2))
        return setApiTestFailed(e.message)
      }

      setApiTestStatus(apiTest, ApiTestStatus.succeeded)
    }

    performCheck()

    return {

      logs: filteredLogs,
      showAllLogs,

      apiTest,
      performCheck
    }
  }
})
</script>
