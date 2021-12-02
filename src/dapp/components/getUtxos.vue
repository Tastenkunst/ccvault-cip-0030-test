<template>

  <api-test-ui :api-test="apiTest" :perform-check="performCheck"/>

  <check-get-utxos-amount :log-id-suffix="logIdSuffix" :get-utxos="getUtxos" :utxo-amount="utxoAmount" v-if="getUtxos && utxoAmount"/>

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
  isArray,
  returnsPromise,
}                             from '../lib/utils'

import { addApiTest }         from '../lib/ApiTestSuite'

import {
  decodeCborUtxo,
  logUtxo,
  toHexString
}                             from '../lib/utilsCbor'

import ApiTestUi              from './apiTestUi.vue'
import CheckGetUtxosAmount    from './getUtxosAmount.vue'

export default defineComponent({

  name:                       'checkGetUtxos',

  props: {

    getUtxos:                 { type: Function, required: true },
    logIdSuffix:              { type: String, required: true }
  },

  components: {

    ApiTestUi,
    CheckGetUtxosAmount
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
        'getUtxos',
        'Check',
        [
          '- check getUtxos function return types and cbor'
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

    const utxoAmount          = ref<string | null>(null)

    async function performCheck() {

      resetStatus()

      setApiTestStatus(apiTest, ApiTestStatus.running)

      try {

        let r: any            = await returnsPromise(logId, 'getUtxos', props.getUtxos)

        if(!isArray(r))       { return setApiTestFailed('getUtxos: return type not array') }

        addLogSucceeded(logId, '&bull; "getUtxos" returned: ' + r)

        for(const utxo of r)  {

          const decoded       = decodeCborUtxo(utxo)

          addLogSucceeded(logId, '&bull; utxo valid cbor')

          logUtxo(logId, decoded)
          addLogImportant(logId, ' ')

          if(utxoAmount.value === null) {

            utxoAmount.value  = decoded.output().amount().coin().to_str()
            utxoAmount.value  = toHexString(decoded.output().amount().to_bytes())
          }
        }

      } catch(e: any) {

        addLogError(logId, 'getUtxos: error: ' + e)
        return setApiTestFailed(e.message)
      }

      setApiTestStatus(apiTest, ApiTestStatus.succeeded)
    }

    performCheck()

    return {

      logs: filteredLogs,
      showAllLogs,

      apiTest,
      performCheck,

      utxoAmount
    }
  }
})
</script>
