<template>

  <api-test-ui :api-test="apiTest" :perform-check="performCheck" />

  <check-get-network-id       log-id-suffix="CIP"     :get-network-id       ="getNetworkIdFunction"       v-if="getNetworkIdFunction"/>
  <check-get-balance          log-id-suffix="CIP"     :get-balance          ="getBalanceFunction"         v-if="getBalanceFunction"/>
  <check-get-utxos            log-id-suffix="CIP"     :get-utxos            ="getUtxosFunction"           v-if="getUtxosFunction"/>

  <check-get-used-addresses   log-id-suffix="CIP"     :get-used-addresses   ="getUsedAddressesFunction"   v-if="getUsedAddressesFunction"
                                                      @onUsedAddress        ="onUsedAddress"/>
  <check-get-unused-addresses log-id-suffix="CIP"     :get-unused-addresses ="getUnusedAddressesFunction" v-if="getUnusedAddressesFunction"/>
  <!-- array of addresses -->
  <check-get-reward-addresses log-id-suffix="CIP"     :get-reward-addresses ="getRewardAddressesFunction" v-if="getRewardAddressesFunction"/>
  <check-get-change-address   log-id-suffix="CIP"     :get-change-address   ="getChangeAddressFunction"   v-if="getChangeAddressFunction"/>

  <check-sign-data            log-id-suffix="CIP"     :sign-data            ="signDataFunction"           v-if="signDataFunction && signDataAddress"
                                                      :addr                 ="signDataAddress"/>

  <check-sign-tx              log-id-suffix="CIP"     :sign-tx              ="signTxFunction"             v-if="signTxFunction && submitTxFunction"
                                                      :submit-tx            ="submitTxFunction"/>

</template>

<script lang="ts">

import {
  computed,
  defineComponent,
  reactive,
  ref
}                               from 'vue'

import {
  LogLevel,
  useApiLog
}                               from '../useApiLog'

import {
  ApiTest,
  ApiTestStatus,
  createApiTest,
  setApiTestStatus
}                               from '../lib/ApiTest'

import {
  isBoolean,
  isObject
}                               from '../lib/utils'

import { addApiTest }           from '../lib/ApiTestSuite'

import CheckGetNetworkId        from './getNetworkId.vue'
import CheckGetBalance          from './getBalance.vue'
import CheckGetUtxos            from './getUtxos.vue'

import CheckGetUsedAddresses    from './getUsedAddresses.vue'
import CheckGetUnusedAddresses  from './getUnusedAddresses.vue'
import CheckGetRewardAddresses  from './getRewardAddresses.vue'
import CheckGetChangeAddress    from './getChangeAddress.vue'
import CheckSignData            from './signData.vue'
import CheckSignTx              from './signTx.vue'

import ApiTestUi                from './apiTestUi.vue'

export default defineComponent({

  name:                       'checkFullApiCip',

  components: {

    ApiTestUi,
    CheckGetNetworkId,
    CheckGetBalance,
    CheckGetUtxos,

    CheckGetUsedAddresses,
    CheckGetUnusedAddresses,
    CheckGetRewardAddresses,
    CheckGetChangeAddress,

    CheckSignData,
    CheckSignTx
  },

  props: {

    walletName:               { type: String, required: true }
  },

  setup(props) {

    const {

      getLog,
      clearLog,

      addLogImportant,
      addLogSucceeded,
      addLogError
    }                               = useApiLog()

    const apiTest: ApiTest          = reactive<ApiTest>(
      createApiTest(
        'Full API: CIP',
        'enable()',
        [
          '- check all API function return types'
        ]
      )
    )

    const logId                     = apiTest.label
    const logs                      = getLog(logId)

    const showAllLogs               = ref(false)

    const getNetworkIdFunction      = ref<any>(null)
    const getBalanceFunction        = ref<any>(null)
    const getUtxosFunction          = ref<any>(null)

    const getUsedAddressesFunction  = ref<any>(null)
    const getUnusedAddressesFunction= ref<any>(null)
    const getRewardAddressesFunction= ref<any>(null)
    const getChangeAddressFunction  = ref<any>(null)
    const signDataFunction          = ref<any>(null)
    const signDataAddress           = ref<string | null>(null)
    const signTxFunction            = ref<any>(null)
    const submitTxFunction          = ref<any>(null)

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
      getRewardAddressesFunction.value  = null
      getChangeAddressFunction.value    = null

      signDataFunction.value            = null
      signTxFunction.value              = null
      submitTxFunction.value            = null

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

      // @ts-ignore
      if(typeof window.cardano[props.walletName] !== 'object')  {

        return setApiTestFailed('walletName obj missing in window.cardano.')

      } else { addLogSucceeded(logId, props.walletName + ' object present.') }

      // @ts-ignore
      const walletObj         = window.cardano[props.walletName]! as any

      let r: any

      try {

        r                     = await walletObj.isEnabled()

        if(!isBoolean(r))     { return addLogError(logId, 'isEnabled: return type not boolean') }

        addLogSucceeded(logId, 'isEnabled() returned: ' + r)

      } catch (e) {

        addLogError(logId, 'isEnabled: error: ' + JSON.stringify(e, null, 2))
      }

      try {

        const apiObj                      = await walletObj.enable()

        if(!isObject(apiObj)) { return addLogError(logId, 'enable: return type not object') }

        addLogSucceeded(logId, 'enable() returned: ' + apiObj)

        getNetworkIdFunction.value        = apiObj.getNetworkId
        getBalanceFunction.value          = apiObj.getBalance
        getUtxosFunction.value            = apiObj.getUtxos

        getUsedAddressesFunction.value    = apiObj.getUsedAddresses
        getUnusedAddressesFunction.value  = apiObj.getUnusedAddresses
        getRewardAddressesFunction.value  = apiObj.getRewardAddresses
        getChangeAddressFunction.value    = apiObj.getChangeAddress

        signDataFunction.value            = apiObj.signData
        signTxFunction.value              = apiObj.signTx
        submitTxFunction.value            = apiObj.submitTx

      } catch (e: any) {

        addLogError(logId, 'enable: error: ' + e + ' code: ' + e.code + ' info: ' + e.info)
      }

      addLogImportant(logId, '<b><i>CIP API ready to check.</i></b>')

      setApiTestStatus(apiTest, ApiTestStatus.succeeded)
    }

    performCheck()

    function onUsedAddress(payload: { addr: string | null }) {

      console.log('onUsedAddress:', payload.addr)

      signDataAddress.value = payload.addr
    }

    return {

      logs: filteredLogs,
      showAllLogs,

      apiTest,
      performCheck,

      getNetworkIdFunction,
      getBalanceFunction,
      getUtxosFunction,

      getUsedAddressesFunction, onUsedAddress,
      getUnusedAddressesFunction,
      getRewardAddressesFunction,
      getChangeAddressFunction,

      signDataFunction, signDataAddress,
      signTxFunction, submitTxFunction
    }
  }
})
</script>
