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
  isArray,
  returnsPromise,
}                             from '../lib/utils'

import { addApiTest }         from '../lib/ApiTestSuite'

import {
  decodeCborUtxo,
  logUtxo
}                             from '../lib/utilsCbor'

import ApiTestUi              from './apiTestUi.vue'

export default defineComponent({

  name:                       'checkGetUtxosAmount',

  props: {

    getUtxos:                 { type: Function, required: true },
    utxoAmount:               { type: String, required: true },
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
        'getUtxos(amount)',
        'Check',
        [
          '- check getUtxos parameter amount and paginate, amount: ' + props.utxoAmount
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

        let r: any            = await returnsPromise(logId, 'getUtxos', props.getUtxos, [ props.utxoAmount ])

        if(!isArray(r))       { return setApiTestFailed('getUtxos: return type not array') }

        addLogSucceeded(logId, '&bull; "getUtxos" returned: ' + r)

        let ar : string[]     = r as string[]

        for(const utxo of ar)  {

          const decoded       = decodeCborUtxo(utxo)

          addLogSucceeded(logId, '&bull; utxo valid cbor')

          logUtxo(logId, decoded)
          addLogImportant(logId, ' ')
        }

        if(ar.length > 1) {

          addLogImportant(logId, 'Testing Paginate: page 1, limit 1')
          addLogImportant(logId, ' ')

          r                   = await returnsPromise(logId, 'getUtxos', props.getUtxos, [ props.utxoAmount, { page: 1, limit: 1 } ])

          if(!isArray(r))     { return setApiTestFailed('getUtxos: return type not array') }

          addLogSucceeded(logId, '&bull; "getUtxos" returned: ' + r)

          ar                  = r as string[]

          for(const utxo of ar) {

            const decoded     = decodeCborUtxo(utxo)

            addLogSucceeded(logId, '&bull; utxo valid cbor')

            logUtxo(logId, decoded)
            addLogImportant(logId, ' ')
          }
        }

        addLogImportant(logId, 'Testing Paginate: page 9999999, limit 1')
        addLogImportant(logId, ' ')

        try {

                                await returnsPromise(logId, 'getUtxos', props.getUtxos, [ props.utxoAmount, { page: 9999999, limit: 1 } ])

          addLogError(logId, 'getUtxos: No error received')
          return setApiTestFailed('No error received.')

        } catch (e) {

          addLogImportant(logId, '&bull; "getUtxos" returned error: ' + e)
        }

        try {

          r                   = await returnsPromise(logId, 'getUtxos', props.getUtxos, [ 'ffffffffff', { page: 1, limit: 1 } ])

          addLogError(logId, 'getUtxos: No error received ' + JSON.stringify(r, null, 2))
          return setApiTestFailed('No error received.')

        } catch (e) {

          addLogImportant(logId, '&bull; "getUtxos" returned error: ' + JSON.stringify(e, null, 2))
        }

      } catch(e: any) {

        addLogError(logId, 'getUtxos: error: ' + JSON.stringify(e, null, 2))
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
