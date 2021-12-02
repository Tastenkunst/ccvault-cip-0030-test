<template>

  <div class="col-span-6 md:col-span-4 xl:col-span-3 2xl:col-span-2 grid grid-cols-12 gap-1 mt-2">

    <div class="col-span-12 italic font-bold text-center text-sm" v-if="apiTest.showHeader">{{ apiTest.label }}</div>

    <hr class="col-span-12" v-if="apiTest.showHeader">

<!--    <div class="col-span-12 flex flex-col flex-nowrap px-2 space-y-0 h-10 overflow-auto" v-if="apiTest.showHeader">-->

<!--      <span class="text-sm text-gray-500" v-for="(item, index) in apiTest.itemList" :key="'item-' + index">{{ item.label }}</span>-->

<!--    </div>-->

<!--    <hr class="col-span-12" v-if="apiTest.showHeader">-->

    <div class="col-span-12 grid grid-cols-2 gap-1 h-6 text-xs ">

      <span   class="px-2 font-semibold rounded-full flex justify-center items-center" :class="apiTest.statusCSS">{{ apiTest.status }}</span>
      <button class="px-2 font-semibold rounded-full flex justify-center items-center
                     text-indigo-600 hover:text-indigo-900 bg-gray-200"
              @click="performCheck">{{ apiTest.buttonLabel }}</button>

    </div>

    <slot name="buttons"></slot>

    <hr class="col-span-12">

    <div class="col-span-12 grid grid-cols-2 gap-1 h-6 text-xs ">

      <q-toggle v-model="showAllLogs" label="Show all logs" class="-my-2"/>

      <button class="px-2 font-semibold text-indigo-600 hover:text-indigo-900 rounded-full bg-gray-200" @click="clearLogs">Clear Logs</button>

    </div>

    <div class="col-span-12 h-60 border border-gray-200 rounded-xl p-1.5 inline-flex flex-col flex-nowrap text-left text-sm max-h-24 overflow-auto">

      <div class="w-full flex flex-row justify-center items-center" v-if="apiTest.status === '...'">
        <q-spinner-ios></q-spinner-ios>
      </div>

      <span class="text-gray-500 -mb-1.5" :class="index === 0 ? '-mt-1.5' : ''" v-for="(item, index) in logs" :key="'item-' + index">

        <i class="text-lg mr-1" :class="item.iconCSS"></i>
        <span class="text-xs" style="line-height: 0.5rem" v-html="item.msg"></span>

      </span>

    </div>

    <slot name="content"></slot>

  </div>

</template>

<script lang="ts">

import {
  computed,
  defineComponent,
  ref
}                             from 'vue'

import {
  LogLevel,
  useApiLog
}                             from '../useApiLog'

import { ApiTest }            from '../lib/ApiTest'

export default defineComponent({

  name:                       'apiTestUi',

  props: {

    apiTest:                  { type: Object as () => ApiTest, required: true },
    performCheck:             { type: Function, required: true }
  },

  setup(props, context) {

    const hasSlotButtons      = computed( () => context.slots.hasOwnProperty("buttons") )
    const hasSlotContent      = computed( () => context.slots.hasOwnProperty("content") )

    const { getLog, clearLog } = useApiLog()

    const logId               = props.apiTest.label
    const logs                = getLog(logId)

    const showAllLogs         = ref(false)
    const filteredLogs        = computed(() => {

      return logs.filter(item => (item.level === LogLevel.error || item.level <= (showAllLogs.value ? LogLevel.error : LogLevel.important)))
    })

    function clearLogs() {

      clearLog(logId)
    }

    return {

      logs: filteredLogs,
      showAllLogs,
      clearLogs,

      hasSlotButtons,
      hasSlotContent
    }
  }
})
</script>
