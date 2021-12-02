<template>

  <div class="col-span-12 grid grid-cols-12 gap-2">

    <button class="col-span-6 md:col-span-4 xl:col-span-3 2xl:col-span-2  px-2 h-6 text-sm font-semibold text-indigo-600 hover:text-indigo-900 rounded-full bg-gray-200"
            @click="$emit('connect','legacy')" v-if="showConnectLegacy">Connect: Legacy Api</button>
    <button class="col-span-6 md:col-span-4 xl:col-span-3 2xl:col-span-2  px-2 h-6 text-sm font-semibold text-indigo-600 hover:text-indigo-900 rounded-full bg-gray-200"
            @click="$emit('connect',name)" v-for="(name) in walletNames" :key="name">Connect CIP-0030: {{ name }}</button>

  </div>

  <api-test-ui :api-test="apiTest" :perform-check="performCheck" />

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
  checkFunctionsExists,
  checkPropertiesExists,
  legacyProps,
  cipProps,
  initialApiFuncs,
  initialApiProps
}                             from '../lib/utils'

import { addApiTest }         from '../lib/ApiTestSuite'

import ApiTestUi              from './apiTestUi.vue'

export default defineComponent({

  name:                       'checkInitialApi',

  emits:                      [ 'connect' ],

  components: {

    ApiTestUi,
  },

  setup() {

    const {

      getLog,
      clearLog,

      addLogImportant,
      addLogInfo,
      addLogSucceeded,
      addLogWarning,
      addLogError
    }                         = useApiLog()

    const apiTest: ApiTest    = reactive<ApiTest>(
      createApiTest(
        'Initial API Functions',
        'Detect APIs',
        [
          '- window.cardano is present',
          '- list all available wallet namespaces'
        ]
      )
    )

    const logId               = apiTest.label
    const logs                = getLog(logId)

    const showAllLogs         = ref(false)
    const showConnectLegacy   = ref(false)
    const showConnectButtons  = computed( () => apiTest.status === ApiTestStatus.succeeded )
    const walletNames         = ref<string[]>([])

    const filteredLogs        = computed(() => {

      return logs.filter(item => (item.level === LogLevel.error || item.level <= (showAllLogs.value ? LogLevel.error : LogLevel.important)))
    })

    function resetStatus() {

      clearLog(logId)

      showConnectLegacy.value = false

      walletNames.value.splice(0)

      setApiTestStatus(apiTest, ApiTestStatus.idle)
    }

    resetStatus()

    addApiTest(apiTest)

    function setApiTestFailed(msg: string) {

      addLogError(logId, '<b>'+msg+'</b>')
      setApiTestStatus(apiTest, ApiTestStatus.failed)
    }

    function performCheck() {

      resetStatus()

      let showConnectLegacyButton = false

      if(typeof window === 'undefined')       { return setApiTestFailed('No window object present.') }
      else                                    { addLogSucceeded(logId, 'window object present.') }

      // @ts-ignore
      if(typeof window.cardano !== 'object')  { return setApiTestFailed('No cardano object present.') }
      else                                    { addLogSucceeded(logId, 'cardano object present.') }

      // Let's check whether we have a legacy cardano object or as specified in CIP-0030

      // @ts-ignore
      const cardano           = window.cardano! as any

      if(cardano.hasOwnProperty('isEnabled')) {

        addLogWarning(logId, '<b>Legacy api detected.</b>')
        addLogInfo(logId, 'Checking Legacy Api')

        if(!checkFunctionsExists(logId, cardano, legacyProps)) { return setApiTestFailed('Legacy api is broken.') }
        else { addLogSucceeded(logId, 'Legacy api available.') }

        showConnectLegacyButton = true
      }

      let failed              = false

      for(const walletName in cardano) {

        let failedWallet      = false

        if(legacyProps.some(    item => item === walletName)) continue
        if(cipProps.some(       item => item === walletName)) continue
        if(initialApiProps.some(item => item === walletName)) continue

        addLogInfo(logId, 'Checking CIP-0030 initial api: ' + walletName)

        if(!checkFunctionsExists( logId, cardano[walletName], initialApiFuncs) ||
           !checkPropertiesExists(logId, cardano[walletName], initialApiProps)) {

          failedWallet        = true
          failed              = true

          addLogError(logId, 'CIP-0030 initial api broken.')

        } else { addLogSucceeded(logId, 'CIP-0030 initial api available.') }

        if(!failedWallet) {

          walletNames.value.push(walletName)
        }
      }

      if(failed) {

        return setApiTestFailed('One extension is not configured correctly.')
      }

      showConnectLegacy.value = showConnectLegacyButton

      addLogImportant(logId, '<b><i>All checks passed.</i></b>')

      for(const walletName of walletNames.value) {

        addLogImportant(logId, 'Wallet: ' + cardano[walletName].name)
        addLogImportant(logId, 'apiVersion: ' + cardano[walletName].apiVersion)
        addLogImportant(logId, 'icon: <img src="'+cardano[walletName].icon+'">')
      }

      setApiTestStatus(apiTest, ApiTestStatus.succeeded)
    }

    return {

      logs: filteredLogs,
      showAllLogs,

      apiTest,
      performCheck,

      showConnectButtons,
      showConnectLegacy,

      walletNames
    }
  }
})
</script>
