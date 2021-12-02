import { Buffer }             from 'buffer'

import * as CSL               from 'src/dapp/lib/CardanoSerializationLib'

import {
  addLogSucceeded,
  addLogError,
  addLogImportant
}                             from '../useApiLog'

export const toUint8Array     = (hexString: string):    Uint8Array  => Uint8Array.from(Buffer.from(hexString, 'hex'))
export const toHexString      = (array: Uint8Array):    string      => Buffer.from(array).toString('hex')

export const uint8ArrayToUtf8String = (array: Uint8Array): string     => {
  var out, i, len, c;
  var char2, char3;

  out = "";
  len = array.length;
  i = 0;
  while(i < len) {
    c = array[i++];
    switch(c >> 4)
    {
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
      // 0xxxxxxx
      out += String.fromCharCode(c);
      break;
      case 12: case 13:
      // 110x xxxx   10xx xxxx
      char2 = array[i++];
      out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
      break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = array[i++];
        char3 = array[i++];
        out += String.fromCharCode(((c & 0x0F) << 12) |
          ((char2 & 0x3F) << 6) |
          ((char3 & 0x3F) << 0));
        break;
    }
  }

  return out;
}

export const decodeCborValue    = (cbor: string):         CSL.Value     => {

  try {

    return CSL.Value.from_bytes(toUint8Array(cbor))

  } catch (error: any) {

    throw new Error('Error: decodeCborValue: not decodable: ' + cbor)
  }
}
export const decodeCborAddress  = (cbor: string):         CSL.Address   => {

  try {

    return CSL.Address.from_bytes(toUint8Array(cbor))

  } catch (error: any) {

    throw new Error('Error: decodeCborAddress: not decodable: ' + cbor)
  }
}
export const decodeCborUtxo     = (cbor: string): CSL.TransactionUnspentOutput => {

  try {

    return CSL.TransactionUnspentOutput.from_bytes(toUint8Array(cbor))

  } catch (error: any) {

    throw new Error('Error: decodeCborUtxo: not decodable: ' + cbor)
  }
}

export const getMultiAssetPolicyId = (multiAsset: CSL.MultiAsset, position: number): CSL.ScriptHash => {

  try {

    return multiAsset.keys().get(position)

  } catch (e: any) {

    throw new Error('Error: getMultiAssetPolicyId: ' + position)
  }
}
export const getMultiAssetFromPolicyId = (multiAsset: CSL.MultiAsset, policyId: CSL.ScriptHash): CSL.Assets => {

  try {

    let asset                 = multiAsset.get(policyId)

    if(asset)                 { return asset }

  } catch (e: any) {

    throw new Error('Error: getMultiAssetFromPolicyId: cannot read: ' + policyId)
  }

  throw new Error('Error: getMultiAssetFromPolicyId: no asset for: ' + policyId)
}

export const getAssetName       = (asset: CSL.Assets, position: number): CSL.AssetName => {

  try {

    return asset.keys().get(position)

  } catch (e: any) {

    throw new Error('Error: getAssetName: no asset name at position: ' + position)
  }
}
export const getAssetAmount     = (asset: CSL.Assets, name: CSL.AssetName): CSL.BigNum => {

  try {

    let assetAmount           = asset.get(name)

    if(assetAmount)           { return assetAmount }

  } catch (e: any) {

    throw new Error('Error: getAssetAmount: cannot read: ' + name.name())
  }

  throw new Error('Error: getAssetAmount: ' + name.name())
}
export const getAssetNameReadable  = (asset: CSL.AssetName):   string => {

  try {

    const name: string = uint8ArrayToUtf8String(asset.name())

    if(name.length > 0) {

      return name

    } else {

      return toHexString(asset.name())
    }

  } catch (e: any) {

    throw new Error('Error: getAssetNameReadable')
  }
}
export const getPolicyNameReadable = (assets: CSL.ScriptHash): string => {

  try {

    return toHexString(assets.to_bytes())

  } catch (e: any) {

    throw new Error('Error: getPolicyNameReadable')
  }
}

