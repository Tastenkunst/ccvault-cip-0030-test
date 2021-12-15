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
  decodeCborAddress,
  logAddress
}                             from '../lib/utilsCbor'

import ApiTestUi              from './apiTestUi.vue'

export default defineComponent({

  name:                       'checkGetRewardAddress',

  props: {

    getRewardAddress:         { type: Function, required: true },
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
        'getRewardAddress',
        'Check',
        [
          '- check getRewardAddress function return types and cbor'
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

        let r: any            = await returnsPromise(logId, 'getRewardAddress', props.getRewardAddress)

        if(!isString(r))      { return setApiTestFailed('getRewardAddress: return type not an array') }

        addLogSucceeded(logId, '&bull; "getRewardAddress" returned: ' + r)

        const decoded       = decodeCborAddress(r)

        addLogSucceeded(logId, '&bull; addr valid cbor')

        logAddress(logId, decoded)

      } catch(e: any) {

        addLogError(logId, 'getRewardAddress: error: ' + JSON.stringify(e, null, 2))
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
