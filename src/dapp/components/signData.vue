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
  addLogImportant,
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
  isObject,
  isString,
  returnsPromise,
}                             from '../lib/utils'

import { addApiTest }         from '../lib/ApiTestSuite'

import ApiTestUi              from './apiTestUi.vue'

export default defineComponent({

  name:                       'checkSignData',

  props: {

    signData:                 { type: Function, required: true },
    addr:                     { type: String,   required: true },
    logIdSuffix:              { type: String,   required: true }
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
        'signData',
        'Check',
        [
          '- check signData popup'
        ]
      )
    )

    const logId               = apiTest.label
    const logs                = getLog(logId)

    const showAllLogs         = ref(false)

    const signedData          = ref<string | null>(null)

    const filteredLogs        = computed(() => {

      return logs.filter(item => (item.level === LogLevel.error || item.level <= (showAllLogs.value ? LogLevel.error : LogLevel.important)))
    })

    function resetStatus() {

      clearLog(logId)

      signedData.value        = null

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

        let r: string         = await returnsPromise(logId, 'signData', props.signData, [ props.addr, 'ffffffff' ])

        if(!isString(r))      { return setApiTestFailed('signData: return type not string') }

        addLogSucceeded(logId, '&bull; "signData" signedData: ' + r)

        signedData.value      = r

        addLogImportant(logId, r)

      } catch(e: any) {

        signedData.value      = null
        addLogError(logId, 'signData: error: ' + JSON.stringify(e, null, 2))
        return setApiTestFailed(e.message)
      }

      setApiTestStatus(apiTest, ApiTestStatus.succeeded)
    }

    // performCheck()

    return {

      logs: filteredLogs,
      showAllLogs,

      apiTest,
      performCheck,

      // txBody,
      // witnesses,
      // serializedTx
    }
  }
})
</script>
