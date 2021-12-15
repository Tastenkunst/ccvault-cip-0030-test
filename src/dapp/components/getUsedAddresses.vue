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
} from '../useApiLog'

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

  name:                       'checkGetUsedAddresses',

  emits:                      [ 'onUsedAddress' ],

  props: {

    getUsedAddresses:         { type: Function, required: true },
    logIdSuffix:              { type: String, required: true }
  },

  components: {

    ApiTestUi
  },

  setup(props, { emit }) {

    const {

      getLog,
      clearLog,

      addLogSucceeded,
      addLogError
    }                         = useApiLog()

    const apiTest: ApiTest    = reactive<ApiTest>(
      createApiTest(
        'getUsedAddresses',
        'Check',
        [
          '- check getUsedAddresses function return types and cbor'
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

        let r: any            = await returnsPromise(logId, 'getUsedAddresses', props.getUsedAddresses)

        if(!isArray(r))       { return setApiTestFailed('getUsedAddresses: return type not an array') }

        addLogSucceeded(logId, '&bull; "getUsedAddresses" returned: ' + r)

        const ar : string[]   = r as string[]

        for(const addr of ar) {

          const decoded       = decodeCborAddress(addr)

          addLogSucceeded(logId, '&bull; addr valid cbor')

          const bech32        = logAddress(logId, decoded)

          console.log('bech32', bech32)

          if(bech32) {

            emit('onUsedAddress', { addr: bech32 })
          }
        }

        if(ar.length > 1) {

          addLogImportant(logId, ' ')
          addLogImportant(logId, 'Testing Paginate: page 1, limit 1')
          addLogImportant(logId, ' ')

          r                   = await returnsPromise(logId, 'getUsedAddresses', props.getUsedAddresses, [ { page: 1, limit: 1 } ])

          if(!isArray(r))     { return setApiTestFailed('getUsedAddresses: return type not an array') }

          addLogSucceeded(logId, '&bull; "getUsedAddresses" returned: ' + r)

          const ar : string[] = r as string[]

          for(const addr of ar) {

            const decoded     = decodeCborAddress(addr)

            addLogSucceeded(logId, '&bull; addr valid cbor')

            const bech32      = logAddress(logId, decoded)
          }
        }

      } catch(e: any) {

        addLogError(logId, 'getUsedAddresses: error: ' + JSON.stringify(e, null, 2))
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
