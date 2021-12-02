import {
  addLogError,
  addLogSucceeded
}                             from '../useApiLog'

// in cardano object
export const legacyProps       = [

  'enable',
  'isEnabled',
  'getNetworkId',
  'onNetworkChange',
  'onAccountChange',
  'getBalance',
  'getChangeAddress',
  'getCollateral',
  'getRewardAddress', // single
  'getUnusedAddresses',
  'getUsedAddresses',
  'getUtxos',
  'signData',
  'signTx',
  'submitTx'
]

export const cipProps       = [

  'getNetworkId',
  'onNetworkChange',
  'onAccountChange',
  'getBalance',
  'getChangeAddress',
  'getCollateral',
  'getRewardAddresses', // array
  'getUnusedAddresses',
  'getUsedAddresses',
  'getUtxos',
  'signData',
  'signTx',
  'submitTx'
]

// per wallet namespace
export const initialApiFuncs = [

  'enable',
  'isEnabled'
]

// per wallet namespace
export const initialApiProps = [

  'apiVersion',
  'name',
  'icon'
]

export function checkFunctionsExists(logId: string, obj: any, funcList: string[]): boolean {

  let failed                  = false

  funcList.forEach(function (name) {

    const func                = obj[name]

    if(func !== undefined && typeof func === 'function') {

      addLogSucceeded(logId, '&bull; "' + name + '" is a function')

    } else {

      failed                  = true
      addLogError(logId, '&bull; "' + name + '" does not exist')
    }
  })

  return !failed
}

export function checkPropertiesExists(logId: string, obj: any, propList: string[]): boolean {

  let failed                  = false

  propList.forEach(function (name) {

    const prop                = obj[name]

    if(prop !== undefined) {

      addLogSucceeded(logId, '&bull; "' + name + '": ' + prop)

    } else {

      failed                  = true
      addLogError(logId, '&bull; "' + name + '" does not exist')
    }
  })

  return !failed
}

export const returnsPromise   = (logId: string, msg: string,  func: any, args: any[] = []): Promise<any> => {

  let promise                 = func(...args)

  if(promise instanceof Promise) {

    addLogSucceeded(logId, '&bull; "' + msg + '": returns promise')

    return promise
  }

  addLogError(logId, '&bull; "' + msg + '" does not return a promise')

  throw new Error('"' + msg + '" does not return a promise')
}

function getReturnType(x: any) {

       if(typeof x === 'string')    { return 'string' }
  else if(typeof x === 'number')    { return 'number' }
  else if(typeof x === 'undefined') { return 'undefined' }
  else if(typeof x === 'boolean')   { return 'boolean' }
  else if(typeof x === 'object')    { return 'object' }
  else { return typeof x }
}

export const isBoolean        = (x: any) => getReturnType(x) === 'boolean'
export const isNumber         = (x: any) => getReturnType(x) === 'number'
export const isString         = (x: any) => getReturnType(x) === 'string'
export const isObject         = (x: any) => getReturnType(x) === 'object'
export const isVoid           = (x: any) => getReturnType(x) === 'undefined'
export const isArray          = (x: any) => Array.isArray(x)
