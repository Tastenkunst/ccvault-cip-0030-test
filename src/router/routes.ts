import { RouteRecordRaw }     from 'vue-router'

const routes: RouteRecordRaw[] = [

  { path: '/',                component: () => import('src/dapp/CIP30Test.vue') },

  // Always leave this as last one,
  // but you can also remove it
  { path: '/:catchAll(.*)*',  component: () => import('pages/Error404.vue') }
]

export default routes
