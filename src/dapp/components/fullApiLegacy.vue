<template>

  <api-test-ui :api-test="apiTest" :perform-check="performCheck" />

  <check-get-network-id       log-id-suffix="legacy"  :get-network-id       ="getNetworkIdFunction"       v-if="getNetworkIdFunction"/>
  <check-get-balance          log-id-suffix="legacy"  :get-balance          ="getBalanceFunction"         v-if="getBalanceFunction"/>
  <check-get-utxos            log-id-suffix="legacy"  :get-utxos            ="getUtxosFunction"           v-if="getUtxosFunction"/>

  <check-get-used-addresses   log-id-suffix="legacy"  :get-used-addresses   ="getUsedAddressesFunction"   v-if="getUsedAddressesFunction"/>
  <check-get-unused-addresses log-id-suffix="legacy"  :get-unused-addresses ="getUnusedAddressesFunction" v-if="getUnusedAddressesFunction"/>
  <!-- single address -->
  <check-get-reward-address   log-id-suffix="legacy"  :get-reward-address   ="getRewardAddressFunction"   v-if="getRewardAddressFunction"/>
  <check-get-change-address   log-id-suffix="legacy"  :get-change-address   ="getChangeAddressFunction"   v-if="getChangeAddressFunction"/>

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
  isBoolean,
  isObject
}                             from '../lib/utils'

import { addApiTest }         from '../lib/ApiTestSuite'

import CheckGetNetworkId      from './getNetworkId.vue'
import CheckGetBalance        from './getBalance.vue'
import CheckGetUtxos          from './getUtxos.vue'

import CheckGetUsedAddresses  from './getUsedAddresses.vue'
import CheckGetUnusedAddresses from './getUnusedAddresses.vue'
import CheckGetRewardAddress  from './getRewardAddress.vue'
import CheckGetChangeAddress  from './getChangeAddress.vue'

import ApiTestUi              from './apiTestUi.vue'

export default defineComponent({

  name:                       'checkFullApiLegacy',

  components: {

    ApiTestUi,
    CheckGetNetworkId,
    CheckGetBalance,
    CheckGetUtxos,

    CheckGetUsedAddresses,
    CheckGetUnusedAddresses,
    CheckGetRewardAddress,
    CheckGetChangeAddress
  },

  setup() {

    const {

      getLog,
      clearLog,

      addLogImportant,
      addLogSucceeded,
      addLogError
    }                         = useApiLog()

    const apiTest: ApiTest    = reactive<ApiTest>(
      createApiTest(
        'Full API: Legacy',
        'enable()',
        [
          '- check all API function return types'
        ]
      )
    )

    const logId               = apiTest.label
    const logs                = getLog(logId)

    const showAllLogs         = ref(false)

    const getNetworkIdFunction      = ref<any>(null)
    const getBalanceFunction        = ref<any>(null)
    const getUtxosFunction          = ref<any>(null)

    const getUsedAddressesFunction  = ref<any>(null)
    const getUnusedAddressesFunction= ref<any>(null)
    const getRewardAddressFunction  = ref<any>(null) // Legacy: single address
    const getChangeAddressFunction  = ref<any>(null)

    const filteredLogs        = computed(() => {

      return logs.filter(item => (item.level === LogLevel.error || item.level <= (showAllLogs.value ? LogLevel.error : LogLevel.important)))
    })

    function resetStatus() {

      clearLog(logId)

      getNetworkIdFunction.value        = null
      getBalanceFunction.value          = null
      getUtxosFunction.value            = null

      getUsedAddressesFunction.value    = null
      getUnusedAddressesFunction.value  = null
      getRewardAddressFunction.value    = null
      getChangeAddressFunction.value    = null

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

      // @ts-ignore
      const cardano           = window.cardano! as any

      let r: any

      try{

        r                     = await cardano.isEnabled()

        if(!isBoolean(r))     { return addLogError(logId, 'isEnabled: return type not boolean') }

        addLogSucceeded(logId, 'isEnabled() returned: ' + r)

      } catch (e) {

        addLogError(logId, 'isEnabled: error: ' + e)
      }

      try {

        r                     = await cardano.enable()

        if(!isObject(r) && !isBoolean(r)) { return addLogError(logId, 'enable: return type not object or boolean') }

        addLogSucceeded(logId, 'enable() returned: ' + r)

      } catch (e) {

        addLogError(logId, 'enable: error: ' + e)
      }

      getNetworkIdFunction.value      = cardano.getNetworkId
      getBalanceFunction.value        = cardano.getBalance
      getUtxosFunction.value          = cardano.getUtxos

      getUsedAddressesFunction.value  = cardano.getUsedAddresses
      getUnusedAddressesFunction.value= cardano.getUnusedAddresses
      getRewardAddressFunction.value  = cardano.getRewardAddress
      getChangeAddressFunction.value  = cardano.getChangeAddress

      addLogImportant(logId, '<b><i>Legacy API ready to check.</i></b>')

      setApiTestStatus(apiTest, ApiTestStatus.succeeded)
    }

    performCheck()

    return {

      logs: filteredLogs,
      showAllLogs,

      apiTest,
      performCheck,

      getNetworkIdFunction,
      getBalanceFunction,
      getUtxosFunction,

      getUsedAddressesFunction,
      getUnusedAddressesFunction,
      getRewardAddressFunction,
      getChangeAddressFunction
    }
  }
})
</script>
