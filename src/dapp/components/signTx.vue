<template>

  <api-test-ui :api-test="apiTest" :perform-check="performCheck"/>

  <check-submit-tx :log-id-suffix="logIdSuffix" :serialized-tx="serializedTx" :submit-tx="submitTx" v-if="serializedTx && submitTx" />

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
  isString,
  returnsPromise,
}                             from '../lib/utils'

import { addApiTest }         from '../lib/ApiTestSuite'

import ApiTestUi              from './apiTestUi.vue'
import CheckSubmitTx          from './submitTx.vue'
import { signTxLocally } from "../lib/utilsCbor";

export default defineComponent({

  name:                       'checkSignTx',

  props: {

    signTx:                   { type: Function, required: true },
    submitTx:                 { type: Function, required: true },
    logIdSuffix:              { type: String, required: true }
  },

  components: {

    ApiTestUi,
    CheckSubmitTx
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
        'signTx',
        'Check',
        [
          '- check signTx popup'
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

    const txBody              = ref<string | null>(null)
    const witnesses           = ref<string | null>(null)
    const serializedTx        = ref<string | null>(null)

    async function performCheck() {

      resetStatus()

      txBody.value            = null
      witnesses.value         = null
      serializedTx.value      = null

      setApiTestStatus(apiTest, ApiTestStatus.running)

      try {

        let r: string         = await returnsPromise(logId, 'signTx', props.signTx, [ '', false, true ])

        if(!isString(r))      { return setApiTestFailed('signTx: return type not string') }

        addLogSucceeded(logId, '&bull; "signTx" txBody: ' + r)

        txBody.value          = r

        r                     = await returnsPromise(logId, 'signTx', props.signTx, [ txBody.value, false ])

        if(!isString(r))      { return setApiTestFailed('signTx: return type not string') }

        addLogSucceeded(logId, '&bull; "signTx" witnesses: ' + r)

        witnesses.value       = r

        addLogImportant(logId, r)

        serializedTx.value    = signTxLocally(logId, txBody.value, witnesses.value)

      } catch(e: any) {

        serializedTx.value    = null
        addLogError(logId, 'signTx: error: ' + e)
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

      txBody,
      witnesses,
      serializedTx
    }
  }
})
</script>
