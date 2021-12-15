<template>

  <div class="p-2 bg-blue-700 text-white font-mono font-black flex flex-row flex-nowrap justify-between">
    <span><a href="https://ccvault.io" target="_blank">ccvault.io</a> - dapp-connector test page - v1.1.0</span>
  </div>

  <div class="grid grid-cols-12 gap-2 p-2">

    <check-initial-api        @connect="onConnect" />

    <check-full-api-legacy    v-if="showFullLegacyCheck"/>
    <check-full-api-cip       v-if="showFullCIPCheck" :wallet-name="cipWalletName"/>

  </div>

</template>

<script lang="ts">

import {
  defineComponent,
  ref
}                             from 'vue'

import checkInitialApi        from './components/initialApi.vue'
import checkFullApiLegacy     from './components/fullApiLegacy.vue'
import checkFullApiCip        from './components/fullApiCip.vue'

export default defineComponent({

  name:                       'CIP30Test',

  components: {

    checkInitialApi,
    checkFullApiLegacy,
    checkFullApiCip
  },

  setup(props) {

    // The name of the current api namespace, should be later on be cardano.ccvault, cardano.nami, e.g.

    const showFullLegacyCheck     = ref(false)
    const showFullCIPCheck        = ref(false)
    const cipWalletName           = ref<string | null>(null)

    function onConnect(name: string) {

      if(name === 'legacy') {

        showFullCIPCheck.value    = false
        showFullLegacyCheck.value = true

      } else {

        showFullLegacyCheck.value = false

        if(name) {

          cipWalletName.value     = name
          showFullCIPCheck.value  = true

        } else {

          showFullCIPCheck.value  = false
        }
      }
    }

    return {

      showFullLegacyCheck,
      showFullCIPCheck,
      cipWalletName,
      onConnect
    }
  }
})
</script>