export const hasMultiAsset    = (value: CSL.Value) => {

  return value.multiasset() !== undefined
}

export const logCoin          = (logId: string, value: CSL.Value) => {

  try {

    const lovelace            = value.coin()

    addLogImportant(logId, '<b><i>lovelace: ' + lovelace.to_str() + '</i></b>')

  } catch (e) {

    addLogError(logId, '&nbsp;&nbsp;&bull; could not parse coin')
  }
}
export const logMultiAsset    = (logId: string, value: CSL.Value) => {

  try {

    if(hasMultiAsset(value)) {

      addLogImportant(logId, '<i>assets:</i>')

      addLogSucceeded(logId, '&nbsp;&nbsp;&bull; balance has multiAsset')

      const multiAsset          = value.multiasset()!
      const numAssets           = multiAsset.keys().len()

      for(let i: number = 0; i < numAssets; i++) {

        addLogSucceeded(logId, '&nbsp;&nbsp;&bull; policyId')

        const policyId          = getMultiAssetPolicyId(multiAsset, i)
        const asset             = getMultiAssetFromPolicyId(multiAsset, policyId)

        addLogSucceeded(logId, '&nbsp;&nbsp;&bull; policyId has asset')

        for (let iii: number = 0; iii < asset!.keys().len(); iii++) {

          const assetName       = getAssetName(asset, iii)
          const assetAmount     = getAssetAmount(asset, assetName)

          addLogSucceeded(logId, '&nbsp;&nbsp;&bull; retrieved asset for policyId')

          const readableAssetName   = getAssetNameReadable(assetName)
          const readablePolicyName  = getPolicyNameReadable(policyId)

          addLogSucceeded(logId, '&nbsp;&nbsp;&bull; amount: ' + assetAmount.to_str())
          addLogSucceeded(logId, '&nbsp;&nbsp;&bull; name:   ' + readableAssetName)
          addLogSucceeded(logId, '&nbsp;&nbsp;&bull; policy: ' + readablePolicyName)

          addLogImportant(logId, '<b>' + readableAssetName + ': ' + assetAmount.to_str() + '</b>')
        }
      }
    }

  } catch (e) {

    addLogError(logId, '&nbsp;&nbsp;&bull; could not parse multi assets')
  }
}
export const logAddress       = (logId: string, address: CSL.Address) => {

  try {

    const bech32              = address.to_bech32()

    addLogImportant(logId, '<b><i>'+bech32+'</i></b>')

  } catch (e) {

    addLogError(logId, '&nbsp;&nbsp;&bull; could not parse address')
  }
}
export const logUtxo          = (logId: string, utxo: CSL.TransactionUnspentOutput) => {

  try {

    const input               = utxo.input()
    const output              = utxo.output()

    addLogImportant(logId, '<b><i>'+toHexString(input.transaction_id().to_bytes())+'#'+input.index()+'</i></b>')

    const address             = output.address()

    logAddress(logId, address)

    const value               = output.amount()

    logCoin(      logId, value)
    logMultiAsset(logId, value)

  } catch (e) {

    addLogError(logId, '&nbsp;&nbsp;&bull; could not parse address')
  }
}

export const signTxLocally    = (logId: string, txBody: string, witnessSet: string): string | null => {

  try {

    const body                = CSL.TransactionBody.from_bytes(toUint8Array(txBody))
    const wit                 = CSL.TransactionWitnessSet.from_bytes(toUint8Array(witnessSet))
    const txHash              = CSL.hash_transaction(body)
    const signedTx            = CSL.Transaction.new(body, wit)

    addLogImportant(logId, '<b><i>seialized: '+toHexString(txHash.to_bytes())+'</i></b>')

    return toHexString(signedTx.to_bytes())

  } catch (e) {

    addLogError(logId, '&nbsp;&nbsp;&bull; could not serialize transaction')
  }

  return null
}
