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
  isArray,
  returnsPromise,
}                             from '../lib/utils'

import { addApiTest }         from '../lib/ApiTestSuite'

import {
  decodeCborAddress,
  logAddress
}                             from '../lib/utilsCbor'

import ApiTestUi              from './apiTestUi.vue'

export default defineComponent({

  name:                       'checkGetRewardAddresses',

  props: {

    getRewardAddresses:       { type: Function, required: true },
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
        'getRewardAddresses',
        'Check',
        [
          '- check getRewardAddresses function return types and cbor'
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

        let r: any            = await returnsPromise(logId, 'getRewardAddresses', props.getRewardAddresses)

        if(!isArray(r))       { return setApiTestFailed('getRewardAddresses: return type not an array') }

        addLogSucceeded(logId, '&bull; "getRewardAddresses" returned: ' + r)

        for(const addr of r)  {

          const decoded       = decodeCborAddress(addr)

          addLogSucceeded(logId, '&bull; addr valid cbor')

          logAddress(logId, decoded)
        }

      } catch(e: any) {

        addLogError(logId, 'getRewardAddresses: error: ' + JSON.stringify(e, null, 2))
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
