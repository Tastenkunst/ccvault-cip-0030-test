(globalThis as any)['cslInitialized'] = false

import cslInit from './cardano-serialization-lib-web/cardano_serialization_lib.js'

(async () => {

  (globalThis as any)['cslInitialized'] = !!(await cslInit('/wasm/csl-v9.1.1.wasm'))

  console.log('init: CardanoSerializationLib:', (globalThis as any)['cslInitialized']);

})()

export * from './cardano-serialization-lib-web/cardano_serialization_lib.js'
