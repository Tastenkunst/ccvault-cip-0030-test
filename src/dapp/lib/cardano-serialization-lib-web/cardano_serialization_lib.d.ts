/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadatum}
*/
export function encode_arbitrary_bytes_as_metadatum(bytes: Uint8Array): TransactionMetadatum;
/**
* @param {TransactionMetadatum} metadata
* @returns {Uint8Array}
*/
export function decode_arbitrary_bytes_from_metadatum(metadata: TransactionMetadatum): Uint8Array;
/**
* @param {string} json
* @param {number} schema
* @returns {TransactionMetadatum}
*/
export function encode_json_str_to_metadatum(json: string, schema: number): TransactionMetadatum;
/**
* @param {TransactionMetadatum} metadatum
* @param {number} schema
* @returns {string}
*/
export function decode_metadatum_to_json_str(metadatum: TransactionMetadatum, schema: number): string;
/**
* @param {TransactionHash} tx_body_hash
* @param {ByronAddress} addr
* @param {LegacyDaedalusPrivateKey} key
* @returns {BootstrapWitness}
*/
export function make_daedalus_bootstrap_witness(tx_body_hash: TransactionHash, addr: ByronAddress, key: LegacyDaedalusPrivateKey): BootstrapWitness;
/**
* @param {TransactionHash} tx_body_hash
* @param {ByronAddress} addr
* @param {Bip32PrivateKey} key
* @returns {BootstrapWitness}
*/
export function make_icarus_bootstrap_witness(tx_body_hash: TransactionHash, addr: ByronAddress, key: Bip32PrivateKey): BootstrapWitness;
/**
* @param {TransactionHash} tx_body_hash
* @param {PrivateKey} sk
* @returns {Vkeywitness}
*/
export function make_vkey_witness(tx_body_hash: TransactionHash, sk: PrivateKey): Vkeywitness;
/**
* @param {AuxiliaryData} auxiliary_data
* @returns {AuxiliaryDataHash}
*/
export function hash_auxiliary_data(auxiliary_data: AuxiliaryData): AuxiliaryDataHash;
/**
* @param {TransactionBody} tx_body
* @returns {TransactionHash}
*/
export function hash_transaction(tx_body: TransactionBody): TransactionHash;
/**
* @param {PlutusData} plutus_data
* @returns {DataHash}
*/
export function hash_plutus_data(plutus_data: PlutusData): DataHash;
/**
* @param {Redeemers} redeemers
* @param {Costmdls} cost_models
* @param {PlutusList | undefined} datums
* @returns {ScriptDataHash}
*/
export function hash_script_data(redeemers: Redeemers, cost_models: Costmdls, datums?: PlutusList): ScriptDataHash;
/**
* @param {TransactionBody} txbody
* @param {BigNum} pool_deposit
* @param {BigNum} key_deposit
* @returns {Value}
*/
export function get_implicit_input(txbody: TransactionBody, pool_deposit: BigNum, key_deposit: BigNum): Value;
/**
* @param {TransactionBody} txbody
* @param {BigNum} pool_deposit
* @param {BigNum} key_deposit
* @returns {BigNum}
*/
export function get_deposit(txbody: TransactionBody, pool_deposit: BigNum, key_deposit: BigNum): BigNum;
/**
* @param {Value} assets
* @param {BigNum} minimum_utxo_val
* @returns {BigNum}
*/
export function min_ada_required(assets: Value, minimum_utxo_val: BigNum): BigNum;
/**
* Receives a script JSON string
* and returns a NativeScript.
* Cardano Wallet and Node styles are supported.
*
* * wallet: https://github.com/input-output-hk/cardano-wallet/blob/master/specifications/api/swagger.yaml
* * node: https://github.com/input-output-hk/cardano-node/blob/master/doc/reference/simple-scripts.md
*
* self_xpub is expected to be a Bip32PublicKey as hex-encoded bytes
* @param {string} json
* @param {string} self_xpub
* @param {number} schema
* @returns {NativeScript}
*/
export function encode_json_str_to_native_script(json: string, self_xpub: string, schema: number): NativeScript;
/**
* @param {string} password
* @param {string} salt
* @param {string} nonce
* @param {string} data
* @returns {string}
*/
export function encrypt_with_password(password: string, salt: string, nonce: string, data: string): string;
/**
* @param {string} password
* @param {string} data
* @returns {string}
*/
export function decrypt_with_password(password: string, data: string): string;
/**
* @param {Transaction} tx
* @param {LinearFee} linear_fee
* @returns {BigNum}
*/
export function min_fee(tx: Transaction, linear_fee: LinearFee): BigNum;
/**
*/
export enum CertificateKind {
  StakeRegistration,
  StakeDeregistration,
  StakeDelegation,
  PoolRegistration,
  PoolRetirement,
  GenesisKeyDelegation,
  MoveInstantaneousRewardsCert,
}
/**
*/
export enum MIRPot {
  Reserves,
  Treasury,
}
/**
*/
export enum MIRKind {
  ToOtherPot,
  ToStakeCredentials,
}
/**
*/
export enum RelayKind {
  SingleHostAddr,
  SingleHostName,
  MultiHostName,
}
/**
*/
export enum NativeScriptKind {
  ScriptPubkey,
  ScriptAll,
  ScriptAny,
  ScriptNOfK,
  TimelockStart,
  TimelockExpiry,
}
/**
* Each new language uses a different namespace for hashing its script
* This is because you could have a language where the same bytes have different semantics
* So this avoids scripts in different languages mapping to the same hash
* Note that the enum value here is different than the enum value for deciding the cost model of a script
*/
export enum ScriptHashNamespace {
  NativeScript,
}
/**
*/
export enum NetworkIdKind {
  Testnet,
  Mainnet,
}
/**
*/
export enum TransactionMetadatumKind {
  MetadataMap,
  MetadataList,
  Int,
  Bytes,
  Text,
}
/**
*/
export enum MetadataJsonSchema {
  NoConversions,
  BasicConversions,
  DetailedSchema,
}
/**
* Used to choosed the schema for a script JSON string
*/
export enum ScriptSchema {
  Wallet,
  Node,
}
/**
*/
export enum StakeCredKind {
  Key,
  Script,
}
/**
*/
export enum LanguageKind {
  PlutusV1,
}
/**
*/
export enum PlutusDataKind {
  ConstrPlutusData,
  Map,
  List,
  Integer,
  Bytes,
}
/**
*/
export enum RedeemerTagKind {
  Spend,
  Mint,
  Cert,
  Reward,
}
/**
*/
export class Address {
  free(): void;
/**
* @param {Uint8Array} data
* @returns {Address}
*/
  static from_bytes(data: Uint8Array): Address;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string | undefined} prefix
* @returns {string}
*/
  to_bech32(prefix?: string): string;
/**
* @param {string} bech_str
* @returns {Address}
*/
  static from_bech32(bech_str: string): Address;
/**
* @returns {number}
*/
  network_id(): number;
}
/**
*/
export class AssetName {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {AssetName}
*/
  static from_bytes(bytes: Uint8Array): AssetName;
/**
* @param {Uint8Array} name
* @returns {AssetName}
*/
  static new(name: Uint8Array): AssetName;
/**
* @returns {Uint8Array}
*/
  name(): Uint8Array;
}
/**
*/
export class AssetNames {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {AssetNames}
*/
  static from_bytes(bytes: Uint8Array): AssetNames;
/**
* @returns {AssetNames}
*/
  static new(): AssetNames;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {AssetName}
*/
  get(index: number): AssetName;
/**
* @param {AssetName} elem
*/
  add(elem: AssetName): void;
}
/**
*/
export class Assets {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Assets}
*/
  static from_bytes(bytes: Uint8Array): Assets;
/**
* @returns {Assets}
*/
  static new(): Assets;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {AssetName} key
* @param {BigNum} value
* @returns {BigNum | undefined}
*/
  insert(key: AssetName, value: BigNum): BigNum | undefined;
/**
* @param {AssetName} key
* @returns {BigNum | undefined}
*/
  get(key: AssetName): BigNum | undefined;
/**
* @returns {AssetNames}
*/
  keys(): AssetNames;
}
/**
*/
export class AuxiliaryData {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {AuxiliaryData}
*/
  static from_bytes(bytes: Uint8Array): AuxiliaryData;
/**
* @returns {AuxiliaryData}
*/
  static new(): AuxiliaryData;
/**
* @returns {GeneralTransactionMetadata | undefined}
*/
  metadata(): GeneralTransactionMetadata | undefined;
/**
* @param {GeneralTransactionMetadata} metadata
*/
  set_metadata(metadata: GeneralTransactionMetadata): void;
/**
* @returns {NativeScripts | undefined}
*/
  native_scripts(): NativeScripts | undefined;
/**
* @param {NativeScripts} native_scripts
*/
  set_native_scripts(native_scripts: NativeScripts): void;
/**
* @returns {PlutusScripts | undefined}
*/
  plutus_scripts(): PlutusScripts | undefined;
/**
* @param {PlutusScripts} plutus_scripts
*/
  set_plutus_scripts(plutus_scripts: PlutusScripts): void;
}
/**
*/
export class AuxiliaryDataHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {AuxiliaryDataHash}
*/
  static from_bech32(bech_str: string): AuxiliaryDataHash;
/**
* @param {Uint8Array} bytes
* @returns {AuxiliaryDataHash}
*/
  static from_bytes(bytes: Uint8Array): AuxiliaryDataHash;
}
/**
*/
export class AuxiliaryDataSet {
  free(): void;
/**
* @returns {AuxiliaryDataSet}
*/
  static new(): AuxiliaryDataSet;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} tx_index
* @param {AuxiliaryData} data
* @returns {AuxiliaryData | undefined}
*/
  insert(tx_index: number, data: AuxiliaryData): AuxiliaryData | undefined;
/**
* @param {number} tx_index
* @returns {AuxiliaryData | undefined}
*/
  get(tx_index: number): AuxiliaryData | undefined;
/**
* @returns {Uint32Array}
*/
  indices(): Uint32Array;
}
/**
*/
export class BaseAddress {
  free(): void;
/**
* @param {number} network
* @param {StakeCredential} payment
* @param {StakeCredential} stake
* @returns {BaseAddress}
*/
  static new(network: number, payment: StakeCredential, stake: StakeCredential): BaseAddress;
/**
* @returns {StakeCredential}
*/
  payment_cred(): StakeCredential;
/**
* @returns {StakeCredential}
*/
  stake_cred(): StakeCredential;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} addr
* @returns {BaseAddress | undefined}
*/
  static from_address(addr: Address): BaseAddress | undefined;
}
/**
*/
export class BigInt {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {BigInt}
*/
  static from_bytes(bytes: Uint8Array): BigInt;
/**
* @returns {BigNum | undefined}
*/
  as_u64(): BigNum | undefined;
/**
* @param {string} text
* @returns {BigInt}
*/
  static from_str(text: string): BigInt;
/**
* @returns {string}
*/
  to_str(): string;
}
/**
*/
export class BigNum {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {BigNum}
*/
  static from_bytes(bytes: Uint8Array): BigNum;
/**
* @param {string} string
* @returns {BigNum}
*/
  static from_str(string: string): BigNum;
/**
* @returns {string}
*/
  to_str(): string;
/**
* @returns {BigNum}
*/
  static zero(): BigNum;
/**
* @returns {boolean}
*/
  is_zero(): boolean;
/**
* @param {BigNum} other
* @returns {BigNum}
*/
  checked_mul(other: BigNum): BigNum;
/**
* @param {BigNum} other
* @returns {BigNum}
*/
  checked_add(other: BigNum): BigNum;
/**
* @param {BigNum} other
* @returns {BigNum}
*/
  checked_sub(other: BigNum): BigNum;
/**
* returns 0 if it would otherwise underflow
* @param {BigNum} other
* @returns {BigNum}
*/
  clamped_sub(other: BigNum): BigNum;
/**
* @param {BigNum} rhs_value
* @returns {number}
*/
  compare(rhs_value: BigNum): number;
}
/**
*/
export class Bip32PrivateKey {
  free(): void;
/**
* derive this private key with the given index.
*
* # Security considerations
*
* * hard derivation index cannot be soft derived with the public key
*
* # Hard derivation vs Soft derivation
*
* If you pass an index below 0x80000000 then it is a soft derivation.
* The advantage of soft derivation is that it is possible to derive the
* public key too. I.e. derivation the private key with a soft derivation
* index and then retrieving the associated public key is equivalent to
* deriving the public key associated to the parent private key.
*
* Hard derivation index does not allow public key derivation.
*
* This is why deriving the private key should not fail while deriving
* the public key may fail (if the derivation index is invalid).
* @param {number} index
* @returns {Bip32PrivateKey}
*/
  derive(index: number): Bip32PrivateKey;
/**
* 128-byte xprv a key format in Cardano that some software still uses or requires
* the traditional 96-byte xprv is simply encoded as
* prv | chaincode
* however, because some software may not know how to compute a public key from a private key,
* the 128-byte inlines the public key in the following format
* prv | pub | chaincode
* so be careful if you see the term "xprv" as it could refer to either one
* our library does not require the pub (instead we compute the pub key when needed)
* @param {Uint8Array} bytes
* @returns {Bip32PrivateKey}
*/
  static from_128_xprv(bytes: Uint8Array): Bip32PrivateKey;
/**
* see from_128_xprv
* @returns {Uint8Array}
*/
  to_128_xprv(): Uint8Array;
/**
* @returns {Bip32PrivateKey}
*/
  static generate_ed25519_bip32(): Bip32PrivateKey;
/**
* @returns {PrivateKey}
*/
  to_raw_key(): PrivateKey;
/**
* @returns {Bip32PublicKey}
*/
  to_public(): Bip32PublicKey;
/**
* @param {Uint8Array} bytes
* @returns {Bip32PrivateKey}
*/
  static from_bytes(bytes: Uint8Array): Bip32PrivateKey;
/**
* @returns {Uint8Array}
*/
  as_bytes(): Uint8Array;
/**
* @param {string} bech32_str
* @returns {Bip32PrivateKey}
*/
  static from_bech32(bech32_str: string): Bip32PrivateKey;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @param {Uint8Array} entropy
* @param {Uint8Array} password
* @returns {Bip32PrivateKey}
*/
  static from_bip39_entropy(entropy: Uint8Array, password: Uint8Array): Bip32PrivateKey;
/**
* @returns {Uint8Array}
*/
  chaincode(): Uint8Array;
}
/**
*/
export class Bip32PublicKey {
  free(): void;
/**
* derive this public key with the given index.
*
* # Errors
*
* If the index is not a soft derivation index (< 0x80000000) then
* calling this method will fail.
*
* # Security considerations
*
* * hard derivation index cannot be soft derived with the public key
*
* # Hard derivation vs Soft derivation
*
* If you pass an index below 0x80000000 then it is a soft derivation.
* The advantage of soft derivation is that it is possible to derive the
* public key too. I.e. derivation the private key with a soft derivation
* index and then retrieving the associated public key is equivalent to
* deriving the public key associated to the parent private key.
*
* Hard derivation index does not allow public key derivation.
*
* This is why deriving the private key should not fail while deriving
* the public key may fail (if the derivation index is invalid).
* @param {number} index
* @returns {Bip32PublicKey}
*/
  derive(index: number): Bip32PublicKey;
/**
* @returns {PublicKey}
*/
  to_raw_key(): PublicKey;
/**
* @param {Uint8Array} bytes
* @returns {Bip32PublicKey}
*/
  static from_bytes(bytes: Uint8Array): Bip32PublicKey;
/**
* @returns {Uint8Array}
*/
  as_bytes(): Uint8Array;
/**
* @param {string} bech32_str
* @returns {Bip32PublicKey}
*/
  static from_bech32(bech32_str: string): Bip32PublicKey;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @returns {Uint8Array}
*/
  chaincode(): Uint8Array;
}
/**
*/
export class Block {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Block}
*/
  static from_bytes(bytes: Uint8Array): Block;
/**
* @returns {Header}
*/
  header(): Header;
/**
* @returns {TransactionBodies}
*/
  transaction_bodies(): TransactionBodies;
/**
* @returns {TransactionWitnessSets}
*/
  transaction_witness_sets(): TransactionWitnessSets;
/**
* @returns {AuxiliaryDataSet}
*/
  auxiliary_data_set(): AuxiliaryDataSet;
/**
* @returns {Uint32Array}
*/
  invalid_transactions(): Uint32Array;
/**
* @param {Header} header
* @param {TransactionBodies} transaction_bodies
* @param {TransactionWitnessSets} transaction_witness_sets
* @param {AuxiliaryDataSet} auxiliary_data_set
* @param {Uint32Array} invalid_transactions
* @returns {Block}
*/
  static new(header: Header, transaction_bodies: TransactionBodies, transaction_witness_sets: TransactionWitnessSets, auxiliary_data_set: AuxiliaryDataSet, invalid_transactions: Uint32Array): Block;
}
/**
*/
export class BlockHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {BlockHash}
*/
  static from_bech32(bech_str: string): BlockHash;
/**
* @param {Uint8Array} bytes
* @returns {BlockHash}
*/
  static from_bytes(bytes: Uint8Array): BlockHash;
}
/**
*/
export class BootstrapWitness {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {BootstrapWitness}
*/
  static from_bytes(bytes: Uint8Array): BootstrapWitness;
/**
* @returns {Vkey}
*/
  vkey(): Vkey;
/**
* @returns {Ed25519Signature}
*/
  signature(): Ed25519Signature;
/**
* @returns {Uint8Array}
*/
  chain_code(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  attributes(): Uint8Array;
/**
* @param {Vkey} vkey
* @param {Ed25519Signature} signature
* @param {Uint8Array} chain_code
* @param {Uint8Array} attributes
* @returns {BootstrapWitness}
*/
  static new(vkey: Vkey, signature: Ed25519Signature, chain_code: Uint8Array, attributes: Uint8Array): BootstrapWitness;
}
/**
*/
export class BootstrapWitnesses {
  free(): void;
/**
* @returns {BootstrapWitnesses}
*/
  static new(): BootstrapWitnesses;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {BootstrapWitness}
*/
  get(index: number): BootstrapWitness;
/**
* @param {BootstrapWitness} elem
*/
  add(elem: BootstrapWitness): void;
}
/**
*/
export class ByronAddress {
  free(): void;
/**
* @returns {string}
*/
  to_base58(): string;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ByronAddress}
*/
  static from_bytes(bytes: Uint8Array): ByronAddress;
/**
* returns the byron protocol magic embedded in the address, or mainnet id if none is present
* note: for bech32 addresses, you need to use network_id instead
* @returns {number}
*/
  byron_protocol_magic(): number;
/**
* @returns {Uint8Array}
*/
  attributes(): Uint8Array;
/**
* @returns {number}
*/
  network_id(): number;
/**
* @param {string} s
* @returns {ByronAddress}
*/
  static from_base58(s: string): ByronAddress;
/**
* @param {Bip32PublicKey} key
* @param {number} protocol_magic
* @returns {ByronAddress}
*/
  static icarus_from_key(key: Bip32PublicKey, protocol_magic: number): ByronAddress;
/**
* @param {string} s
* @returns {boolean}
*/
  static is_valid(s: string): boolean;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} addr
* @returns {ByronAddress | undefined}
*/
  static from_address(addr: Address): ByronAddress | undefined;
}
/**
*/
export class Certificate {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Certificate}
*/
  static from_bytes(bytes: Uint8Array): Certificate;
/**
* @param {StakeRegistration} stake_registration
* @returns {Certificate}
*/
  static new_stake_registration(stake_registration: StakeRegistration): Certificate;
/**
* @param {StakeDeregistration} stake_deregistration
* @returns {Certificate}
*/
  static new_stake_deregistration(stake_deregistration: StakeDeregistration): Certificate;
/**
* @param {StakeDelegation} stake_delegation
* @returns {Certificate}
*/
  static new_stake_delegation(stake_delegation: StakeDelegation): Certificate;
/**
* @param {PoolRegistration} pool_registration
* @returns {Certificate}
*/
  static new_pool_registration(pool_registration: PoolRegistration): Certificate;
/**
* @param {PoolRetirement} pool_retirement
* @returns {Certificate}
*/
  static new_pool_retirement(pool_retirement: PoolRetirement): Certificate;
/**
* @param {GenesisKeyDelegation} genesis_key_delegation
* @returns {Certificate}
*/
  static new_genesis_key_delegation(genesis_key_delegation: GenesisKeyDelegation): Certificate;
/**
* @param {MoveInstantaneousRewardsCert} move_instantaneous_rewards_cert
* @returns {Certificate}
*/
  static new_move_instantaneous_rewards_cert(move_instantaneous_rewards_cert: MoveInstantaneousRewardsCert): Certificate;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {StakeRegistration | undefined}
*/
  as_stake_registration(): StakeRegistration | undefined;
/**
* @returns {StakeDeregistration | undefined}
*/
  as_stake_deregistration(): StakeDeregistration | undefined;
/**
* @returns {StakeDelegation | undefined}
*/
  as_stake_delegation(): StakeDelegation | undefined;
/**
* @returns {PoolRegistration | undefined}
*/
  as_pool_registration(): PoolRegistration | undefined;
/**
* @returns {PoolRetirement | undefined}
*/
  as_pool_retirement(): PoolRetirement | undefined;
/**
* @returns {GenesisKeyDelegation | undefined}
*/
  as_genesis_key_delegation(): GenesisKeyDelegation | undefined;
/**
* @returns {MoveInstantaneousRewardsCert | undefined}
*/
  as_move_instantaneous_rewards_cert(): MoveInstantaneousRewardsCert | undefined;
}
/**
*/
export class Certificates {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Certificates}
*/
  static from_bytes(bytes: Uint8Array): Certificates;
/**
* @returns {Certificates}
*/
  static new(): Certificates;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Certificate}
*/
  get(index: number): Certificate;
/**
* @param {Certificate} elem
*/
  add(elem: Certificate): void;
}
/**
*/
export class ConstrPlutusData {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ConstrPlutusData}
*/
  static from_bytes(bytes: Uint8Array): ConstrPlutusData;
/**
* @returns {Int}
*/
  tag(): Int;
/**
* @returns {PlutusList}
*/
  data(): PlutusList;
/**
* @param {Int} tag
* @param {PlutusList} data
* @returns {ConstrPlutusData}
*/
  static new(tag: Int, data: PlutusList): ConstrPlutusData;
}
/**
*/
export class CostModel {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {CostModel}
*/
  static from_bytes(bytes: Uint8Array): CostModel;
/**
* @returns {CostModel}
*/
  static new(): CostModel;
/**
* @param {number} operation
* @param {Int} cost
* @returns {Int}
*/
  set(operation: number, cost: Int): Int;
/**
* @param {number} operation
* @returns {Int}
*/
  get(operation: number): Int;
}
/**
*/
export class Costmdls {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Costmdls}
*/
  static from_bytes(bytes: Uint8Array): Costmdls;
/**
* @returns {Costmdls}
*/
  static new(): Costmdls;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {Language} key
* @param {CostModel} value
* @returns {CostModel | undefined}
*/
  insert(key: Language, value: CostModel): CostModel | undefined;
/**
* @param {Language} key
* @returns {CostModel | undefined}
*/
  get(key: Language): CostModel | undefined;
/**
* @returns {Languages}
*/
  keys(): Languages;
}
/**
*/
export class DNSRecordAorAAAA {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {DNSRecordAorAAAA}
*/
  static from_bytes(bytes: Uint8Array): DNSRecordAorAAAA;
/**
* @param {string} dns_name
* @returns {DNSRecordAorAAAA}
*/
  static new(dns_name: string): DNSRecordAorAAAA;
/**
* @returns {string}
*/
  record(): string;
}
/**
*/
export class DNSRecordSRV {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {DNSRecordSRV}
*/
  static from_bytes(bytes: Uint8Array): DNSRecordSRV;
/**
* @param {string} dns_name
* @returns {DNSRecordSRV}
*/
  static new(dns_name: string): DNSRecordSRV;
/**
* @returns {string}
*/
  record(): string;
}
/**
*/
export class DataHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {DataHash}
*/
  static from_bech32(bech_str: string): DataHash;
/**
* @param {Uint8Array} bytes
* @returns {DataHash}
*/
  static from_bytes(bytes: Uint8Array): DataHash;
}
/**
*/
export class Ed25519KeyHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {Ed25519KeyHash}
*/
  static from_bech32(bech_str: string): Ed25519KeyHash;
/**
* @param {Uint8Array} bytes
* @returns {Ed25519KeyHash}
*/
  static from_bytes(bytes: Uint8Array): Ed25519KeyHash;
}
/**
*/
export class Ed25519KeyHashes {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Ed25519KeyHashes}
*/
  static from_bytes(bytes: Uint8Array): Ed25519KeyHashes;
/**
* @returns {Ed25519KeyHashes}
*/
  static new(): Ed25519KeyHashes;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Ed25519KeyHash}
*/
  get(index: number): Ed25519KeyHash;
/**
* @param {Ed25519KeyHash} elem
*/
  add(elem: Ed25519KeyHash): void;
}
/**
*/
export class Ed25519Signature {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @returns {string}
*/
  to_hex(): string;
/**
* @param {string} bech32_str
* @returns {Ed25519Signature}
*/
  static from_bech32(bech32_str: string): Ed25519Signature;
/**
* @param {string} input
* @returns {Ed25519Signature}
*/
  static from_hex(input: string): Ed25519Signature;
/**
* @param {Uint8Array} bytes
* @returns {Ed25519Signature}
*/
  static from_bytes(bytes: Uint8Array): Ed25519Signature;
}
/**
*/
export class EnterpriseAddress {
  free(): void;
/**
* @param {number} network
* @param {StakeCredential} payment
* @returns {EnterpriseAddress}
*/
  static new(network: number, payment: StakeCredential): EnterpriseAddress;
/**
* @returns {StakeCredential}
*/
  payment_cred(): StakeCredential;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} addr
* @returns {EnterpriseAddress | undefined}
*/
  static from_address(addr: Address): EnterpriseAddress | undefined;
}
/**
*/
export class ExUnitPrices {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ExUnitPrices}
*/
  static from_bytes(bytes: Uint8Array): ExUnitPrices;
/**
* @returns {UnitInterval}
*/
  mem_price(): UnitInterval;
/**
* @returns {UnitInterval}
*/
  step_price(): UnitInterval;
/**
* @param {UnitInterval} mem_price
* @param {UnitInterval} step_price
* @returns {ExUnitPrices}
*/
  static new(mem_price: UnitInterval, step_price: UnitInterval): ExUnitPrices;
}
/**
*/
export class ExUnits {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ExUnits}
*/
  static from_bytes(bytes: Uint8Array): ExUnits;
/**
* @returns {BigNum}
*/
  mem(): BigNum;
/**
* @returns {BigNum}
*/
  steps(): BigNum;
/**
* @param {BigNum} mem
* @param {BigNum} steps
* @returns {ExUnits}
*/
  static new(mem: BigNum, steps: BigNum): ExUnits;
}
/**
*/
export class GeneralTransactionMetadata {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {GeneralTransactionMetadata}
*/
  static from_bytes(bytes: Uint8Array): GeneralTransactionMetadata;
/**
* @returns {GeneralTransactionMetadata}
*/
  static new(): GeneralTransactionMetadata;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {BigNum} key
* @param {TransactionMetadatum} value
* @returns {TransactionMetadatum | undefined}
*/
  insert(key: BigNum, value: TransactionMetadatum): TransactionMetadatum | undefined;
/**
* @param {BigNum} key
* @returns {TransactionMetadatum | undefined}
*/
  get(key: BigNum): TransactionMetadatum | undefined;
/**
* @returns {TransactionMetadatumLabels}
*/
  keys(): TransactionMetadatumLabels;
}
/**
*/
export class GenesisDelegateHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {GenesisDelegateHash}
*/
  static from_bech32(bech_str: string): GenesisDelegateHash;
/**
* @param {Uint8Array} bytes
* @returns {GenesisDelegateHash}
*/
  static from_bytes(bytes: Uint8Array): GenesisDelegateHash;
}
/**
*/
export class GenesisHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {GenesisHash}
*/
  static from_bech32(bech_str: string): GenesisHash;
/**
* @param {Uint8Array} bytes
* @returns {GenesisHash}
*/
  static from_bytes(bytes: Uint8Array): GenesisHash;
}
/**
*/
export class GenesisHashes {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {GenesisHashes}
*/
  static from_bytes(bytes: Uint8Array): GenesisHashes;
/**
* @returns {GenesisHashes}
*/
  static new(): GenesisHashes;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {GenesisHash}
*/
  get(index: number): GenesisHash;
/**
* @param {GenesisHash} elem
*/
  add(elem: GenesisHash): void;
}
/**
*/
export class GenesisKeyDelegation {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {GenesisKeyDelegation}
*/
  static from_bytes(bytes: Uint8Array): GenesisKeyDelegation;
/**
* @returns {GenesisHash}
*/
  genesishash(): GenesisHash;
/**
* @returns {GenesisDelegateHash}
*/
  genesis_delegate_hash(): GenesisDelegateHash;
/**
* @returns {VRFKeyHash}
*/
  vrf_keyhash(): VRFKeyHash;
/**
* @param {GenesisHash} genesishash
* @param {GenesisDelegateHash} genesis_delegate_hash
* @param {VRFKeyHash} vrf_keyhash
* @returns {GenesisKeyDelegation}
*/
  static new(genesishash: GenesisHash, genesis_delegate_hash: GenesisDelegateHash, vrf_keyhash: VRFKeyHash): GenesisKeyDelegation;
}
/**
*/
export class Header {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Header}
*/
  static from_bytes(bytes: Uint8Array): Header;
/**
* @returns {HeaderBody}
*/
  header_body(): HeaderBody;
/**
* @returns {KESSignature}
*/
  body_signature(): KESSignature;
/**
* @param {HeaderBody} header_body
* @param {KESSignature} body_signature
* @returns {Header}
*/
  static new(header_body: HeaderBody, body_signature: KESSignature): Header;
}
/**
*/
export class HeaderBody {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {HeaderBody}
*/
  static from_bytes(bytes: Uint8Array): HeaderBody;
/**
* @returns {number}
*/
  block_number(): number;
/**
* @returns {number}
*/
  slot(): number;
/**
* @returns {BlockHash | undefined}
*/
  prev_hash(): BlockHash | undefined;
/**
* @returns {Vkey}
*/
  issuer_vkey(): Vkey;
/**
* @returns {VRFVKey}
*/
  vrf_vkey(): VRFVKey;
/**
* @returns {VRFCert}
*/
  nonce_vrf(): VRFCert;
/**
* @returns {VRFCert}
*/
  leader_vrf(): VRFCert;
/**
* @returns {number}
*/
  block_body_size(): number;
/**
* @returns {BlockHash}
*/
  block_body_hash(): BlockHash;
/**
* @returns {OperationalCert}
*/
  operational_cert(): OperationalCert;
/**
* @returns {ProtocolVersion}
*/
  protocol_version(): ProtocolVersion;
/**
* @param {number} block_number
* @param {number} slot
* @param {BlockHash | undefined} prev_hash
* @param {Vkey} issuer_vkey
* @param {VRFVKey} vrf_vkey
* @param {VRFCert} nonce_vrf
* @param {VRFCert} leader_vrf
* @param {number} block_body_size
* @param {BlockHash} block_body_hash
* @param {OperationalCert} operational_cert
* @param {ProtocolVersion} protocol_version
* @returns {HeaderBody}
*/
  static new(block_number: number, slot: number, prev_hash: BlockHash | undefined, issuer_vkey: Vkey, vrf_vkey: VRFVKey, nonce_vrf: VRFCert, leader_vrf: VRFCert, block_body_size: number, block_body_hash: BlockHash, operational_cert: OperationalCert, protocol_version: ProtocolVersion): HeaderBody;
}
/**
*/
export class Int {
  free(): void;
/**
* @param {BigNum} x
* @returns {Int}
*/
  static new(x: BigNum): Int;
/**
* @param {BigNum} x
* @returns {Int}
*/
  static new_negative(x: BigNum): Int;
/**
* @param {number} x
* @returns {Int}
*/
  static new_i32(x: number): Int;
/**
* @returns {boolean}
*/
  is_positive(): boolean;
/**
* @returns {BigNum | undefined}
*/
  as_positive(): BigNum | undefined;
/**
* @returns {BigNum | undefined}
*/
  as_negative(): BigNum | undefined;
/**
* @returns {number | undefined}
*/
  as_i32(): number | undefined;
}
/**
*/
export class Ipv4 {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Ipv4}
*/
  static from_bytes(bytes: Uint8Array): Ipv4;
/**
* @param {Uint8Array} data
* @returns {Ipv4}
*/
  static new(data: Uint8Array): Ipv4;
/**
* @returns {Uint8Array}
*/
  ip(): Uint8Array;
}
/**
*/
export class Ipv6 {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Ipv6}
*/
  static from_bytes(bytes: Uint8Array): Ipv6;
/**
* @param {Uint8Array} data
* @returns {Ipv6}
*/
  static new(data: Uint8Array): Ipv6;
/**
* @returns {Uint8Array}
*/
  ip(): Uint8Array;
}
/**
*/
export class KESSignature {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {KESSignature}
*/
  static from_bytes(bytes: Uint8Array): KESSignature;
}
/**
*/
export class KESVKey {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {KESVKey}
*/
  static from_bech32(bech_str: string): KESVKey;
/**
* @param {Uint8Array} bytes
* @returns {KESVKey}
*/
  static from_bytes(bytes: Uint8Array): KESVKey;
}
/**
*/
export class Language {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Language}
*/
  static from_bytes(bytes: Uint8Array): Language;
/**
* @returns {Language}
*/
  static new_plutus_v1(): Language;
/**
* @returns {number}
*/
  kind(): number;
}
/**
*/
export class Languages {
  free(): void;
/**
* @returns {Languages}
*/
  static new(): Languages;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Language}
*/
  get(index: number): Language;
/**
* @param {Language} elem
*/
  add(elem: Language): void;
}
/**
*/
export class LegacyDaedalusPrivateKey {
  free(): void;
/**
* @param {Uint8Array} bytes
* @returns {LegacyDaedalusPrivateKey}
*/
  static from_bytes(bytes: Uint8Array): LegacyDaedalusPrivateKey;
/**
* @returns {Uint8Array}
*/
  as_bytes(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  chaincode(): Uint8Array;
}
/**
*/
export class LinearFee {
  free(): void;
/**
* @returns {BigNum}
*/
  constant(): BigNum;
/**
* @returns {BigNum}
*/
  coefficient(): BigNum;
/**
* @param {BigNum} coefficient
* @param {BigNum} constant
* @returns {LinearFee}
*/
  static new(coefficient: BigNum, constant: BigNum): LinearFee;
}
/**
*/
export class MIRToStakeCredentials {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MIRToStakeCredentials}
*/
  static from_bytes(bytes: Uint8Array): MIRToStakeCredentials;
/**
* @returns {MIRToStakeCredentials}
*/
  static new(): MIRToStakeCredentials;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {StakeCredential} cred
* @param {Int} delta
* @returns {Int | undefined}
*/
  insert(cred: StakeCredential, delta: Int): Int | undefined;
/**
* @param {StakeCredential} cred
* @returns {Int | undefined}
*/
  get(cred: StakeCredential): Int | undefined;
/**
* @returns {StakeCredentials}
*/
  keys(): StakeCredentials;
}
/**
*/
export class MetadataList {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MetadataList}
*/
  static from_bytes(bytes: Uint8Array): MetadataList;
/**
* @returns {MetadataList}
*/
  static new(): MetadataList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionMetadatum}
*/
  get(index: number): TransactionMetadatum;
/**
* @param {TransactionMetadatum} elem
*/
  add(elem: TransactionMetadatum): void;
}
/**
*/
export class MetadataMap {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MetadataMap}
*/
  static from_bytes(bytes: Uint8Array): MetadataMap;
/**
* @returns {MetadataMap}
*/
  static new(): MetadataMap;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {TransactionMetadatum} key
* @param {TransactionMetadatum} value
* @returns {TransactionMetadatum | undefined}
*/
  insert(key: TransactionMetadatum, value: TransactionMetadatum): TransactionMetadatum | undefined;
/**
* @param {string} key
* @param {TransactionMetadatum} value
* @returns {TransactionMetadatum | undefined}
*/
  insert_str(key: string, value: TransactionMetadatum): TransactionMetadatum | undefined;
/**
* @param {number} key
* @param {TransactionMetadatum} value
* @returns {TransactionMetadatum | undefined}
*/
  insert_i32(key: number, value: TransactionMetadatum): TransactionMetadatum | undefined;
/**
* @param {TransactionMetadatum} key
* @returns {TransactionMetadatum}
*/
  get(key: TransactionMetadatum): TransactionMetadatum;
/**
* @param {string} key
* @returns {TransactionMetadatum}
*/
  get_str(key: string): TransactionMetadatum;
/**
* @param {number} key
* @returns {TransactionMetadatum}
*/
  get_i32(key: number): TransactionMetadatum;
/**
* @param {TransactionMetadatum} key
* @returns {boolean}
*/
  has(key: TransactionMetadatum): boolean;
/**
* @returns {MetadataList}
*/
  keys(): MetadataList;
}
/**
*/
export class Mint {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Mint}
*/
  static from_bytes(bytes: Uint8Array): Mint;
/**
* @returns {Mint}
*/
  static new(): Mint;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {ScriptHash} key
* @param {MintAssets} value
* @returns {MintAssets | undefined}
*/
  insert(key: ScriptHash, value: MintAssets): MintAssets | undefined;
/**
* @param {ScriptHash} key
* @returns {MintAssets | undefined}
*/
  get(key: ScriptHash): MintAssets | undefined;
/**
* @returns {ScriptHashes}
*/
  keys(): ScriptHashes;
}
/**
*/
export class MintAssets {
  free(): void;
/**
* @returns {MintAssets}
*/
  static new(): MintAssets;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {AssetName} key
* @param {Int} value
* @returns {Int | undefined}
*/
  insert(key: AssetName, value: Int): Int | undefined;
/**
* @param {AssetName} key
* @returns {Int | undefined}
*/
  get(key: AssetName): Int | undefined;
/**
* @returns {AssetNames}
*/
  keys(): AssetNames;
}
/**
*/
export class MoveInstantaneousReward {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MoveInstantaneousReward}
*/
  static from_bytes(bytes: Uint8Array): MoveInstantaneousReward;
/**
* @param {number} pot
* @param {BigNum} amount
* @returns {MoveInstantaneousReward}
*/
  static new_to_other_pot(pot: number, amount: BigNum): MoveInstantaneousReward;
/**
* @param {number} pot
* @param {MIRToStakeCredentials} amounts
* @returns {MoveInstantaneousReward}
*/
  static new_to_stake_creds(pot: number, amounts: MIRToStakeCredentials): MoveInstantaneousReward;
/**
* @returns {number}
*/
  pot(): number;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {BigNum | undefined}
*/
  as_to_other_pot(): BigNum | undefined;
/**
* @returns {MIRToStakeCredentials | undefined}
*/
  as_to_stake_creds(): MIRToStakeCredentials | undefined;
}
/**
*/
export class MoveInstantaneousRewardsCert {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MoveInstantaneousRewardsCert}
*/
  static from_bytes(bytes: Uint8Array): MoveInstantaneousRewardsCert;
/**
* @returns {MoveInstantaneousReward}
*/
  move_instantaneous_reward(): MoveInstantaneousReward;
/**
* @param {MoveInstantaneousReward} move_instantaneous_reward
* @returns {MoveInstantaneousRewardsCert}
*/
  static new(move_instantaneous_reward: MoveInstantaneousReward): MoveInstantaneousRewardsCert;
}
/**
*/
export class MultiAsset {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MultiAsset}
*/
  static from_bytes(bytes: Uint8Array): MultiAsset;
/**
* @returns {MultiAsset}
*/
  static new(): MultiAsset;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {ScriptHash} key
* @param {Assets} value
* @returns {Assets | undefined}
*/
  insert(key: ScriptHash, value: Assets): Assets | undefined;
/**
* @param {ScriptHash} key
* @returns {Assets | undefined}
*/
  get(key: ScriptHash): Assets | undefined;
/**
* @returns {ScriptHashes}
*/
  keys(): ScriptHashes;
/**
* removes an asset from the list if the result is 0 or less
* @param {MultiAsset} rhs_ma
* @returns {MultiAsset}
*/
  sub(rhs_ma: MultiAsset): MultiAsset;
}
/**
*/
export class MultiHostName {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {MultiHostName}
*/
  static from_bytes(bytes: Uint8Array): MultiHostName;
/**
* @returns {DNSRecordSRV}
*/
  dns_name(): DNSRecordSRV;
/**
* @param {DNSRecordSRV} dns_name
* @returns {MultiHostName}
*/
  static new(dns_name: DNSRecordSRV): MultiHostName;
}
/**
*/
export class NativeScript {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {NativeScript}
*/
  static from_bytes(bytes: Uint8Array): NativeScript;
/**
* @param {number} namespace
* @returns {Ed25519KeyHash}
*/
  hash(namespace: number): Ed25519KeyHash;
/**
* @param {ScriptPubkey} script_pubkey
* @returns {NativeScript}
*/
  static new_script_pubkey(script_pubkey: ScriptPubkey): NativeScript;
/**
* @param {ScriptAll} script_all
* @returns {NativeScript}
*/
  static new_script_all(script_all: ScriptAll): NativeScript;
/**
* @param {ScriptAny} script_any
* @returns {NativeScript}
*/
  static new_script_any(script_any: ScriptAny): NativeScript;
/**
* @param {ScriptNOfK} script_n_of_k
* @returns {NativeScript}
*/
  static new_script_n_of_k(script_n_of_k: ScriptNOfK): NativeScript;
/**
* @param {TimelockStart} timelock_start
* @returns {NativeScript}
*/
  static new_timelock_start(timelock_start: TimelockStart): NativeScript;
/**
* @param {TimelockExpiry} timelock_expiry
* @returns {NativeScript}
*/
  static new_timelock_expiry(timelock_expiry: TimelockExpiry): NativeScript;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {ScriptPubkey | undefined}
*/
  as_script_pubkey(): ScriptPubkey | undefined;
/**
* @returns {ScriptAll | undefined}
*/
  as_script_all(): ScriptAll | undefined;
/**
* @returns {ScriptAny | undefined}
*/
  as_script_any(): ScriptAny | undefined;
/**
* @returns {ScriptNOfK | undefined}
*/
  as_script_n_of_k(): ScriptNOfK | undefined;
/**
* @returns {TimelockStart | undefined}
*/
  as_timelock_start(): TimelockStart | undefined;
/**
* @returns {TimelockExpiry | undefined}
*/
  as_timelock_expiry(): TimelockExpiry | undefined;
}
/**
*/
export class NativeScripts {
  free(): void;
/**
* @returns {NativeScripts}
*/
  static new(): NativeScripts;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {NativeScript}
*/
  get(index: number): NativeScript;
/**
* @param {NativeScript} elem
*/
  add(elem: NativeScript): void;
}
/**
*/
export class NetworkId {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {NetworkId}
*/
  static from_bytes(bytes: Uint8Array): NetworkId;
/**
* @returns {NetworkId}
*/
  static testnet(): NetworkId;
/**
* @returns {NetworkId}
*/
  static mainnet(): NetworkId;
/**
* @returns {number}
*/
  kind(): number;
}
/**
*/
export class NetworkInfo {
  free(): void;
/**
* @param {number} network_id
* @param {number} protocol_magic
* @returns {NetworkInfo}
*/
  static new(network_id: number, protocol_magic: number): NetworkInfo;
/**
* @returns {number}
*/
  network_id(): number;
/**
* @returns {number}
*/
  protocol_magic(): number;
/**
* @returns {NetworkInfo}
*/
  static testnet(): NetworkInfo;
/**
* @returns {NetworkInfo}
*/
  static mainnet(): NetworkInfo;
}
/**
*/
export class Nonce {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Nonce}
*/
  static from_bytes(bytes: Uint8Array): Nonce;
/**
* @returns {Nonce}
*/
  static new_identity(): Nonce;
/**
* @param {Uint8Array} hash
* @returns {Nonce}
*/
  static new_from_hash(hash: Uint8Array): Nonce;
/**
* @returns {Uint8Array | undefined}
*/
  get_hash(): Uint8Array | undefined;
}
/**
*/
export class OperationalCert {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {OperationalCert}
*/
  static from_bytes(bytes: Uint8Array): OperationalCert;
/**
* @returns {KESVKey}
*/
  hot_vkey(): KESVKey;
/**
* @returns {number}
*/
  sequence_number(): number;
/**
* @returns {number}
*/
  kes_period(): number;
/**
* @returns {Ed25519Signature}
*/
  sigma(): Ed25519Signature;
/**
* @param {KESVKey} hot_vkey
* @param {number} sequence_number
* @param {number} kes_period
* @param {Ed25519Signature} sigma
* @returns {OperationalCert}
*/
  static new(hot_vkey: KESVKey, sequence_number: number, kes_period: number, sigma: Ed25519Signature): OperationalCert;
}
/**
*/
export class PlutusData {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PlutusData}
*/
  static from_bytes(bytes: Uint8Array): PlutusData;
/**
* @param {ConstrPlutusData} constr_plutus_data
* @returns {PlutusData}
*/
  static new_constr_plutus_data(constr_plutus_data: ConstrPlutusData): PlutusData;
/**
* @param {PlutusMap} map
* @returns {PlutusData}
*/
  static new_map(map: PlutusMap): PlutusData;
/**
* @param {PlutusList} list
* @returns {PlutusData}
*/
  static new_list(list: PlutusList): PlutusData;
/**
* @param {BigInt} integer
* @returns {PlutusData}
*/
  static new_integer(integer: BigInt): PlutusData;
/**
* @param {Uint8Array} bytes
* @returns {PlutusData}
*/
  static new_bytes(bytes: Uint8Array): PlutusData;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {ConstrPlutusData | undefined}
*/
  as_constr_plutus_data(): ConstrPlutusData | undefined;
/**
* @returns {PlutusMap | undefined}
*/
  as_map(): PlutusMap | undefined;
/**
* @returns {PlutusList | undefined}
*/
  as_list(): PlutusList | undefined;
/**
* @returns {BigInt | undefined}
*/
  as_integer(): BigInt | undefined;
/**
* @returns {Uint8Array | undefined}
*/
  as_bytes(): Uint8Array | undefined;
}
/**
*/
export class PlutusList {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PlutusList}
*/
  static from_bytes(bytes: Uint8Array): PlutusList;
/**
* @returns {PlutusList}
*/
  static new(): PlutusList;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {PlutusData}
*/
  get(index: number): PlutusData;
/**
* @param {PlutusData} elem
*/
  add(elem: PlutusData): void;
}
/**
*/
export class PlutusMap {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PlutusMap}
*/
  static from_bytes(bytes: Uint8Array): PlutusMap;
/**
* @returns {PlutusMap}
*/
  static new(): PlutusMap;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {PlutusData} key
* @param {PlutusData} value
* @returns {PlutusData | undefined}
*/
  insert(key: PlutusData, value: PlutusData): PlutusData | undefined;
/**
* @param {PlutusData} key
* @returns {PlutusData | undefined}
*/
  get(key: PlutusData): PlutusData | undefined;
/**
* @returns {PlutusList}
*/
  keys(): PlutusList;
}
/**
*/
export class PlutusScript {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PlutusScript}
*/
  static from_bytes(bytes: Uint8Array): PlutusScript;
/**
* @param {Uint8Array} bytes
* @returns {PlutusScript}
*/
  static new(bytes: Uint8Array): PlutusScript;
/**
* @returns {Uint8Array}
*/
  bytes(): Uint8Array;
}
/**
*/
export class PlutusScripts {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PlutusScripts}
*/
  static from_bytes(bytes: Uint8Array): PlutusScripts;
/**
* @returns {PlutusScripts}
*/
  static new(): PlutusScripts;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {PlutusScript}
*/
  get(index: number): PlutusScript;
/**
* @param {PlutusScript} elem
*/
  add(elem: PlutusScript): void;
}
/**
*/
export class Pointer {
  free(): void;
/**
* @param {number} slot
* @param {number} tx_index
* @param {number} cert_index
* @returns {Pointer}
*/
  static new(slot: number, tx_index: number, cert_index: number): Pointer;
/**
* @returns {number}
*/
  slot(): number;
/**
* @returns {number}
*/
  tx_index(): number;
/**
* @returns {number}
*/
  cert_index(): number;
}
/**
*/
export class PointerAddress {
  free(): void;
/**
* @param {number} network
* @param {StakeCredential} payment
* @param {Pointer} stake
* @returns {PointerAddress}
*/
  static new(network: number, payment: StakeCredential, stake: Pointer): PointerAddress;
/**
* @returns {StakeCredential}
*/
  payment_cred(): StakeCredential;
/**
* @returns {Pointer}
*/
  stake_pointer(): Pointer;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} addr
* @returns {PointerAddress | undefined}
*/
  static from_address(addr: Address): PointerAddress | undefined;
}
/**
*/
export class PoolMetadata {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PoolMetadata}
*/
  static from_bytes(bytes: Uint8Array): PoolMetadata;
/**
* @returns {URL}
*/
  url(): URL;
/**
* @returns {PoolMetadataHash}
*/
  pool_metadata_hash(): PoolMetadataHash;
/**
* @param {URL} url
* @param {PoolMetadataHash} pool_metadata_hash
* @returns {PoolMetadata}
*/
  static new(url: URL, pool_metadata_hash: PoolMetadataHash): PoolMetadata;
}
/**
*/
export class PoolMetadataHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {PoolMetadataHash}
*/
  static from_bech32(bech_str: string): PoolMetadataHash;
/**
* @param {Uint8Array} bytes
* @returns {PoolMetadataHash}
*/
  static from_bytes(bytes: Uint8Array): PoolMetadataHash;
}
/**
*/
export class PoolParams {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PoolParams}
*/
  static from_bytes(bytes: Uint8Array): PoolParams;
/**
* @returns {Ed25519KeyHash}
*/
  operator(): Ed25519KeyHash;
/**
* @returns {VRFKeyHash}
*/
  vrf_keyhash(): VRFKeyHash;
/**
* @returns {BigNum}
*/
  pledge(): BigNum;
/**
* @returns {BigNum}
*/
  cost(): BigNum;
/**
* @returns {UnitInterval}
*/
  margin(): UnitInterval;
/**
* @returns {RewardAddress}
*/
  reward_account(): RewardAddress;
/**
* @returns {Ed25519KeyHashes}
*/
  pool_owners(): Ed25519KeyHashes;
/**
* @returns {Relays}
*/
  relays(): Relays;
/**
* @returns {PoolMetadata | undefined}
*/
  pool_metadata(): PoolMetadata | undefined;
/**
* @param {Ed25519KeyHash} operator
* @param {VRFKeyHash} vrf_keyhash
* @param {BigNum} pledge
* @param {BigNum} cost
* @param {UnitInterval} margin
* @param {RewardAddress} reward_account
* @param {Ed25519KeyHashes} pool_owners
* @param {Relays} relays
* @param {PoolMetadata | undefined} pool_metadata
* @returns {PoolParams}
*/
  static new(operator: Ed25519KeyHash, vrf_keyhash: VRFKeyHash, pledge: BigNum, cost: BigNum, margin: UnitInterval, reward_account: RewardAddress, pool_owners: Ed25519KeyHashes, relays: Relays, pool_metadata?: PoolMetadata): PoolParams;
}
/**
*/
export class PoolRegistration {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PoolRegistration}
*/
  static from_bytes(bytes: Uint8Array): PoolRegistration;
/**
* @returns {PoolParams}
*/
  pool_params(): PoolParams;
/**
* @param {PoolParams} pool_params
* @returns {PoolRegistration}
*/
  static new(pool_params: PoolParams): PoolRegistration;
}
/**
*/
export class PoolRetirement {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PoolRetirement}
*/
  static from_bytes(bytes: Uint8Array): PoolRetirement;
/**
* @returns {Ed25519KeyHash}
*/
  pool_keyhash(): Ed25519KeyHash;
/**
* @returns {number}
*/
  epoch(): number;
/**
* @param {Ed25519KeyHash} pool_keyhash
* @param {number} epoch
* @returns {PoolRetirement}
*/
  static new(pool_keyhash: Ed25519KeyHash, epoch: number): PoolRetirement;
}
/**
*/
export class PrivateKey {
  free(): void;
/**
* @returns {PublicKey}
*/
  to_public(): PublicKey;
/**
* @returns {PrivateKey}
*/
  static generate_ed25519(): PrivateKey;
/**
* @returns {PrivateKey}
*/
  static generate_ed25519extended(): PrivateKey;
/**
* Get private key from its bech32 representation
* ```javascript
* PrivateKey.from_bech32(&#39;ed25519_sk1ahfetf02qwwg4dkq7mgp4a25lx5vh9920cr5wnxmpzz9906qvm8qwvlts0&#39;);
* ```
* For an extended 25519 key
* ```javascript
* PrivateKey.from_bech32(&#39;ed25519e_sk1gqwl4szuwwh6d0yk3nsqcc6xxc3fpvjlevgwvt60df59v8zd8f8prazt8ln3lmz096ux3xvhhvm3ca9wj2yctdh3pnw0szrma07rt5gl748fp&#39;);
* ```
* @param {string} bech32_str
* @returns {PrivateKey}
*/
  static from_bech32(bech32_str: string): PrivateKey;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @returns {Uint8Array}
*/
  as_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PrivateKey}
*/
  static from_extended_bytes(bytes: Uint8Array): PrivateKey;
/**
* @param {Uint8Array} bytes
* @returns {PrivateKey}
*/
  static from_normal_bytes(bytes: Uint8Array): PrivateKey;
/**
* @param {Uint8Array} message
* @returns {Ed25519Signature}
*/
  sign(message: Uint8Array): Ed25519Signature;
}
/**
*/
export class ProposedProtocolParameterUpdates {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ProposedProtocolParameterUpdates}
*/
  static from_bytes(bytes: Uint8Array): ProposedProtocolParameterUpdates;
/**
* @returns {ProposedProtocolParameterUpdates}
*/
  static new(): ProposedProtocolParameterUpdates;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {GenesisHash} key
* @param {ProtocolParamUpdate} value
* @returns {ProtocolParamUpdate | undefined}
*/
  insert(key: GenesisHash, value: ProtocolParamUpdate): ProtocolParamUpdate | undefined;
/**
* @param {GenesisHash} key
* @returns {ProtocolParamUpdate | undefined}
*/
  get(key: GenesisHash): ProtocolParamUpdate | undefined;
/**
* @returns {GenesisHashes}
*/
  keys(): GenesisHashes;
}
/**
*/
export class ProtocolParamUpdate {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ProtocolParamUpdate}
*/
  static from_bytes(bytes: Uint8Array): ProtocolParamUpdate;
/**
* @param {BigNum} minfee_a
*/
  set_minfee_a(minfee_a: BigNum): void;
/**
* @returns {BigNum | undefined}
*/
  minfee_a(): BigNum | undefined;
/**
* @param {BigNum} minfee_b
*/
  set_minfee_b(minfee_b: BigNum): void;
/**
* @returns {BigNum | undefined}
*/
  minfee_b(): BigNum | undefined;
/**
* @param {number} max_block_body_size
*/
  set_max_block_body_size(max_block_body_size: number): void;
/**
* @returns {number | undefined}
*/
  max_block_body_size(): number | undefined;
/**
* @param {number} max_tx_size
*/
  set_max_tx_size(max_tx_size: number): void;
/**
* @returns {number | undefined}
*/
  max_tx_size(): number | undefined;
/**
* @param {number} max_block_header_size
*/
  set_max_block_header_size(max_block_header_size: number): void;
/**
* @returns {number | undefined}
*/
  max_block_header_size(): number | undefined;
/**
* @param {BigNum} key_deposit
*/
  set_key_deposit(key_deposit: BigNum): void;
/**
* @returns {BigNum | undefined}
*/
  key_deposit(): BigNum | undefined;
/**
* @param {BigNum} pool_deposit
*/
  set_pool_deposit(pool_deposit: BigNum): void;
/**
* @returns {BigNum | undefined}
*/
  pool_deposit(): BigNum | undefined;
/**
* @param {number} max_epoch
*/
  set_max_epoch(max_epoch: number): void;
/**
* @returns {number | undefined}
*/
  max_epoch(): number | undefined;
/**
* @param {number} n_opt
*/
  set_n_opt(n_opt: number): void;
/**
* @returns {number | undefined}
*/
  n_opt(): number | undefined;
/**
* @param {UnitInterval} pool_pledge_influence
*/
  set_pool_pledge_influence(pool_pledge_influence: UnitInterval): void;
/**
* @returns {UnitInterval | undefined}
*/
  pool_pledge_influence(): UnitInterval | undefined;
/**
* @param {UnitInterval} expansion_rate
*/
  set_expansion_rate(expansion_rate: UnitInterval): void;
/**
* @returns {UnitInterval | undefined}
*/
  expansion_rate(): UnitInterval | undefined;
/**
* @param {UnitInterval} treasury_growth_rate
*/
  set_treasury_growth_rate(treasury_growth_rate: UnitInterval): void;
/**
* @returns {UnitInterval | undefined}
*/
  treasury_growth_rate(): UnitInterval | undefined;
/**
* @param {UnitInterval} d
*/
  set_d(d: UnitInterval): void;
/**
* @returns {UnitInterval | undefined}
*/
  d(): UnitInterval | undefined;
/**
* @param {Nonce} extra_entropy
*/
  set_extra_entropy(extra_entropy: Nonce): void;
/**
* @returns {Nonce | undefined}
*/
  extra_entropy(): Nonce | undefined;
/**
* @param {ProtocolVersions} protocol_version
*/
  set_protocol_version(protocol_version: ProtocolVersions): void;
/**
* @returns {ProtocolVersions | undefined}
*/
  protocol_version(): ProtocolVersions | undefined;
/**
* @param {BigNum} min_pool_cost
*/
  set_min_pool_cost(min_pool_cost: BigNum): void;
/**
* @returns {BigNum | undefined}
*/
  min_pool_cost(): BigNum | undefined;
/**
* @param {BigNum} ada_per_utxo_byte
*/
  set_ada_per_utxo_byte(ada_per_utxo_byte: BigNum): void;
/**
* @returns {BigNum | undefined}
*/
  ada_per_utxo_byte(): BigNum | undefined;
/**
* @param {Costmdls} cost_models
*/
  set_cost_models(cost_models: Costmdls): void;
/**
* @returns {Costmdls | undefined}
*/
  cost_models(): Costmdls | undefined;
/**
* @param {ExUnitPrices} execution_costs
*/
  set_execution_costs(execution_costs: ExUnitPrices): void;
/**
* @returns {ExUnitPrices | undefined}
*/
  execution_costs(): ExUnitPrices | undefined;
/**
* @param {ExUnits} max_tx_ex_units
*/
  set_max_tx_ex_units(max_tx_ex_units: ExUnits): void;
/**
* @returns {ExUnits | undefined}
*/
  max_tx_ex_units(): ExUnits | undefined;
/**
* @param {ExUnits} max_block_ex_units
*/
  set_max_block_ex_units(max_block_ex_units: ExUnits): void;
/**
* @returns {ExUnits | undefined}
*/
  max_block_ex_units(): ExUnits | undefined;
/**
* @param {number} max_value_size
*/
  set_max_value_size(max_value_size: number): void;
/**
* @returns {number | undefined}
*/
  max_value_size(): number | undefined;
/**
* @returns {ProtocolParamUpdate}
*/
  static new(): ProtocolParamUpdate;
}
/**
*/
export class ProtocolVersion {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ProtocolVersion}
*/
  static from_bytes(bytes: Uint8Array): ProtocolVersion;
/**
* @returns {number}
*/
  major(): number;
/**
* @returns {number}
*/
  minor(): number;
/**
* @param {number} major
* @param {number} minor
* @returns {ProtocolVersion}
*/
  static new(major: number, minor: number): ProtocolVersion;
}
/**
*/
export class ProtocolVersions {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ProtocolVersions}
*/
  static from_bytes(bytes: Uint8Array): ProtocolVersions;
/**
* @returns {ProtocolVersions}
*/
  static new(): ProtocolVersions;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {ProtocolVersion}
*/
  get(index: number): ProtocolVersion;
/**
* @param {ProtocolVersion} elem
*/
  add(elem: ProtocolVersion): void;
}
/**
* ED25519 key used as public key
*/
export class PublicKey {
  free(): void;
/**
* Get public key from its bech32 representation
* Example:
* ```javascript
* const pkey = PublicKey.from_bech32(&#39;ed25519_pk1dgaagyh470y66p899txcl3r0jaeaxu6yd7z2dxyk55qcycdml8gszkxze2&#39;);
* ```
* @param {string} bech32_str
* @returns {PublicKey}
*/
  static from_bech32(bech32_str: string): PublicKey;
/**
* @returns {string}
*/
  to_bech32(): string;
/**
* @returns {Uint8Array}
*/
  as_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {PublicKey}
*/
  static from_bytes(bytes: Uint8Array): PublicKey;
/**
* @param {Uint8Array} data
* @param {Ed25519Signature} signature
* @returns {boolean}
*/
  verify(data: Uint8Array, signature: Ed25519Signature): boolean;
/**
* @returns {Ed25519KeyHash}
*/
  hash(): Ed25519KeyHash;
}
/**
*/
export class PublicKeys {
  free(): void;
/**
*/
  constructor();
/**
* @returns {number}
*/
  size(): number;
/**
* @param {number} index
* @returns {PublicKey}
*/
  get(index: number): PublicKey;
/**
* @param {PublicKey} key
*/
  add(key: PublicKey): void;
}
/**
*/
export class Redeemer {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Redeemer}
*/
  static from_bytes(bytes: Uint8Array): Redeemer;
/**
* @returns {RedeemerTag}
*/
  tag(): RedeemerTag;
/**
* @returns {BigNum}
*/
  index(): BigNum;
/**
* @returns {PlutusData}
*/
  data(): PlutusData;
/**
* @returns {ExUnits}
*/
  ex_units(): ExUnits;
/**
* @param {RedeemerTag} tag
* @param {BigNum} index
* @param {PlutusData} data
* @param {ExUnits} ex_units
* @returns {Redeemer}
*/
  static new(tag: RedeemerTag, index: BigNum, data: PlutusData, ex_units: ExUnits): Redeemer;
}
/**
*/
export class RedeemerTag {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {RedeemerTag}
*/
  static from_bytes(bytes: Uint8Array): RedeemerTag;
/**
* @returns {RedeemerTag}
*/
  static new_spend(): RedeemerTag;
/**
* @returns {RedeemerTag}
*/
  static new_mint(): RedeemerTag;
/**
* @returns {RedeemerTag}
*/
  static new_cert(): RedeemerTag;
/**
* @returns {RedeemerTag}
*/
  static new_reward(): RedeemerTag;
/**
* @returns {number}
*/
  kind(): number;
}
/**
*/
export class Redeemers {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Redeemers}
*/
  static from_bytes(bytes: Uint8Array): Redeemers;
/**
* @returns {Redeemers}
*/
  static new(): Redeemers;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Redeemer}
*/
  get(index: number): Redeemer;
/**
* @param {Redeemer} elem
*/
  add(elem: Redeemer): void;
}
/**
*/
export class Relay {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Relay}
*/
  static from_bytes(bytes: Uint8Array): Relay;
/**
* @param {SingleHostAddr} single_host_addr
* @returns {Relay}
*/
  static new_single_host_addr(single_host_addr: SingleHostAddr): Relay;
/**
* @param {SingleHostName} single_host_name
* @returns {Relay}
*/
  static new_single_host_name(single_host_name: SingleHostName): Relay;
/**
* @param {MultiHostName} multi_host_name
* @returns {Relay}
*/
  static new_multi_host_name(multi_host_name: MultiHostName): Relay;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {SingleHostAddr | undefined}
*/
  as_single_host_addr(): SingleHostAddr | undefined;
/**
* @returns {SingleHostName | undefined}
*/
  as_single_host_name(): SingleHostName | undefined;
/**
* @returns {MultiHostName | undefined}
*/
  as_multi_host_name(): MultiHostName | undefined;
}
/**
*/
export class Relays {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Relays}
*/
  static from_bytes(bytes: Uint8Array): Relays;
/**
* @returns {Relays}
*/
  static new(): Relays;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Relay}
*/
  get(index: number): Relay;
/**
* @param {Relay} elem
*/
  add(elem: Relay): void;
}
/**
*/
export class RewardAddress {
  free(): void;
/**
* @param {number} network
* @param {StakeCredential} payment
* @returns {RewardAddress}
*/
  static new(network: number, payment: StakeCredential): RewardAddress;
/**
* @returns {StakeCredential}
*/
  payment_cred(): StakeCredential;
/**
* @returns {Address}
*/
  to_address(): Address;
/**
* @param {Address} addr
* @returns {RewardAddress | undefined}
*/
  static from_address(addr: Address): RewardAddress | undefined;
}
/**
*/
export class RewardAddresses {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {RewardAddresses}
*/
  static from_bytes(bytes: Uint8Array): RewardAddresses;
/**
* @returns {RewardAddresses}
*/
  static new(): RewardAddresses;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {RewardAddress}
*/
  get(index: number): RewardAddress;
/**
* @param {RewardAddress} elem
*/
  add(elem: RewardAddress): void;
}
/**
*/
export class ScriptAll {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ScriptAll}
*/
  static from_bytes(bytes: Uint8Array): ScriptAll;
/**
* @returns {NativeScripts}
*/
  native_scripts(): NativeScripts;
/**
* @param {NativeScripts} native_scripts
* @returns {ScriptAll}
*/
  static new(native_scripts: NativeScripts): ScriptAll;
}
/**
*/
export class ScriptAny {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ScriptAny}
*/
  static from_bytes(bytes: Uint8Array): ScriptAny;
/**
* @returns {NativeScripts}
*/
  native_scripts(): NativeScripts;
/**
* @param {NativeScripts} native_scripts
* @returns {ScriptAny}
*/
  static new(native_scripts: NativeScripts): ScriptAny;
}
/**
*/
export class ScriptDataHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {ScriptDataHash}
*/
  static from_bech32(bech_str: string): ScriptDataHash;
/**
* @param {Uint8Array} bytes
* @returns {ScriptDataHash}
*/
  static from_bytes(bytes: Uint8Array): ScriptDataHash;
}
/**
*/
export class ScriptHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {ScriptHash}
*/
  static from_bech32(bech_str: string): ScriptHash;
/**
* @param {Uint8Array} bytes
* @returns {ScriptHash}
*/
  static from_bytes(bytes: Uint8Array): ScriptHash;
}
/**
*/
export class ScriptHashes {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ScriptHashes}
*/
  static from_bytes(bytes: Uint8Array): ScriptHashes;
/**
* @returns {ScriptHashes}
*/
  static new(): ScriptHashes;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {ScriptHash}
*/
  get(index: number): ScriptHash;
/**
* @param {ScriptHash} elem
*/
  add(elem: ScriptHash): void;
}
/**
*/
export class ScriptNOfK {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ScriptNOfK}
*/
  static from_bytes(bytes: Uint8Array): ScriptNOfK;
/**
* @returns {number}
*/
  n(): number;
/**
* @returns {NativeScripts}
*/
  native_scripts(): NativeScripts;
/**
* @param {number} n
* @param {NativeScripts} native_scripts
* @returns {ScriptNOfK}
*/
  static new(n: number, native_scripts: NativeScripts): ScriptNOfK;
}
/**
*/
export class ScriptPubkey {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {ScriptPubkey}
*/
  static from_bytes(bytes: Uint8Array): ScriptPubkey;
/**
* @returns {Ed25519KeyHash}
*/
  addr_keyhash(): Ed25519KeyHash;
/**
* @param {Ed25519KeyHash} addr_keyhash
* @returns {ScriptPubkey}
*/
  static new(addr_keyhash: Ed25519KeyHash): ScriptPubkey;
}
/**
*/
export class SingleHostAddr {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {SingleHostAddr}
*/
  static from_bytes(bytes: Uint8Array): SingleHostAddr;
/**
* @returns {number | undefined}
*/
  port(): number | undefined;
/**
* @returns {Ipv4 | undefined}
*/
  ipv4(): Ipv4 | undefined;
/**
* @returns {Ipv6 | undefined}
*/
  ipv6(): Ipv6 | undefined;
/**
* @param {number | undefined} port
* @param {Ipv4 | undefined} ipv4
* @param {Ipv6 | undefined} ipv6
* @returns {SingleHostAddr}
*/
  static new(port?: number, ipv4?: Ipv4, ipv6?: Ipv6): SingleHostAddr;
}
/**
*/
export class SingleHostName {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {SingleHostName}
*/
  static from_bytes(bytes: Uint8Array): SingleHostName;
/**
* @returns {number | undefined}
*/
  port(): number | undefined;
/**
* @returns {DNSRecordAorAAAA}
*/
  dns_name(): DNSRecordAorAAAA;
/**
* @param {number | undefined} port
* @param {DNSRecordAorAAAA} dns_name
* @returns {SingleHostName}
*/
  static new(port: number | undefined, dns_name: DNSRecordAorAAAA): SingleHostName;
}
/**
*/
export class StakeCredential {
  free(): void;
/**
* @param {Ed25519KeyHash} hash
* @returns {StakeCredential}
*/
  static from_keyhash(hash: Ed25519KeyHash): StakeCredential;
/**
* @param {ScriptHash} hash
* @returns {StakeCredential}
*/
  static from_scripthash(hash: ScriptHash): StakeCredential;
/**
* @returns {Ed25519KeyHash | undefined}
*/
  to_keyhash(): Ed25519KeyHash | undefined;
/**
* @returns {ScriptHash | undefined}
*/
  to_scripthash(): ScriptHash | undefined;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {StakeCredential}
*/
  static from_bytes(bytes: Uint8Array): StakeCredential;
}
/**
*/
export class StakeCredentials {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {StakeCredentials}
*/
  static from_bytes(bytes: Uint8Array): StakeCredentials;
/**
* @returns {StakeCredentials}
*/
  static new(): StakeCredentials;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {StakeCredential}
*/
  get(index: number): StakeCredential;
/**
* @param {StakeCredential} elem
*/
  add(elem: StakeCredential): void;
}
/**
*/
export class StakeDelegation {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {StakeDelegation}
*/
  static from_bytes(bytes: Uint8Array): StakeDelegation;
/**
* @returns {StakeCredential}
*/
  stake_credential(): StakeCredential;
/**
* @returns {Ed25519KeyHash}
*/
  pool_keyhash(): Ed25519KeyHash;
/**
* @param {StakeCredential} stake_credential
* @param {Ed25519KeyHash} pool_keyhash
* @returns {StakeDelegation}
*/
  static new(stake_credential: StakeCredential, pool_keyhash: Ed25519KeyHash): StakeDelegation;
}
/**
*/
export class StakeDeregistration {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {StakeDeregistration}
*/
  static from_bytes(bytes: Uint8Array): StakeDeregistration;
/**
* @returns {StakeCredential}
*/
  stake_credential(): StakeCredential;
/**
* @param {StakeCredential} stake_credential
* @returns {StakeDeregistration}
*/
  static new(stake_credential: StakeCredential): StakeDeregistration;
}
/**
*/
export class StakeRegistration {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {StakeRegistration}
*/
  static from_bytes(bytes: Uint8Array): StakeRegistration;
/**
* @returns {StakeCredential}
*/
  stake_credential(): StakeCredential;
/**
* @param {StakeCredential} stake_credential
* @returns {StakeRegistration}
*/
  static new(stake_credential: StakeCredential): StakeRegistration;
}
/**
*/
export class Strings {
  free(): void;
/**
* @returns {Strings}
*/
  static new(): Strings;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {string}
*/
  get(index: number): string;
/**
* @param {string} elem
*/
  add(elem: string): void;
}
/**
*/
export class TimelockExpiry {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TimelockExpiry}
*/
  static from_bytes(bytes: Uint8Array): TimelockExpiry;
/**
* @returns {number}
*/
  slot(): number;
/**
* @param {number} slot
* @returns {TimelockExpiry}
*/
  static new(slot: number): TimelockExpiry;
}
/**
*/
export class TimelockStart {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TimelockStart}
*/
  static from_bytes(bytes: Uint8Array): TimelockStart;
/**
* @returns {number}
*/
  slot(): number;
/**
* @param {number} slot
* @returns {TimelockStart}
*/
  static new(slot: number): TimelockStart;
}
/**
*/
export class Transaction {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Transaction}
*/
  static from_bytes(bytes: Uint8Array): Transaction;
/**
* @returns {TransactionBody}
*/
  body(): TransactionBody;
/**
* @returns {TransactionWitnessSet}
*/
  witness_set(): TransactionWitnessSet;
/**
* @returns {AuxiliaryData | undefined}
*/
  auxiliary_data(): AuxiliaryData | undefined;
/**
* @param {TransactionBody} body
* @param {TransactionWitnessSet} witness_set
* @param {AuxiliaryData | undefined} auxiliary_data
* @returns {Transaction}
*/
  static new(body: TransactionBody, witness_set: TransactionWitnessSet, auxiliary_data?: AuxiliaryData): Transaction;
}
/**
*/
export class TransactionBodies {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionBodies}
*/
  static from_bytes(bytes: Uint8Array): TransactionBodies;
/**
* @returns {TransactionBodies}
*/
  static new(): TransactionBodies;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionBody}
*/
  get(index: number): TransactionBody;
/**
* @param {TransactionBody} elem
*/
  add(elem: TransactionBody): void;
}
/**
*/
export class TransactionBody {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionBody}
*/
  static from_bytes(bytes: Uint8Array): TransactionBody;
/**
* @returns {TransactionInputs}
*/
  inputs(): TransactionInputs;
/**
* @returns {TransactionOutputs}
*/
  outputs(): TransactionOutputs;
/**
* @returns {BigNum}
*/
  fee(): BigNum;
/**
* @returns {number | undefined}
*/
  ttl(): number | undefined;
/**
* @param {Certificates} certs
*/
  set_certs(certs: Certificates): void;
/**
* @returns {Certificates | undefined}
*/
  certs(): Certificates | undefined;
/**
* @param {Withdrawals} withdrawals
*/
  set_withdrawals(withdrawals: Withdrawals): void;
/**
* @returns {Withdrawals | undefined}
*/
  withdrawals(): Withdrawals | undefined;
/**
* @param {Update} update
*/
  set_update(update: Update): void;
/**
* @returns {Update | undefined}
*/
  update(): Update | undefined;
/**
* @param {AuxiliaryDataHash} auxiliary_data_hash
*/
  set_auxiliary_data_hash(auxiliary_data_hash: AuxiliaryDataHash): void;
/**
* @returns {AuxiliaryDataHash | undefined}
*/
  auxiliary_data_hash(): AuxiliaryDataHash | undefined;
/**
* @param {number} validity_start_interval
*/
  set_validity_start_interval(validity_start_interval: number): void;
/**
* @returns {number | undefined}
*/
  validity_start_interval(): number | undefined;
/**
* @param {Mint} mint
*/
  set_mint(mint: Mint): void;
/**
* @returns {Mint | undefined}
*/
  multiassets(): Mint | undefined;
/**
* @param {ScriptDataHash} script_data_hash
*/
  set_script_data_hash(script_data_hash: ScriptDataHash): void;
/**
* @returns {ScriptDataHash | undefined}
*/
  script_data_hash(): ScriptDataHash | undefined;
/**
* @param {TransactionInputs} collateral
*/
  set_collateral(collateral: TransactionInputs): void;
/**
* @returns {TransactionInputs | undefined}
*/
  collateral(): TransactionInputs | undefined;
/**
* @param {Ed25519KeyHashes} required_signers
*/
  set_required_signers(required_signers: Ed25519KeyHashes): void;
/**
* @returns {Ed25519KeyHashes | undefined}
*/
  required_signers(): Ed25519KeyHashes | undefined;
/**
* @param {NetworkId} network_id
*/
  set_network_id(network_id: NetworkId): void;
/**
* @returns {NetworkId | undefined}
*/
  network_id(): NetworkId | undefined;
/**
* @param {TransactionInputs} inputs
* @param {TransactionOutputs} outputs
* @param {BigNum} fee
* @param {number | undefined} ttl
* @returns {TransactionBody}
*/
  static new(inputs: TransactionInputs, outputs: TransactionOutputs, fee: BigNum, ttl?: number): TransactionBody;
}
/**
*/
export class TransactionBuilder {
  free(): void;
/**
* @param {Ed25519KeyHash} hash
* @param {TransactionInput} input
* @param {Value} amount
*/
  add_key_input(hash: Ed25519KeyHash, input: TransactionInput, amount: Value): void;
/**
* @param {ScriptHash} hash
* @param {TransactionInput} input
* @param {Value} amount
*/
  add_script_input(hash: ScriptHash, input: TransactionInput, amount: Value): void;
/**
* @param {ByronAddress} hash
* @param {TransactionInput} input
* @param {Value} amount
*/
  add_bootstrap_input(hash: ByronAddress, input: TransactionInput, amount: Value): void;
/**
* @param {Address} address
* @param {TransactionInput} input
* @param {Value} amount
*/
  add_input(address: Address, input: TransactionInput, amount: Value): void;
/**
* calculates how much the fee would increase if you added a given output
* @param {Address} address
* @param {TransactionInput} input
* @param {Value} amount
* @returns {BigNum}
*/
  fee_for_input(address: Address, input: TransactionInput, amount: Value): BigNum;
/**
* @param {TransactionOutput} output
*/
  add_output(output: TransactionOutput): void;
/**
* calculates how much the fee would increase if you added a given output
* @param {TransactionOutput} output
* @returns {BigNum}
*/
  fee_for_output(output: TransactionOutput): BigNum;
/**
* @param {BigNum} fee
*/
  set_fee(fee: BigNum): void;
/**
* @param {number} ttl
*/
  set_ttl(ttl: number): void;
/**
* @param {number} validity_start_interval
*/
  set_validity_start_interval(validity_start_interval: number): void;
/**
* @param {Certificates} certs
*/
  set_certs(certs: Certificates): void;
/**
* @param {Withdrawals} withdrawals
*/
  set_withdrawals(withdrawals: Withdrawals): void;
/**
* @param {AuxiliaryData} auxiliary_data
*/
  set_auxiliary_data(auxiliary_data: AuxiliaryData): void;
/**
* @param {boolean} prefer_pure_change
*/
  set_prefer_pure_change(prefer_pure_change: boolean): void;
/**
* @param {LinearFee} linear_fee
* @param {BigNum} minimum_utxo_val
* @param {BigNum} pool_deposit
* @param {BigNum} key_deposit
* @param {number} max_value_size
* @param {number} max_tx_size
* @returns {TransactionBuilder}
*/
  static new(linear_fee: LinearFee, minimum_utxo_val: BigNum, pool_deposit: BigNum, key_deposit: BigNum, max_value_size: number, max_tx_size: number): TransactionBuilder;
/**
* does not include refunds or withdrawals
* @returns {Value}
*/
  get_explicit_input(): Value;
/**
* withdrawals and refunds
* @returns {Value}
*/
  get_implicit_input(): Value;
/**
* does not include fee
* @returns {Value}
*/
  get_explicit_output(): Value;
/**
* @returns {BigNum}
*/
  get_deposit(): BigNum;
/**
* @returns {BigNum | undefined}
*/
  get_fee_if_set(): BigNum | undefined;
/**
* Warning: this function will mutate the /fee/ field
* @param {Address} address
* @returns {boolean}
*/
  add_change_if_needed(address: Address): boolean;
/**
* @returns {number}
*/
  full_size(): number;
/**
* @returns {Uint32Array}
*/
  output_sizes(): Uint32Array;
/**
* @returns {TransactionBody}
*/
  build(): TransactionBody;
/**
* warning: sum of all parts of a transaction must equal 0. You cannot just set the fee to the min value and forget about it
* warning: min_fee may be slightly larger than the actual minimum fee (ex: a few lovelaces)
* this is done to simplify the library code, but can be fixed later
* @returns {BigNum}
*/
  min_fee(): BigNum;
}
/**
*/
export class TransactionHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {TransactionHash}
*/
  static from_bech32(bech_str: string): TransactionHash;
/**
* @param {Uint8Array} bytes
* @returns {TransactionHash}
*/
  static from_bytes(bytes: Uint8Array): TransactionHash;
}
/**
*/
export class TransactionInput {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionInput}
*/
  static from_bytes(bytes: Uint8Array): TransactionInput;
/**
* @returns {TransactionHash}
*/
  transaction_id(): TransactionHash;
/**
* @returns {number}
*/
  index(): number;
/**
* @param {TransactionHash} transaction_id
* @param {number} index
* @returns {TransactionInput}
*/
  static new(transaction_id: TransactionHash, index: number): TransactionInput;
}
/**
*/
export class TransactionInputs {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionInputs}
*/
  static from_bytes(bytes: Uint8Array): TransactionInputs;
/**
* @returns {TransactionInputs}
*/
  static new(): TransactionInputs;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionInput}
*/
  get(index: number): TransactionInput;
/**
* @param {TransactionInput} elem
*/
  add(elem: TransactionInput): void;
}
/**
*/
export class TransactionMetadatum {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadatum}
*/
  static from_bytes(bytes: Uint8Array): TransactionMetadatum;
/**
* @param {MetadataMap} map
* @returns {TransactionMetadatum}
*/
  static new_map(map: MetadataMap): TransactionMetadatum;
/**
* @param {MetadataList} list
* @returns {TransactionMetadatum}
*/
  static new_list(list: MetadataList): TransactionMetadatum;
/**
* @param {Int} int
* @returns {TransactionMetadatum}
*/
  static new_int(int: Int): TransactionMetadatum;
/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadatum}
*/
  static new_bytes(bytes: Uint8Array): TransactionMetadatum;
/**
* @param {string} text
* @returns {TransactionMetadatum}
*/
  static new_text(text: string): TransactionMetadatum;
/**
* @returns {number}
*/
  kind(): number;
/**
* @returns {MetadataMap}
*/
  as_map(): MetadataMap;
/**
* @returns {MetadataList}
*/
  as_list(): MetadataList;
/**
* @returns {Int}
*/
  as_int(): Int;
/**
* @returns {Uint8Array}
*/
  as_bytes(): Uint8Array;
/**
* @returns {string}
*/
  as_text(): string;
}
/**
*/
export class TransactionMetadatumLabels {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionMetadatumLabels}
*/
  static from_bytes(bytes: Uint8Array): TransactionMetadatumLabels;
/**
* @returns {TransactionMetadatumLabels}
*/
  static new(): TransactionMetadatumLabels;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {BigNum}
*/
  get(index: number): BigNum;
/**
* @param {BigNum} elem
*/
  add(elem: BigNum): void;
}
/**
*/
export class TransactionOutput {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionOutput}
*/
  static from_bytes(bytes: Uint8Array): TransactionOutput;
/**
* @returns {Address}
*/
  address(): Address;
/**
* @returns {Value}
*/
  amount(): Value;
/**
* @returns {DataHash | undefined}
*/
  data_hash(): DataHash | undefined;
/**
* @param {DataHash} data_hash
*/
  set_data_hash(data_hash: DataHash): void;
/**
* @param {Address} address
* @param {Value} amount
* @returns {TransactionOutput}
*/
  static new(address: Address, amount: Value): TransactionOutput;
}
/**
*/
export class TransactionOutputs {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionOutputs}
*/
  static from_bytes(bytes: Uint8Array): TransactionOutputs;
/**
* @returns {TransactionOutputs}
*/
  static new(): TransactionOutputs;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionOutput}
*/
  get(index: number): TransactionOutput;
/**
* @param {TransactionOutput} elem
*/
  add(elem: TransactionOutput): void;
}
/**
*/
export class TransactionUnspentOutput {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionUnspentOutput}
*/
  static from_bytes(bytes: Uint8Array): TransactionUnspentOutput;
/**
* @param {TransactionInput} input
* @param {TransactionOutput} output
* @returns {TransactionUnspentOutput}
*/
  static new(input: TransactionInput, output: TransactionOutput): TransactionUnspentOutput;
/**
* @returns {TransactionInput}
*/
  input(): TransactionInput;
/**
* @returns {TransactionOutput}
*/
  output(): TransactionOutput;
}
/**
*/
export class TransactionWitnessSet {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionWitnessSet}
*/
  static from_bytes(bytes: Uint8Array): TransactionWitnessSet;
/**
* @param {Vkeywitnesses} vkeys
*/
  set_vkeys(vkeys: Vkeywitnesses): void;
/**
* @returns {Vkeywitnesses | undefined}
*/
  vkeys(): Vkeywitnesses | undefined;
/**
* @param {NativeScripts} native_scripts
*/
  set_native_scripts(native_scripts: NativeScripts): void;
/**
* @returns {NativeScripts | undefined}
*/
  native_scripts(): NativeScripts | undefined;
/**
* @param {BootstrapWitnesses} bootstraps
*/
  set_bootstraps(bootstraps: BootstrapWitnesses): void;
/**
* @returns {BootstrapWitnesses | undefined}
*/
  bootstraps(): BootstrapWitnesses | undefined;
/**
* @param {PlutusScripts} plutus_scripts
*/
  set_plutus_scripts(plutus_scripts: PlutusScripts): void;
/**
* @returns {PlutusScripts | undefined}
*/
  plutus_scripts(): PlutusScripts | undefined;
/**
* @param {PlutusList} plutus_data
*/
  set_plutus_data(plutus_data: PlutusList): void;
/**
* @returns {PlutusList | undefined}
*/
  plutus_data(): PlutusList | undefined;
/**
* @param {Redeemers} redeemers
*/
  set_redeemers(redeemers: Redeemers): void;
/**
* @returns {Redeemers | undefined}
*/
  redeemers(): Redeemers | undefined;
/**
* @returns {TransactionWitnessSet}
*/
  static new(): TransactionWitnessSet;
}
/**
*/
export class TransactionWitnessSets {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {TransactionWitnessSets}
*/
  static from_bytes(bytes: Uint8Array): TransactionWitnessSets;
/**
* @returns {TransactionWitnessSets}
*/
  static new(): TransactionWitnessSets;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {TransactionWitnessSet}
*/
  get(index: number): TransactionWitnessSet;
/**
* @param {TransactionWitnessSet} elem
*/
  add(elem: TransactionWitnessSet): void;
}
/**
*/
export class URL {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {URL}
*/
  static from_bytes(bytes: Uint8Array): URL;
/**
* @param {string} url
* @returns {URL}
*/
  static new(url: string): URL;
/**
* @returns {string}
*/
  url(): string;
}
/**
*/
export class UnitInterval {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {UnitInterval}
*/
  static from_bytes(bytes: Uint8Array): UnitInterval;
/**
* @returns {BigNum}
*/
  numerator(): BigNum;
/**
* @returns {BigNum}
*/
  denominator(): BigNum;
/**
* @param {BigNum} numerator
* @param {BigNum} denominator
* @returns {UnitInterval}
*/
  static new(numerator: BigNum, denominator: BigNum): UnitInterval;
}
/**
*/
export class Update {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Update}
*/
  static from_bytes(bytes: Uint8Array): Update;
/**
* @returns {ProposedProtocolParameterUpdates}
*/
  proposed_protocol_parameter_updates(): ProposedProtocolParameterUpdates;
/**
* @returns {number}
*/
  epoch(): number;
/**
* @param {ProposedProtocolParameterUpdates} proposed_protocol_parameter_updates
* @param {number} epoch
* @returns {Update}
*/
  static new(proposed_protocol_parameter_updates: ProposedProtocolParameterUpdates, epoch: number): Update;
}
/**
*/
export class VRFCert {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {VRFCert}
*/
  static from_bytes(bytes: Uint8Array): VRFCert;
/**
* @returns {Uint8Array}
*/
  output(): Uint8Array;
/**
* @returns {Uint8Array}
*/
  proof(): Uint8Array;
/**
* @param {Uint8Array} output
* @param {Uint8Array} proof
* @returns {VRFCert}
*/
  static new(output: Uint8Array, proof: Uint8Array): VRFCert;
}
/**
*/
export class VRFKeyHash {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {VRFKeyHash}
*/
  static from_bech32(bech_str: string): VRFKeyHash;
/**
* @param {Uint8Array} bytes
* @returns {VRFKeyHash}
*/
  static from_bytes(bytes: Uint8Array): VRFKeyHash;
}
/**
*/
export class VRFVKey {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {string} prefix
* @returns {string}
*/
  to_bech32(prefix: string): string;
/**
* @param {string} bech_str
* @returns {VRFVKey}
*/
  static from_bech32(bech_str: string): VRFVKey;
/**
* @param {Uint8Array} bytes
* @returns {VRFVKey}
*/
  static from_bytes(bytes: Uint8Array): VRFVKey;
}
/**
*/
export class Value {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Value}
*/
  static from_bytes(bytes: Uint8Array): Value;
/**
* @param {BigNum} coin
* @returns {Value}
*/
  static new(coin: BigNum): Value;
/**
* @returns {Value}
*/
  static zero(): Value;
/**
* @returns {boolean}
*/
  is_zero(): boolean;
/**
* @returns {BigNum}
*/
  coin(): BigNum;
/**
* @param {BigNum} coin
*/
  set_coin(coin: BigNum): void;
/**
* @returns {MultiAsset | undefined}
*/
  multiasset(): MultiAsset | undefined;
/**
* @param {MultiAsset} multiasset
*/
  set_multiasset(multiasset: MultiAsset): void;
/**
* @param {Value} rhs
* @returns {Value}
*/
  checked_add(rhs: Value): Value;
/**
* @param {Value} rhs_value
* @returns {Value}
*/
  checked_sub(rhs_value: Value): Value;
/**
* @param {Value} rhs_value
* @returns {Value}
*/
  clamped_sub(rhs_value: Value): Value;
/**
* note: values are only partially comparable
* @param {Value} rhs_value
* @returns {number | undefined}
*/
  compare(rhs_value: Value): number | undefined;
}
/**
*/
export class Vkey {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Vkey}
*/
  static from_bytes(bytes: Uint8Array): Vkey;
/**
* @param {PublicKey} pk
* @returns {Vkey}
*/
  static new(pk: PublicKey): Vkey;
/**
* @returns {PublicKey}
*/
  public_key(): PublicKey;
}
/**
*/
export class Vkeys {
  free(): void;
/**
* @returns {Vkeys}
*/
  static new(): Vkeys;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Vkey}
*/
  get(index: number): Vkey;
/**
* @param {Vkey} elem
*/
  add(elem: Vkey): void;
}
/**
*/
export class Vkeywitness {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Vkeywitness}
*/
  static from_bytes(bytes: Uint8Array): Vkeywitness;
/**
* @param {Vkey} vkey
* @param {Ed25519Signature} signature
* @returns {Vkeywitness}
*/
  static new(vkey: Vkey, signature: Ed25519Signature): Vkeywitness;
/**
* @returns {Vkey}
*/
  vkey(): Vkey;
/**
* @returns {Ed25519Signature}
*/
  signature(): Ed25519Signature;
}
/**
*/
export class Vkeywitnesses {
  free(): void;
/**
* @returns {Vkeywitnesses}
*/
  static new(): Vkeywitnesses;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {number} index
* @returns {Vkeywitness}
*/
  get(index: number): Vkeywitness;
/**
* @param {Vkeywitness} elem
*/
  add(elem: Vkeywitness): void;
}
/**
*/
export class Withdrawals {
  free(): void;
/**
* @returns {Uint8Array}
*/
  to_bytes(): Uint8Array;
/**
* @param {Uint8Array} bytes
* @returns {Withdrawals}
*/
  static from_bytes(bytes: Uint8Array): Withdrawals;
/**
* @returns {Withdrawals}
*/
  static new(): Withdrawals;
/**
* @returns {number}
*/
  len(): number;
/**
* @param {RewardAddress} key
* @param {BigNum} value
* @returns {BigNum | undefined}
*/
  insert(key: RewardAddress, value: BigNum): BigNum | undefined;
/**
* @param {RewardAddress} key
* @returns {BigNum | undefined}
*/
  get(key: RewardAddress): BigNum | undefined;
/**
* @returns {RewardAddresses}
*/
  keys(): RewardAddresses;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_unitinterval_free: (a: number) => void;
  readonly unitinterval_to_bytes: (a: number, b: number) => void;
  readonly unitinterval_from_bytes: (a: number, b: number) => number;
  readonly unitinterval_numerator: (a: number) => number;
  readonly unitinterval_denominator: (a: number) => number;
  readonly unitinterval_new: (a: number, b: number) => number;
  readonly __wbg_transaction_free: (a: number) => void;
  readonly transaction_to_bytes: (a: number, b: number) => void;
  readonly transaction_from_bytes: (a: number, b: number) => number;
  readonly transaction_body: (a: number) => number;
  readonly transaction_witness_set: (a: number) => number;
  readonly transaction_auxiliary_data: (a: number) => number;
  readonly transaction_new: (a: number, b: number, c: number) => number;
  readonly __wbg_transactioninputs_free: (a: number) => void;
  readonly transactioninputs_to_bytes: (a: number, b: number) => void;
  readonly transactioninputs_from_bytes: (a: number, b: number) => number;
  readonly transactioninputs_new: () => number;
  readonly transactioninputs_len: (a: number) => number;
  readonly transactioninputs_get: (a: number, b: number) => number;
  readonly transactioninputs_add: (a: number, b: number) => void;
  readonly __wbg_transactionoutputs_free: (a: number) => void;
  readonly transactionoutputs_to_bytes: (a: number, b: number) => void;
  readonly transactionoutputs_from_bytes: (a: number, b: number) => number;
  readonly transactionoutputs_new: () => number;
  readonly transactionoutputs_len: (a: number) => number;
  readonly transactionoutputs_get: (a: number, b: number) => number;
  readonly transactionoutputs_add: (a: number, b: number) => void;
  readonly __wbg_certificates_free: (a: number) => void;
  readonly certificates_to_bytes: (a: number, b: number) => void;
  readonly certificates_from_bytes: (a: number, b: number) => number;
  readonly certificates_new: () => number;
  readonly certificates_len: (a: number) => number;
  readonly certificates_get: (a: number, b: number) => number;
  readonly certificates_add: (a: number, b: number) => void;
  readonly __wbg_transactionbody_free: (a: number) => void;
  readonly transactionbody_to_bytes: (a: number, b: number) => void;
  readonly transactionbody_from_bytes: (a: number, b: number) => number;
  readonly transactionbody_inputs: (a: number) => number;
  readonly transactionbody_outputs: (a: number) => number;
  readonly transactionbody_fee: (a: number) => number;
  readonly transactionbody_ttl: (a: number, b: number) => void;
  readonly transactionbody_set_certs: (a: number, b: number) => void;
  readonly transactionbody_certs: (a: number) => number;
  readonly transactionbody_set_withdrawals: (a: number, b: number) => void;
  readonly transactionbody_withdrawals: (a: number) => number;
  readonly transactionbody_set_update: (a: number, b: number) => void;
  readonly transactionbody_update: (a: number) => number;
  readonly transactionbody_set_auxiliary_data_hash: (a: number, b: number) => void;
  readonly transactionbody_auxiliary_data_hash: (a: number) => number;
  readonly transactionbody_set_validity_start_interval: (a: number, b: number) => void;
  readonly transactionbody_validity_start_interval: (a: number, b: number) => void;
  readonly transactionbody_set_mint: (a: number, b: number) => void;
  readonly transactionbody_multiassets: (a: number) => number;
  readonly transactionbody_set_script_data_hash: (a: number, b: number) => void;
  readonly transactionbody_script_data_hash: (a: number) => number;
  readonly transactionbody_set_collateral: (a: number, b: number) => void;
  readonly transactionbody_collateral: (a: number) => number;
  readonly transactionbody_set_required_signers: (a: number, b: number) => void;
  readonly transactionbody_required_signers: (a: number) => number;
  readonly transactionbody_set_network_id: (a: number, b: number) => void;
  readonly transactionbody_network_id: (a: number) => number;
  readonly transactionbody_new: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly __wbg_transactioninput_free: (a: number) => void;
  readonly transactioninput_to_bytes: (a: number, b: number) => void;
  readonly transactioninput_from_bytes: (a: number, b: number) => number;
  readonly transactioninput_transaction_id: (a: number) => number;
  readonly transactioninput_index: (a: number) => number;
  readonly transactioninput_new: (a: number, b: number) => number;
  readonly __wbg_transactionoutput_free: (a: number) => void;
  readonly transactionoutput_to_bytes: (a: number, b: number) => void;
  readonly transactionoutput_from_bytes: (a: number, b: number) => number;
  readonly transactionoutput_address: (a: number) => number;
  readonly transactionoutput_amount: (a: number) => number;
  readonly transactionoutput_data_hash: (a: number) => number;
  readonly transactionoutput_set_data_hash: (a: number, b: number) => void;
  readonly transactionoutput_new: (a: number, b: number) => number;
  readonly __wbg_stakeregistration_free: (a: number) => void;
  readonly stakeregistration_to_bytes: (a: number, b: number) => void;
  readonly stakeregistration_from_bytes: (a: number, b: number) => number;
  readonly stakeregistration_stake_credential: (a: number) => number;
  readonly stakeregistration_new: (a: number) => number;
  readonly __wbg_stakederegistration_free: (a: number) => void;
  readonly stakederegistration_to_bytes: (a: number, b: number) => void;
  readonly stakederegistration_from_bytes: (a: number, b: number) => number;
  readonly stakederegistration_stake_credential: (a: number) => number;
  readonly stakederegistration_new: (a: number) => number;
  readonly __wbg_stakedelegation_free: (a: number) => void;
  readonly stakedelegation_to_bytes: (a: number, b: number) => void;
  readonly stakedelegation_from_bytes: (a: number, b: number) => number;
  readonly stakedelegation_stake_credential: (a: number) => number;
  readonly stakedelegation_pool_keyhash: (a: number) => number;
  readonly stakedelegation_new: (a: number, b: number) => number;
  readonly __wbg_ed25519keyhashes_free: (a: number) => void;
  readonly ed25519keyhashes_to_bytes: (a: number, b: number) => void;
  readonly ed25519keyhashes_from_bytes: (a: number, b: number) => number;
  readonly ed25519keyhashes_new: () => number;
  readonly ed25519keyhashes_len: (a: number) => number;
  readonly ed25519keyhashes_get: (a: number, b: number) => number;
  readonly ed25519keyhashes_add: (a: number, b: number) => void;
  readonly __wbg_relays_free: (a: number) => void;
  readonly relays_to_bytes: (a: number, b: number) => void;
  readonly relays_from_bytes: (a: number, b: number) => number;
  readonly relays_new: () => number;
  readonly relays_len: (a: number) => number;
  readonly relays_get: (a: number, b: number) => number;
  readonly relays_add: (a: number, b: number) => void;
  readonly __wbg_poolparams_free: (a: number) => void;
  readonly poolparams_to_bytes: (a: number, b: number) => void;
  readonly poolparams_from_bytes: (a: number, b: number) => number;
  readonly poolparams_operator: (a: number) => number;
  readonly poolparams_vrf_keyhash: (a: number) => number;
  readonly poolparams_pledge: (a: number) => number;
  readonly poolparams_cost: (a: number) => number;
  readonly poolparams_margin: (a: number) => number;
  readonly poolparams_reward_account: (a: number) => number;
  readonly poolparams_pool_owners: (a: number) => number;
  readonly poolparams_relays: (a: number) => number;
  readonly poolparams_pool_metadata: (a: number) => number;
  readonly poolparams_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly __wbg_poolregistration_free: (a: number) => void;
  readonly poolregistration_to_bytes: (a: number, b: number) => void;
  readonly poolregistration_from_bytes: (a: number, b: number) => number;
  readonly poolregistration_pool_params: (a: number) => number;
  readonly poolregistration_new: (a: number) => number;
  readonly __wbg_poolretirement_free: (a: number) => void;
  readonly poolretirement_to_bytes: (a: number, b: number) => void;
  readonly poolretirement_from_bytes: (a: number, b: number) => number;
  readonly poolretirement_pool_keyhash: (a: number) => number;
  readonly poolretirement_epoch: (a: number) => number;
  readonly poolretirement_new: (a: number, b: number) => number;
  readonly __wbg_genesiskeydelegation_free: (a: number) => void;
  readonly genesiskeydelegation_to_bytes: (a: number, b: number) => void;
  readonly genesiskeydelegation_from_bytes: (a: number, b: number) => number;
  readonly genesiskeydelegation_genesishash: (a: number) => number;
  readonly genesiskeydelegation_genesis_delegate_hash: (a: number) => number;
  readonly genesiskeydelegation_vrf_keyhash: (a: number) => number;
  readonly genesiskeydelegation_new: (a: number, b: number, c: number) => number;
  readonly __wbg_moveinstantaneousrewardscert_free: (a: number) => void;
  readonly moveinstantaneousrewardscert_to_bytes: (a: number, b: number) => void;
  readonly moveinstantaneousrewardscert_from_bytes: (a: number, b: number) => number;
  readonly moveinstantaneousrewardscert_move_instantaneous_reward: (a: number) => number;
  readonly moveinstantaneousrewardscert_new: (a: number) => number;
  readonly __wbg_certificate_free: (a: number) => void;
  readonly certificate_to_bytes: (a: number, b: number) => void;
  readonly certificate_from_bytes: (a: number, b: number) => number;
  readonly certificate_new_stake_registration: (a: number) => number;
  readonly certificate_new_stake_deregistration: (a: number) => number;
  readonly certificate_new_stake_delegation: (a: number) => number;
  readonly certificate_new_pool_registration: (a: number) => number;
  readonly certificate_new_pool_retirement: (a: number) => number;
  readonly certificate_new_genesis_key_delegation: (a: number) => number;
  readonly certificate_new_move_instantaneous_rewards_cert: (a: number) => number;
  readonly certificate_kind: (a: number) => number;
  readonly certificate_as_stake_registration: (a: number) => number;
  readonly certificate_as_stake_deregistration: (a: number) => number;
  readonly certificate_as_stake_delegation: (a: number) => number;
  readonly certificate_as_pool_registration: (a: number) => number;
  readonly certificate_as_pool_retirement: (a: number) => number;
  readonly certificate_as_genesis_key_delegation: (a: number) => number;
  readonly certificate_as_move_instantaneous_rewards_cert: (a: number) => number;
  readonly __wbg_mirtostakecredentials_free: (a: number) => void;
  readonly mirtostakecredentials_to_bytes: (a: number, b: number) => void;
  readonly mirtostakecredentials_from_bytes: (a: number, b: number) => number;
  readonly mirtostakecredentials_new: () => number;
  readonly mirtostakecredentials_len: (a: number) => number;
  readonly mirtostakecredentials_insert: (a: number, b: number, c: number) => number;
  readonly mirtostakecredentials_get: (a: number, b: number) => number;
  readonly mirtostakecredentials_keys: (a: number) => number;
  readonly __wbg_moveinstantaneousreward_free: (a: number) => void;
  readonly moveinstantaneousreward_to_bytes: (a: number, b: number) => void;
  readonly moveinstantaneousreward_from_bytes: (a: number, b: number) => number;
  readonly moveinstantaneousreward_new_to_other_pot: (a: number, b: number) => number;
  readonly moveinstantaneousreward_new_to_stake_creds: (a: number, b: number) => number;
  readonly moveinstantaneousreward_pot: (a: number) => number;
  readonly moveinstantaneousreward_kind: (a: number) => number;
  readonly moveinstantaneousreward_as_to_other_pot: (a: number) => number;
  readonly moveinstantaneousreward_as_to_stake_creds: (a: number) => number;
  readonly __wbg_ipv4_free: (a: number) => void;
  readonly ipv4_to_bytes: (a: number, b: number) => void;
  readonly ipv4_from_bytes: (a: number, b: number) => number;
  readonly ipv4_new: (a: number, b: number) => number;
  readonly ipv4_ip: (a: number, b: number) => void;
  readonly __wbg_ipv6_free: (a: number) => void;
  readonly ipv6_to_bytes: (a: number, b: number) => void;
  readonly ipv6_from_bytes: (a: number, b: number) => number;
  readonly ipv6_new: (a: number, b: number) => number;
  readonly ipv6_ip: (a: number, b: number) => void;
  readonly __wbg_url_free: (a: number) => void;
  readonly url_to_bytes: (a: number, b: number) => void;
  readonly url_from_bytes: (a: number, b: number) => number;
  readonly url_new: (a: number, b: number) => number;
  readonly url_url: (a: number, b: number) => void;
  readonly __wbg_dnsrecordaoraaaa_free: (a: number) => void;
  readonly dnsrecordaoraaaa_to_bytes: (a: number, b: number) => void;
  readonly dnsrecordaoraaaa_from_bytes: (a: number, b: number) => number;
  readonly dnsrecordaoraaaa_new: (a: number, b: number) => number;
  readonly dnsrecordaoraaaa_record: (a: number, b: number) => void;
  readonly __wbg_dnsrecordsrv_free: (a: number) => void;
  readonly dnsrecordsrv_to_bytes: (a: number, b: number) => void;
  readonly dnsrecordsrv_from_bytes: (a: number, b: number) => number;
  readonly dnsrecordsrv_new: (a: number, b: number) => number;
  readonly dnsrecordsrv_record: (a: number, b: number) => void;
  readonly __wbg_singlehostaddr_free: (a: number) => void;
  readonly singlehostaddr_to_bytes: (a: number, b: number) => void;
  readonly singlehostaddr_from_bytes: (a: number, b: number) => number;
  readonly singlehostaddr_port: (a: number) => number;
  readonly singlehostaddr_ipv4: (a: number) => number;
  readonly singlehostaddr_ipv6: (a: number) => number;
  readonly singlehostaddr_new: (a: number, b: number, c: number) => number;
  readonly __wbg_singlehostname_free: (a: number) => void;
  readonly singlehostname_to_bytes: (a: number, b: number) => void;
  readonly singlehostname_from_bytes: (a: number, b: number) => number;
  readonly singlehostname_port: (a: number) => number;
  readonly singlehostname_dns_name: (a: number) => number;
  readonly singlehostname_new: (a: number, b: number) => number;
  readonly __wbg_multihostname_free: (a: number) => void;
  readonly multihostname_to_bytes: (a: number, b: number) => void;
  readonly multihostname_from_bytes: (a: number, b: number) => number;
  readonly multihostname_dns_name: (a: number) => number;
  readonly multihostname_new: (a: number) => number;
  readonly __wbg_relay_free: (a: number) => void;
  readonly relay_to_bytes: (a: number, b: number) => void;
  readonly relay_from_bytes: (a: number, b: number) => number;
  readonly relay_new_single_host_addr: (a: number) => number;
  readonly relay_new_single_host_name: (a: number) => number;
  readonly relay_new_multi_host_name: (a: number) => number;
  readonly relay_kind: (a: number) => number;
  readonly relay_as_single_host_addr: (a: number) => number;
  readonly relay_as_single_host_name: (a: number) => number;
  readonly relay_as_multi_host_name: (a: number) => number;
  readonly __wbg_poolmetadata_free: (a: number) => void;
  readonly poolmetadata_to_bytes: (a: number, b: number) => void;
  readonly poolmetadata_from_bytes: (a: number, b: number) => number;
  readonly poolmetadata_url: (a: number) => number;
  readonly poolmetadata_pool_metadata_hash: (a: number) => number;
  readonly poolmetadata_new: (a: number, b: number) => number;
  readonly __wbg_stakecredentials_free: (a: number) => void;
  readonly stakecredentials_to_bytes: (a: number, b: number) => void;
  readonly stakecredentials_from_bytes: (a: number, b: number) => number;
  readonly stakecredentials_new: () => number;
  readonly stakecredentials_len: (a: number) => number;
  readonly stakecredentials_get: (a: number, b: number) => number;
  readonly stakecredentials_add: (a: number, b: number) => void;
  readonly __wbg_rewardaddresses_free: (a: number) => void;
  readonly rewardaddresses_to_bytes: (a: number, b: number) => void;
  readonly rewardaddresses_from_bytes: (a: number, b: number) => number;
  readonly rewardaddresses_new: () => number;
  readonly rewardaddresses_len: (a: number) => number;
  readonly rewardaddresses_get: (a: number, b: number) => number;
  readonly rewardaddresses_add: (a: number, b: number) => void;
  readonly __wbg_withdrawals_free: (a: number) => void;
  readonly withdrawals_to_bytes: (a: number, b: number) => void;
  readonly withdrawals_from_bytes: (a: number, b: number) => number;
  readonly withdrawals_new: () => number;
  readonly withdrawals_len: (a: number) => number;
  readonly withdrawals_insert: (a: number, b: number, c: number) => number;
  readonly withdrawals_get: (a: number, b: number) => number;
  readonly withdrawals_keys: (a: number) => number;
  readonly __wbg_transactionwitnessset_free: (a: number) => void;
  readonly transactionwitnessset_to_bytes: (a: number, b: number) => void;
  readonly transactionwitnessset_from_bytes: (a: number, b: number) => number;
  readonly transactionwitnessset_set_vkeys: (a: number, b: number) => void;
  readonly transactionwitnessset_vkeys: (a: number) => number;
  readonly transactionwitnessset_set_native_scripts: (a: number, b: number) => void;
  readonly transactionwitnessset_native_scripts: (a: number) => number;
  readonly transactionwitnessset_set_bootstraps: (a: number, b: number) => void;
  readonly transactionwitnessset_bootstraps: (a: number) => number;
  readonly transactionwitnessset_set_plutus_scripts: (a: number, b: number) => void;
  readonly transactionwitnessset_plutus_scripts: (a: number) => number;
  readonly transactionwitnessset_set_plutus_data: (a: number, b: number) => void;
  readonly transactionwitnessset_plutus_data: (a: number) => number;
  readonly transactionwitnessset_set_redeemers: (a: number, b: number) => void;
  readonly transactionwitnessset_redeemers: (a: number) => number;
  readonly transactionwitnessset_new: () => number;
  readonly __wbg_scriptpubkey_free: (a: number) => void;
  readonly scriptpubkey_to_bytes: (a: number, b: number) => void;
  readonly scriptpubkey_from_bytes: (a: number, b: number) => number;
  readonly scriptpubkey_addr_keyhash: (a: number) => number;
  readonly scriptpubkey_new: (a: number) => number;
  readonly __wbg_scriptall_free: (a: number) => void;
  readonly scriptall_to_bytes: (a: number, b: number) => void;
  readonly scriptall_from_bytes: (a: number, b: number) => number;
  readonly scriptall_native_scripts: (a: number) => number;
  readonly scriptall_new: (a: number) => number;
  readonly __wbg_scriptany_free: (a: number) => void;
  readonly scriptany_to_bytes: (a: number, b: number) => void;
  readonly scriptany_from_bytes: (a: number, b: number) => number;
  readonly scriptany_native_scripts: (a: number) => number;
  readonly scriptany_new: (a: number) => number;
  readonly __wbg_scriptnofk_free: (a: number) => void;
  readonly scriptnofk_to_bytes: (a: number, b: number) => void;
  readonly scriptnofk_from_bytes: (a: number, b: number) => number;
  readonly scriptnofk_n: (a: number) => number;
  readonly scriptnofk_native_scripts: (a: number) => number;
  readonly scriptnofk_new: (a: number, b: number) => number;
  readonly __wbg_timelockstart_free: (a: number) => void;
  readonly timelockstart_to_bytes: (a: number, b: number) => void;
  readonly timelockstart_from_bytes: (a: number, b: number) => number;
  readonly timelockstart_slot: (a: number) => number;
  readonly timelockstart_new: (a: number) => number;
  readonly __wbg_timelockexpiry_free: (a: number) => void;
  readonly timelockexpiry_to_bytes: (a: number, b: number) => void;
  readonly timelockexpiry_from_bytes: (a: number, b: number) => number;
  readonly timelockexpiry_slot: (a: number) => number;
  readonly timelockexpiry_new: (a: number) => number;
  readonly __wbg_nativescript_free: (a: number) => void;
  readonly nativescript_to_bytes: (a: number, b: number) => void;
  readonly nativescript_from_bytes: (a: number, b: number) => number;
  readonly nativescript_hash: (a: number, b: number) => number;
  readonly nativescript_new_script_pubkey: (a: number) => number;
  readonly nativescript_new_script_all: (a: number) => number;
  readonly nativescript_new_script_any: (a: number) => number;
  readonly nativescript_new_script_n_of_k: (a: number) => number;
  readonly nativescript_new_timelock_start: (a: number) => number;
  readonly nativescript_new_timelock_expiry: (a: number) => number;
  readonly nativescript_kind: (a: number) => number;
  readonly nativescript_as_script_pubkey: (a: number) => number;
  readonly nativescript_as_script_all: (a: number) => number;
  readonly nativescript_as_script_any: (a: number) => number;
  readonly nativescript_as_script_n_of_k: (a: number) => number;
  readonly nativescript_as_timelock_start: (a: number) => number;
  readonly nativescript_as_timelock_expiry: (a: number) => number;
  readonly __wbg_nativescripts_free: (a: number) => void;
  readonly nativescripts_new: () => number;
  readonly nativescripts_len: (a: number) => number;
  readonly nativescripts_get: (a: number, b: number) => number;
  readonly nativescripts_add: (a: number, b: number) => void;
  readonly __wbg_update_free: (a: number) => void;
  readonly update_to_bytes: (a: number, b: number) => void;
  readonly update_from_bytes: (a: number, b: number) => number;
  readonly update_proposed_protocol_parameter_updates: (a: number) => number;
  readonly update_epoch: (a: number) => number;
  readonly update_new: (a: number, b: number) => number;
  readonly __wbg_genesishashes_free: (a: number) => void;
  readonly genesishashes_to_bytes: (a: number, b: number) => void;
  readonly genesishashes_from_bytes: (a: number, b: number) => number;
  readonly genesishashes_new: () => number;
  readonly genesishashes_len: (a: number) => number;
  readonly genesishashes_get: (a: number, b: number) => number;
  readonly genesishashes_add: (a: number, b: number) => void;
  readonly __wbg_scripthashes_free: (a: number) => void;
  readonly scripthashes_to_bytes: (a: number, b: number) => void;
  readonly scripthashes_from_bytes: (a: number, b: number) => number;
  readonly scripthashes_new: () => number;
  readonly scripthashes_len: (a: number) => number;
  readonly scripthashes_get: (a: number, b: number) => number;
  readonly scripthashes_add: (a: number, b: number) => void;
  readonly __wbg_proposedprotocolparameterupdates_free: (a: number) => void;
  readonly proposedprotocolparameterupdates_to_bytes: (a: number, b: number) => void;
  readonly proposedprotocolparameterupdates_from_bytes: (a: number, b: number) => number;
  readonly proposedprotocolparameterupdates_new: () => number;
  readonly proposedprotocolparameterupdates_len: (a: number) => number;
  readonly proposedprotocolparameterupdates_insert: (a: number, b: number, c: number) => number;
  readonly proposedprotocolparameterupdates_get: (a: number, b: number) => number;
  readonly proposedprotocolparameterupdates_keys: (a: number) => number;
  readonly __wbg_protocolversion_free: (a: number) => void;
  readonly protocolversion_to_bytes: (a: number, b: number) => void;
  readonly protocolversion_from_bytes: (a: number, b: number) => number;
  readonly protocolversion_major: (a: number) => number;
  readonly protocolversion_minor: (a: number) => number;
  readonly protocolversion_new: (a: number, b: number) => number;
  readonly __wbg_protocolversions_free: (a: number) => void;
  readonly protocolversions_to_bytes: (a: number, b: number) => void;
  readonly protocolversions_from_bytes: (a: number, b: number) => number;
  readonly protocolversions_new: () => number;
  readonly protocolversions_len: (a: number) => number;
  readonly protocolversions_get: (a: number, b: number) => number;
  readonly protocolversions_add: (a: number, b: number) => void;
  readonly __wbg_protocolparamupdate_free: (a: number) => void;
  readonly protocolparamupdate_to_bytes: (a: number, b: number) => void;
  readonly protocolparamupdate_from_bytes: (a: number, b: number) => number;
  readonly protocolparamupdate_set_minfee_a: (a: number, b: number) => void;
  readonly protocolparamupdate_minfee_a: (a: number) => number;
  readonly protocolparamupdate_set_minfee_b: (a: number, b: number) => void;
  readonly protocolparamupdate_minfee_b: (a: number) => number;
  readonly protocolparamupdate_set_max_block_body_size: (a: number, b: number) => void;
  readonly protocolparamupdate_max_block_body_size: (a: number, b: number) => void;
  readonly protocolparamupdate_set_max_tx_size: (a: number, b: number) => void;
  readonly protocolparamupdate_max_tx_size: (a: number, b: number) => void;
  readonly protocolparamupdate_set_max_block_header_size: (a: number, b: number) => void;
  readonly protocolparamupdate_max_block_header_size: (a: number, b: number) => void;
  readonly protocolparamupdate_set_key_deposit: (a: number, b: number) => void;
  readonly protocolparamupdate_key_deposit: (a: number) => number;
  readonly protocolparamupdate_set_pool_deposit: (a: number, b: number) => void;
  readonly protocolparamupdate_pool_deposit: (a: number) => number;
  readonly protocolparamupdate_set_max_epoch: (a: number, b: number) => void;
  readonly protocolparamupdate_max_epoch: (a: number, b: number) => void;
  readonly protocolparamupdate_set_n_opt: (a: number, b: number) => void;
  readonly protocolparamupdate_n_opt: (a: number, b: number) => void;
  readonly protocolparamupdate_set_pool_pledge_influence: (a: number, b: number) => void;
  readonly protocolparamupdate_pool_pledge_influence: (a: number) => number;
  readonly protocolparamupdate_set_expansion_rate: (a: number, b: number) => void;
  readonly protocolparamupdate_expansion_rate: (a: number) => number;
  readonly protocolparamupdate_set_treasury_growth_rate: (a: number, b: number) => void;
  readonly protocolparamupdate_treasury_growth_rate: (a: number) => number;
  readonly protocolparamupdate_set_d: (a: number, b: number) => void;
  readonly protocolparamupdate_d: (a: number) => number;
  readonly protocolparamupdate_set_extra_entropy: (a: number, b: number) => void;
  readonly protocolparamupdate_extra_entropy: (a: number) => number;
  readonly protocolparamupdate_set_protocol_version: (a: number, b: number) => void;
  readonly protocolparamupdate_protocol_version: (a: number) => number;
  readonly protocolparamupdate_set_min_pool_cost: (a: number, b: number) => void;
  readonly protocolparamupdate_min_pool_cost: (a: number) => number;
  readonly protocolparamupdate_set_ada_per_utxo_byte: (a: number, b: number) => void;
  readonly protocolparamupdate_ada_per_utxo_byte: (a: number) => number;
  readonly protocolparamupdate_set_cost_models: (a: number, b: number) => void;
  readonly protocolparamupdate_cost_models: (a: number) => number;
  readonly protocolparamupdate_set_execution_costs: (a: number, b: number) => void;
  readonly protocolparamupdate_execution_costs: (a: number) => number;
  readonly protocolparamupdate_set_max_tx_ex_units: (a: number, b: number) => void;
  readonly protocolparamupdate_max_tx_ex_units: (a: number) => number;
  readonly protocolparamupdate_set_max_block_ex_units: (a: number, b: number) => void;
  readonly protocolparamupdate_max_block_ex_units: (a: number) => number;
  readonly protocolparamupdate_set_max_value_size: (a: number, b: number) => void;
  readonly protocolparamupdate_max_value_size: (a: number, b: number) => void;
  readonly protocolparamupdate_new: () => number;
  readonly __wbg_transactionbodies_free: (a: number) => void;
  readonly transactionbodies_to_bytes: (a: number, b: number) => void;
  readonly transactionbodies_from_bytes: (a: number, b: number) => number;
  readonly transactionbodies_new: () => number;
  readonly transactionbodies_len: (a: number) => number;
  readonly transactionbodies_get: (a: number, b: number) => number;
  readonly transactionbodies_add: (a: number, b: number) => void;
  readonly __wbg_transactionwitnesssets_free: (a: number) => void;
  readonly transactionwitnesssets_to_bytes: (a: number, b: number) => void;
  readonly transactionwitnesssets_from_bytes: (a: number, b: number) => number;
  readonly transactionwitnesssets_new: () => number;
  readonly transactionwitnesssets_len: (a: number) => number;
  readonly transactionwitnesssets_get: (a: number, b: number) => number;
  readonly transactionwitnesssets_add: (a: number, b: number) => void;
  readonly __wbg_auxiliarydataset_free: (a: number) => void;
  readonly auxiliarydataset_new: () => number;
  readonly auxiliarydataset_len: (a: number) => number;
  readonly auxiliarydataset_insert: (a: number, b: number, c: number) => number;
  readonly auxiliarydataset_get: (a: number, b: number) => number;
  readonly auxiliarydataset_indices: (a: number, b: number) => void;
  readonly __wbg_block_free: (a: number) => void;
  readonly block_to_bytes: (a: number, b: number) => void;
  readonly block_from_bytes: (a: number, b: number) => number;
  readonly block_header: (a: number) => number;
  readonly block_transaction_bodies: (a: number) => number;
  readonly block_transaction_witness_sets: (a: number) => number;
  readonly block_auxiliary_data_set: (a: number) => number;
  readonly block_invalid_transactions: (a: number, b: number) => void;
  readonly block_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly __wbg_header_free: (a: number) => void;
  readonly header_to_bytes: (a: number, b: number) => void;
  readonly header_from_bytes: (a: number, b: number) => number;
  readonly header_header_body: (a: number) => number;
  readonly header_body_signature: (a: number) => number;
  readonly header_new: (a: number, b: number) => number;
  readonly __wbg_operationalcert_free: (a: number) => void;
  readonly operationalcert_to_bytes: (a: number, b: number) => void;
  readonly operationalcert_from_bytes: (a: number, b: number) => number;
  readonly operationalcert_hot_vkey: (a: number) => number;
  readonly operationalcert_sequence_number: (a: number) => number;
  readonly operationalcert_kes_period: (a: number) => number;
  readonly operationalcert_sigma: (a: number) => number;
  readonly operationalcert_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_headerbody_free: (a: number) => void;
  readonly headerbody_to_bytes: (a: number, b: number) => void;
  readonly headerbody_from_bytes: (a: number, b: number) => number;
  readonly headerbody_block_number: (a: number) => number;
  readonly headerbody_slot: (a: number) => number;
  readonly headerbody_prev_hash: (a: number) => number;
  readonly headerbody_issuer_vkey: (a: number) => number;
  readonly headerbody_vrf_vkey: (a: number) => number;
  readonly headerbody_nonce_vrf: (a: number) => number;
  readonly headerbody_leader_vrf: (a: number) => number;
  readonly headerbody_block_body_size: (a: number) => number;
  readonly headerbody_block_body_hash: (a: number) => number;
  readonly headerbody_operational_cert: (a: number) => number;
  readonly headerbody_protocol_version: (a: number) => number;
  readonly headerbody_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => number;
  readonly __wbg_assetname_free: (a: number) => void;
  readonly assetname_to_bytes: (a: number, b: number) => void;
  readonly assetname_from_bytes: (a: number, b: number) => number;
  readonly assetname_new: (a: number, b: number) => number;
  readonly assetname_name: (a: number, b: number) => void;
  readonly __wbg_assetnames_free: (a: number) => void;
  readonly assetnames_to_bytes: (a: number, b: number) => void;
  readonly assetnames_from_bytes: (a: number, b: number) => number;
  readonly assetnames_new: () => number;
  readonly assetnames_len: (a: number) => number;
  readonly assetnames_get: (a: number, b: number) => number;
  readonly assetnames_add: (a: number, b: number) => void;
  readonly __wbg_assets_free: (a: number) => void;
  readonly assets_to_bytes: (a: number, b: number) => void;
  readonly assets_from_bytes: (a: number, b: number) => number;
  readonly assets_new: () => number;
  readonly assets_len: (a: number) => number;
  readonly assets_insert: (a: number, b: number, c: number) => number;
  readonly assets_get: (a: number, b: number) => number;
  readonly assets_keys: (a: number) => number;
  readonly __wbg_multiasset_free: (a: number) => void;
  readonly multiasset_to_bytes: (a: number, b: number) => void;
  readonly multiasset_from_bytes: (a: number, b: number) => number;
  readonly multiasset_new: () => number;
  readonly multiasset_len: (a: number) => number;
  readonly multiasset_insert: (a: number, b: number, c: number) => number;
  readonly multiasset_get: (a: number, b: number) => number;
  readonly multiasset_keys: (a: number) => number;
  readonly multiasset_sub: (a: number, b: number) => number;
  readonly __wbg_mintassets_free: (a: number) => void;
  readonly mintassets_new: () => number;
  readonly mintassets_len: (a: number) => number;
  readonly mintassets_insert: (a: number, b: number, c: number) => number;
  readonly mintassets_get: (a: number, b: number) => number;
  readonly mintassets_keys: (a: number) => number;
  readonly __wbg_mint_free: (a: number) => void;
  readonly mint_to_bytes: (a: number, b: number) => void;
  readonly mint_from_bytes: (a: number, b: number) => number;
  readonly mint_new: () => number;
  readonly mint_len: (a: number) => number;
  readonly mint_insert: (a: number, b: number, c: number) => number;
  readonly mint_get: (a: number, b: number) => number;
  readonly mint_keys: (a: number) => number;
  readonly __wbg_networkid_free: (a: number) => void;
  readonly networkid_to_bytes: (a: number, b: number) => void;
  readonly networkid_from_bytes: (a: number, b: number) => number;
  readonly networkid_testnet: () => number;
  readonly networkid_mainnet: () => number;
  readonly networkid_kind: (a: number) => number;
  readonly __wbg_metadatamap_free: (a: number) => void;
  readonly metadatamap_to_bytes: (a: number, b: number) => void;
  readonly metadatamap_from_bytes: (a: number, b: number) => number;
  readonly metadatamap_new: () => number;
  readonly metadatamap_len: (a: number) => number;
  readonly metadatamap_insert: (a: number, b: number, c: number) => number;
  readonly metadatamap_insert_str: (a: number, b: number, c: number, d: number) => number;
  readonly metadatamap_insert_i32: (a: number, b: number, c: number) => number;
  readonly metadatamap_get: (a: number, b: number) => number;
  readonly metadatamap_get_str: (a: number, b: number, c: number) => number;
  readonly metadatamap_get_i32: (a: number, b: number) => number;
  readonly metadatamap_has: (a: number, b: number) => number;
  readonly metadatamap_keys: (a: number) => number;
  readonly __wbg_metadatalist_free: (a: number) => void;
  readonly metadatalist_to_bytes: (a: number, b: number) => void;
  readonly metadatalist_from_bytes: (a: number, b: number) => number;
  readonly metadatalist_new: () => number;
  readonly metadatalist_len: (a: number) => number;
  readonly metadatalist_get: (a: number, b: number) => number;
  readonly metadatalist_add: (a: number, b: number) => void;
  readonly __wbg_transactionmetadatum_free: (a: number) => void;
  readonly transactionmetadatum_to_bytes: (a: number, b: number) => void;
  readonly transactionmetadatum_from_bytes: (a: number, b: number) => number;
  readonly transactionmetadatum_new_map: (a: number) => number;
  readonly transactionmetadatum_new_list: (a: number) => number;
  readonly transactionmetadatum_new_int: (a: number) => number;
  readonly transactionmetadatum_new_bytes: (a: number, b: number) => number;
  readonly transactionmetadatum_new_text: (a: number, b: number) => number;
  readonly transactionmetadatum_kind: (a: number) => number;
  readonly transactionmetadatum_as_map: (a: number) => number;
  readonly transactionmetadatum_as_list: (a: number) => number;
  readonly transactionmetadatum_as_int: (a: number) => number;
  readonly transactionmetadatum_as_bytes: (a: number, b: number) => void;
  readonly transactionmetadatum_as_text: (a: number, b: number) => void;
  readonly __wbg_transactionmetadatumlabels_free: (a: number) => void;
  readonly transactionmetadatumlabels_to_bytes: (a: number, b: number) => void;
  readonly transactionmetadatumlabels_from_bytes: (a: number, b: number) => number;
  readonly transactionmetadatumlabels_new: () => number;
  readonly transactionmetadatumlabels_len: (a: number) => number;
  readonly transactionmetadatumlabels_get: (a: number, b: number) => number;
  readonly transactionmetadatumlabels_add: (a: number, b: number) => void;
  readonly __wbg_generaltransactionmetadata_free: (a: number) => void;
  readonly generaltransactionmetadata_to_bytes: (a: number, b: number) => void;
  readonly generaltransactionmetadata_from_bytes: (a: number, b: number) => number;
  readonly generaltransactionmetadata_new: () => number;
  readonly generaltransactionmetadata_len: (a: number) => number;
  readonly generaltransactionmetadata_insert: (a: number, b: number, c: number) => number;
  readonly generaltransactionmetadata_get: (a: number, b: number) => number;
  readonly generaltransactionmetadata_keys: (a: number) => number;
  readonly __wbg_auxiliarydata_free: (a: number) => void;
  readonly auxiliarydata_to_bytes: (a: number, b: number) => void;
  readonly auxiliarydata_from_bytes: (a: number, b: number) => number;
  readonly auxiliarydata_new: () => number;
  readonly auxiliarydata_metadata: (a: number) => number;
  readonly auxiliarydata_set_metadata: (a: number, b: number) => void;
  readonly auxiliarydata_native_scripts: (a: number) => number;
  readonly auxiliarydata_set_native_scripts: (a: number, b: number) => void;
  readonly auxiliarydata_plutus_scripts: (a: number) => number;
  readonly auxiliarydata_set_plutus_scripts: (a: number, b: number) => void;
  readonly encode_arbitrary_bytes_as_metadatum: (a: number, b: number) => number;
  readonly decode_arbitrary_bytes_from_metadatum: (a: number, b: number) => void;
  readonly encode_json_str_to_metadatum: (a: number, b: number, c: number) => number;
  readonly decode_metadatum_to_json_str: (a: number, b: number, c: number) => void;
  readonly __wbg_transactionunspentoutput_free: (a: number) => void;
  readonly transactionunspentoutput_to_bytes: (a: number, b: number) => void;
  readonly transactionunspentoutput_from_bytes: (a: number, b: number) => number;
  readonly transactionunspentoutput_new: (a: number, b: number) => number;
  readonly transactionunspentoutput_input: (a: number) => number;
  readonly transactionunspentoutput_output: (a: number) => number;
  readonly __wbg_bignum_free: (a: number) => void;
  readonly bignum_to_bytes: (a: number, b: number) => void;
  readonly bignum_from_bytes: (a: number, b: number) => number;
  readonly bignum_from_str: (a: number, b: number) => number;
  readonly bignum_to_str: (a: number, b: number) => void;
  readonly bignum_zero: () => number;
  readonly bignum_is_zero: (a: number) => number;
  readonly bignum_checked_mul: (a: number, b: number) => number;
  readonly bignum_checked_add: (a: number, b: number) => number;
  readonly bignum_checked_sub: (a: number, b: number) => number;
  readonly bignum_clamped_sub: (a: number, b: number) => number;
  readonly bignum_compare: (a: number, b: number) => number;
  readonly __wbg_value_free: (a: number) => void;
  readonly value_to_bytes: (a: number, b: number) => void;
  readonly value_from_bytes: (a: number, b: number) => number;
  readonly value_new: (a: number) => number;
  readonly value_zero: () => number;
  readonly value_is_zero: (a: number) => number;
  readonly value_coin: (a: number) => number;
  readonly value_set_coin: (a: number, b: number) => void;
  readonly value_multiasset: (a: number) => number;
  readonly value_set_multiasset: (a: number, b: number) => void;
  readonly value_checked_add: (a: number, b: number) => number;
  readonly value_checked_sub: (a: number, b: number) => number;
  readonly value_clamped_sub: (a: number, b: number) => number;
  readonly value_compare: (a: number, b: number) => number;
  readonly __wbg_int_free: (a: number) => void;
  readonly int_new: (a: number) => number;
  readonly int_new_negative: (a: number) => number;
  readonly int_new_i32: (a: number) => number;
  readonly int_is_positive: (a: number) => number;
  readonly int_as_positive: (a: number) => number;
  readonly int_as_negative: (a: number) => number;
  readonly int_as_i32: (a: number, b: number) => void;
  readonly __wbg_bigint_free: (a: number) => void;
  readonly bigint_to_bytes: (a: number, b: number) => void;
  readonly bigint_from_bytes: (a: number, b: number) => number;
  readonly bigint_as_u64: (a: number) => number;
  readonly bigint_from_str: (a: number, b: number) => number;
  readonly bigint_to_str: (a: number, b: number) => void;
  readonly make_daedalus_bootstrap_witness: (a: number, b: number, c: number) => number;
  readonly make_icarus_bootstrap_witness: (a: number, b: number, c: number) => number;
  readonly make_vkey_witness: (a: number, b: number) => number;
  readonly hash_auxiliary_data: (a: number) => number;
  readonly hash_transaction: (a: number) => number;
  readonly hash_plutus_data: (a: number) => number;
  readonly hash_script_data: (a: number, b: number, c: number) => number;
  readonly get_implicit_input: (a: number, b: number, c: number) => number;
  readonly get_deposit: (a: number, b: number, c: number) => number;
  readonly min_ada_required: (a: number, b: number) => number;
  readonly encode_json_str_to_native_script: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly encrypt_with_password: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly decrypt_with_password: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbg_linearfee_free: (a: number) => void;
  readonly linearfee_constant: (a: number) => number;
  readonly linearfee_coefficient: (a: number) => number;
  readonly linearfee_new: (a: number, b: number) => number;
  readonly min_fee: (a: number, b: number) => number;
  readonly __wbg_transactionbuilder_free: (a: number) => void;
  readonly transactionbuilder_add_key_input: (a: number, b: number, c: number, d: number) => void;
  readonly transactionbuilder_add_script_input: (a: number, b: number, c: number, d: number) => void;
  readonly transactionbuilder_add_bootstrap_input: (a: number, b: number, c: number, d: number) => void;
  readonly transactionbuilder_add_input: (a: number, b: number, c: number, d: number) => void;
  readonly transactionbuilder_fee_for_input: (a: number, b: number, c: number, d: number) => number;
  readonly transactionbuilder_add_output: (a: number, b: number) => void;
  readonly transactionbuilder_fee_for_output: (a: number, b: number) => number;
  readonly transactionbuilder_set_fee: (a: number, b: number) => void;
  readonly transactionbuilder_set_ttl: (a: number, b: number) => void;
  readonly transactionbuilder_set_validity_start_interval: (a: number, b: number) => void;
  readonly transactionbuilder_set_certs: (a: number, b: number) => void;
  readonly transactionbuilder_set_withdrawals: (a: number, b: number) => void;
  readonly transactionbuilder_set_auxiliary_data: (a: number, b: number) => void;
  readonly transactionbuilder_set_prefer_pure_change: (a: number, b: number) => void;
  readonly transactionbuilder_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly transactionbuilder_get_explicit_input: (a: number) => number;
  readonly transactionbuilder_get_implicit_input: (a: number) => number;
  readonly transactionbuilder_get_explicit_output: (a: number) => number;
  readonly transactionbuilder_get_deposit: (a: number) => number;
  readonly transactionbuilder_get_fee_if_set: (a: number) => number;
  readonly transactionbuilder_add_change_if_needed: (a: number, b: number) => number;
  readonly transactionbuilder_full_size: (a: number) => number;
  readonly transactionbuilder_output_sizes: (a: number, b: number) => void;
  readonly transactionbuilder_build: (a: number) => number;
  readonly transactionbuilder_min_fee: (a: number) => number;
  readonly __wbg_bip32privatekey_free: (a: number) => void;
  readonly bip32privatekey_derive: (a: number, b: number) => number;
  readonly bip32privatekey_from_128_xprv: (a: number, b: number) => number;
  readonly bip32privatekey_to_128_xprv: (a: number, b: number) => void;
  readonly bip32privatekey_generate_ed25519_bip32: () => number;
  readonly bip32privatekey_to_raw_key: (a: number) => number;
  readonly bip32privatekey_to_public: (a: number) => number;
  readonly bip32privatekey_from_bytes: (a: number, b: number) => number;
  readonly bip32privatekey_as_bytes: (a: number, b: number) => void;
  readonly bip32privatekey_from_bech32: (a: number, b: number) => number;
  readonly bip32privatekey_to_bech32: (a: number, b: number) => void;
  readonly bip32privatekey_from_bip39_entropy: (a: number, b: number, c: number, d: number) => number;
  readonly bip32privatekey_chaincode: (a: number, b: number) => void;
  readonly __wbg_bip32publickey_free: (a: number) => void;
  readonly bip32publickey_derive: (a: number, b: number) => number;
  readonly bip32publickey_to_raw_key: (a: number) => number;
  readonly bip32publickey_from_bytes: (a: number, b: number) => number;
  readonly bip32publickey_as_bytes: (a: number, b: number) => void;
  readonly bip32publickey_from_bech32: (a: number, b: number) => number;
  readonly bip32publickey_to_bech32: (a: number, b: number) => void;
  readonly bip32publickey_chaincode: (a: number, b: number) => void;
  readonly __wbg_privatekey_free: (a: number) => void;
  readonly privatekey_to_public: (a: number) => number;
  readonly privatekey_generate_ed25519: () => number;
  readonly privatekey_generate_ed25519extended: () => number;
  readonly privatekey_from_bech32: (a: number, b: number) => number;
  readonly privatekey_to_bech32: (a: number, b: number) => void;
  readonly privatekey_as_bytes: (a: number, b: number) => void;
  readonly privatekey_from_extended_bytes: (a: number, b: number) => number;
  readonly privatekey_from_normal_bytes: (a: number, b: number) => number;
  readonly privatekey_sign: (a: number, b: number, c: number) => number;
  readonly __wbg_publickey_free: (a: number) => void;
  readonly publickey_from_bech32: (a: number, b: number) => number;
  readonly publickey_to_bech32: (a: number, b: number) => void;
  readonly publickey_as_bytes: (a: number, b: number) => void;
  readonly publickey_from_bytes: (a: number, b: number) => number;
  readonly publickey_verify: (a: number, b: number, c: number, d: number) => number;
  readonly publickey_hash: (a: number) => number;
  readonly __wbg_vkey_free: (a: number) => void;
  readonly vkey_to_bytes: (a: number, b: number) => void;
  readonly vkey_from_bytes: (a: number, b: number) => number;
  readonly vkey_new: (a: number) => number;
  readonly vkey_public_key: (a: number) => number;
  readonly __wbg_vkeys_free: (a: number) => void;
  readonly vkeys_new: () => number;
  readonly vkeys_len: (a: number) => number;
  readonly vkeys_get: (a: number, b: number) => number;
  readonly vkeys_add: (a: number, b: number) => void;
  readonly __wbg_vkeywitness_free: (a: number) => void;
  readonly vkeywitness_to_bytes: (a: number, b: number) => void;
  readonly vkeywitness_from_bytes: (a: number, b: number) => number;
  readonly vkeywitness_new: (a: number, b: number) => number;
  readonly vkeywitness_vkey: (a: number) => number;
  readonly vkeywitness_signature: (a: number) => number;
  readonly __wbg_vkeywitnesses_free: (a: number) => void;
  readonly vkeywitnesses_new: () => number;
  readonly vkeywitnesses_len: (a: number) => number;
  readonly vkeywitnesses_get: (a: number, b: number) => number;
  readonly vkeywitnesses_add: (a: number, b: number) => void;
  readonly __wbg_bootstrapwitness_free: (a: number) => void;
  readonly bootstrapwitness_to_bytes: (a: number, b: number) => void;
  readonly bootstrapwitness_from_bytes: (a: number, b: number) => number;
  readonly bootstrapwitness_vkey: (a: number) => number;
  readonly bootstrapwitness_signature: (a: number) => number;
  readonly bootstrapwitness_chain_code: (a: number, b: number) => void;
  readonly bootstrapwitness_attributes: (a: number, b: number) => void;
  readonly bootstrapwitness_new: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly __wbg_bootstrapwitnesses_free: (a: number) => void;
  readonly bootstrapwitnesses_new: () => number;
  readonly bootstrapwitnesses_len: (a: number) => number;
  readonly bootstrapwitnesses_get: (a: number, b: number) => number;
  readonly bootstrapwitnesses_add: (a: number, b: number) => void;
  readonly __wbg_publickeys_free: (a: number) => void;
  readonly publickeys_new: () => number;
  readonly publickeys_size: (a: number) => number;
  readonly publickeys_get: (a: number, b: number) => number;
  readonly publickeys_add: (a: number, b: number) => void;
  readonly __wbg_ed25519signature_free: (a: number) => void;
  readonly ed25519signature_to_bytes: (a: number, b: number) => void;
  readonly ed25519signature_to_bech32: (a: number, b: number) => void;
  readonly ed25519signature_to_hex: (a: number, b: number) => void;
  readonly ed25519signature_from_bech32: (a: number, b: number) => number;
  readonly ed25519signature_from_hex: (a: number, b: number) => number;
  readonly ed25519signature_from_bytes: (a: number, b: number) => number;
  readonly __wbg_legacydaedalusprivatekey_free: (a: number) => void;
  readonly legacydaedalusprivatekey_from_bytes: (a: number, b: number) => number;
  readonly legacydaedalusprivatekey_as_bytes: (a: number, b: number) => void;
  readonly legacydaedalusprivatekey_chaincode: (a: number, b: number) => void;
  readonly __wbg_ed25519keyhash_free: (a: number) => void;
  readonly ed25519keyhash_to_bytes: (a: number, b: number) => void;
  readonly ed25519keyhash_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly ed25519keyhash_from_bech32: (a: number, b: number) => number;
  readonly ed25519keyhash_from_bytes: (a: number, b: number) => number;
  readonly __wbg_scripthash_free: (a: number) => void;
  readonly scripthash_to_bytes: (a: number, b: number) => void;
  readonly scripthash_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly scripthash_from_bech32: (a: number, b: number) => number;
  readonly scripthash_from_bytes: (a: number, b: number) => number;
  readonly __wbg_transactionhash_free: (a: number) => void;
  readonly transactionhash_to_bytes: (a: number, b: number) => void;
  readonly transactionhash_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly transactionhash_from_bech32: (a: number, b: number) => number;
  readonly transactionhash_from_bytes: (a: number, b: number) => number;
  readonly __wbg_genesisdelegatehash_free: (a: number) => void;
  readonly genesisdelegatehash_to_bytes: (a: number, b: number) => void;
  readonly genesisdelegatehash_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly genesisdelegatehash_from_bech32: (a: number, b: number) => number;
  readonly genesisdelegatehash_from_bytes: (a: number, b: number) => number;
  readonly __wbg_genesishash_free: (a: number) => void;
  readonly genesishash_to_bytes: (a: number, b: number) => void;
  readonly genesishash_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly genesishash_from_bech32: (a: number, b: number) => number;
  readonly genesishash_from_bytes: (a: number, b: number) => number;
  readonly __wbg_auxiliarydatahash_free: (a: number) => void;
  readonly auxiliarydatahash_to_bytes: (a: number, b: number) => void;
  readonly auxiliarydatahash_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly auxiliarydatahash_from_bech32: (a: number, b: number) => number;
  readonly auxiliarydatahash_from_bytes: (a: number, b: number) => number;
  readonly __wbg_poolmetadatahash_free: (a: number) => void;
  readonly poolmetadatahash_to_bytes: (a: number, b: number) => void;
  readonly poolmetadatahash_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly poolmetadatahash_from_bech32: (a: number, b: number) => number;
  readonly poolmetadatahash_from_bytes: (a: number, b: number) => number;
  readonly __wbg_vrfkeyhash_free: (a: number) => void;
  readonly vrfkeyhash_to_bytes: (a: number, b: number) => void;
  readonly vrfkeyhash_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly vrfkeyhash_from_bech32: (a: number, b: number) => number;
  readonly vrfkeyhash_from_bytes: (a: number, b: number) => number;
  readonly __wbg_blockhash_free: (a: number) => void;
  readonly blockhash_to_bytes: (a: number, b: number) => void;
  readonly blockhash_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly blockhash_from_bech32: (a: number, b: number) => number;
  readonly blockhash_from_bytes: (a: number, b: number) => number;
  readonly __wbg_datahash_free: (a: number) => void;
  readonly datahash_to_bytes: (a: number, b: number) => void;
  readonly datahash_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly datahash_from_bech32: (a: number, b: number) => number;
  readonly datahash_from_bytes: (a: number, b: number) => number;
  readonly __wbg_scriptdatahash_free: (a: number) => void;
  readonly scriptdatahash_to_bytes: (a: number, b: number) => void;
  readonly scriptdatahash_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly scriptdatahash_from_bech32: (a: number, b: number) => number;
  readonly scriptdatahash_from_bytes: (a: number, b: number) => number;
  readonly __wbg_vrfvkey_free: (a: number) => void;
  readonly vrfvkey_to_bytes: (a: number, b: number) => void;
  readonly vrfvkey_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly vrfvkey_from_bech32: (a: number, b: number) => number;
  readonly vrfvkey_from_bytes: (a: number, b: number) => number;
  readonly __wbg_kesvkey_free: (a: number) => void;
  readonly kesvkey_to_bytes: (a: number, b: number) => void;
  readonly kesvkey_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly kesvkey_from_bech32: (a: number, b: number) => number;
  readonly kesvkey_from_bytes: (a: number, b: number) => number;
  readonly __wbg_kessignature_free: (a: number) => void;
  readonly kessignature_to_bytes: (a: number, b: number) => void;
  readonly kessignature_from_bytes: (a: number, b: number) => number;
  readonly __wbg_nonce_free: (a: number) => void;
  readonly nonce_to_bytes: (a: number, b: number) => void;
  readonly nonce_from_bytes: (a: number, b: number) => number;
  readonly nonce_new_identity: () => number;
  readonly nonce_new_from_hash: (a: number, b: number) => number;
  readonly nonce_get_hash: (a: number, b: number) => void;
  readonly __wbg_vrfcert_free: (a: number) => void;
  readonly vrfcert_to_bytes: (a: number, b: number) => void;
  readonly vrfcert_from_bytes: (a: number, b: number) => number;
  readonly vrfcert_output: (a: number, b: number) => void;
  readonly vrfcert_proof: (a: number, b: number) => void;
  readonly vrfcert_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_networkinfo_free: (a: number) => void;
  readonly networkinfo_new: (a: number, b: number) => number;
  readonly networkinfo_network_id: (a: number) => number;
  readonly networkinfo_protocol_magic: (a: number) => number;
  readonly networkinfo_testnet: () => number;
  readonly networkinfo_mainnet: () => number;
  readonly __wbg_stakecredential_free: (a: number) => void;
  readonly stakecredential_from_keyhash: (a: number) => number;
  readonly stakecredential_from_scripthash: (a: number) => number;
  readonly stakecredential_to_keyhash: (a: number) => number;
  readonly stakecredential_to_scripthash: (a: number) => number;
  readonly stakecredential_kind: (a: number) => number;
  readonly stakecredential_to_bytes: (a: number, b: number) => void;
  readonly stakecredential_from_bytes: (a: number, b: number) => number;
  readonly __wbg_byronaddress_free: (a: number) => void;
  readonly byronaddress_to_base58: (a: number, b: number) => void;
  readonly byronaddress_to_bytes: (a: number, b: number) => void;
  readonly byronaddress_from_bytes: (a: number, b: number) => number;
  readonly byronaddress_byron_protocol_magic: (a: number) => number;
  readonly byronaddress_attributes: (a: number, b: number) => void;
  readonly byronaddress_network_id: (a: number) => number;
  readonly byronaddress_from_base58: (a: number, b: number) => number;
  readonly byronaddress_icarus_from_key: (a: number, b: number) => number;
  readonly byronaddress_is_valid: (a: number, b: number) => number;
  readonly byronaddress_to_address: (a: number) => number;
  readonly byronaddress_from_address: (a: number) => number;
  readonly __wbg_address_free: (a: number) => void;
  readonly address_from_bytes: (a: number, b: number) => number;
  readonly address_to_bytes: (a: number, b: number) => void;
  readonly address_to_bech32: (a: number, b: number, c: number, d: number) => void;
  readonly address_from_bech32: (a: number, b: number) => number;
  readonly address_network_id: (a: number) => number;
  readonly __wbg_baseaddress_free: (a: number) => void;
  readonly baseaddress_new: (a: number, b: number, c: number) => number;
  readonly baseaddress_payment_cred: (a: number) => number;
  readonly baseaddress_stake_cred: (a: number) => number;
  readonly baseaddress_to_address: (a: number) => number;
  readonly baseaddress_from_address: (a: number) => number;
  readonly __wbg_enterpriseaddress_free: (a: number) => void;
  readonly enterpriseaddress_new: (a: number, b: number) => number;
  readonly enterpriseaddress_payment_cred: (a: number) => number;
  readonly enterpriseaddress_to_address: (a: number) => number;
  readonly enterpriseaddress_from_address: (a: number) => number;
  readonly __wbg_rewardaddress_free: (a: number) => void;
  readonly rewardaddress_new: (a: number, b: number) => number;
  readonly rewardaddress_payment_cred: (a: number) => number;
  readonly rewardaddress_to_address: (a: number) => number;
  readonly rewardaddress_from_address: (a: number) => number;
  readonly __wbg_pointer_free: (a: number) => void;
  readonly pointer_new: (a: number, b: number, c: number) => number;
  readonly pointer_slot: (a: number) => number;
  readonly pointer_tx_index: (a: number) => number;
  readonly pointer_cert_index: (a: number) => number;
  readonly __wbg_pointeraddress_free: (a: number) => void;
  readonly pointeraddress_new: (a: number, b: number, c: number) => number;
  readonly pointeraddress_payment_cred: (a: number) => number;
  readonly pointeraddress_stake_pointer: (a: number) => number;
  readonly pointeraddress_to_address: (a: number) => number;
  readonly pointeraddress_from_address: (a: number) => number;
  readonly __wbg_plutusscript_free: (a: number) => void;
  readonly plutusscript_to_bytes: (a: number, b: number) => void;
  readonly plutusscript_from_bytes: (a: number, b: number) => number;
  readonly plutusscript_new: (a: number, b: number) => number;
  readonly plutusscript_bytes: (a: number, b: number) => void;
  readonly __wbg_plutusscripts_free: (a: number) => void;
  readonly plutusscripts_to_bytes: (a: number, b: number) => void;
  readonly plutusscripts_from_bytes: (a: number, b: number) => number;
  readonly plutusscripts_new: () => number;
  readonly plutusscripts_len: (a: number) => number;
  readonly plutusscripts_get: (a: number, b: number) => number;
  readonly plutusscripts_add: (a: number, b: number) => void;
  readonly __wbg_constrplutusdata_free: (a: number) => void;
  readonly constrplutusdata_to_bytes: (a: number, b: number) => void;
  readonly constrplutusdata_from_bytes: (a: number, b: number) => number;
  readonly constrplutusdata_tag: (a: number) => number;
  readonly constrplutusdata_data: (a: number) => number;
  readonly constrplutusdata_new: (a: number, b: number) => number;
  readonly __wbg_costmodel_free: (a: number) => void;
  readonly costmodel_to_bytes: (a: number, b: number) => void;
  readonly costmodel_from_bytes: (a: number, b: number) => number;
  readonly costmodel_new: () => number;
  readonly costmodel_set: (a: number, b: number, c: number) => number;
  readonly costmodel_get: (a: number, b: number) => number;
  readonly __wbg_costmdls_free: (a: number) => void;
  readonly costmdls_to_bytes: (a: number, b: number) => void;
  readonly costmdls_from_bytes: (a: number, b: number) => number;
  readonly costmdls_new: () => number;
  readonly costmdls_len: (a: number) => number;
  readonly costmdls_insert: (a: number, b: number, c: number) => number;
  readonly costmdls_get: (a: number, b: number) => number;
  readonly costmdls_keys: (a: number) => number;
  readonly __wbg_exunitprices_free: (a: number) => void;
  readonly exunitprices_to_bytes: (a: number, b: number) => void;
  readonly exunitprices_from_bytes: (a: number, b: number) => number;
  readonly exunitprices_mem_price: (a: number) => number;
  readonly exunitprices_step_price: (a: number) => number;
  readonly exunitprices_new: (a: number, b: number) => number;
  readonly __wbg_exunits_free: (a: number) => void;
  readonly exunits_to_bytes: (a: number, b: number) => void;
  readonly exunits_from_bytes: (a: number, b: number) => number;
  readonly exunits_mem: (a: number) => number;
  readonly exunits_steps: (a: number) => number;
  readonly exunits_new: (a: number, b: number) => number;
  readonly __wbg_language_free: (a: number) => void;
  readonly language_to_bytes: (a: number, b: number) => void;
  readonly language_from_bytes: (a: number, b: number) => number;
  readonly language_new_plutus_v1: () => number;
  readonly language_kind: (a: number) => number;
  readonly __wbg_languages_free: (a: number) => void;
  readonly languages_new: () => number;
  readonly languages_len: (a: number) => number;
  readonly languages_get: (a: number, b: number) => number;
  readonly languages_add: (a: number, b: number) => void;
  readonly __wbg_plutusmap_free: (a: number) => void;
  readonly plutusmap_to_bytes: (a: number, b: number) => void;
  readonly plutusmap_from_bytes: (a: number, b: number) => number;
  readonly plutusmap_new: () => number;
  readonly plutusmap_len: (a: number) => number;
  readonly plutusmap_insert: (a: number, b: number, c: number) => number;
  readonly plutusmap_get: (a: number, b: number) => number;
  readonly plutusmap_keys: (a: number) => number;
  readonly __wbg_plutusdata_free: (a: number) => void;
  readonly plutusdata_to_bytes: (a: number, b: number) => void;
  readonly plutusdata_from_bytes: (a: number, b: number) => number;
  readonly plutusdata_new_constr_plutus_data: (a: number) => number;
  readonly plutusdata_new_map: (a: number) => number;
  readonly plutusdata_new_list: (a: number) => number;
  readonly plutusdata_new_integer: (a: number) => number;
  readonly plutusdata_new_bytes: (a: number, b: number) => number;
  readonly plutusdata_kind: (a: number) => number;
  readonly plutusdata_as_constr_plutus_data: (a: number) => number;
  readonly plutusdata_as_map: (a: number) => number;
  readonly plutusdata_as_list: (a: number) => number;
  readonly plutusdata_as_integer: (a: number) => number;
  readonly plutusdata_as_bytes: (a: number, b: number) => void;
  readonly __wbg_plutuslist_free: (a: number) => void;
  readonly plutuslist_to_bytes: (a: number, b: number) => void;
  readonly plutuslist_from_bytes: (a: number, b: number) => number;
  readonly plutuslist_new: () => number;
  readonly plutuslist_len: (a: number) => number;
  readonly plutuslist_get: (a: number, b: number) => number;
  readonly plutuslist_add: (a: number, b: number) => void;
  readonly __wbg_redeemer_free: (a: number) => void;
  readonly redeemer_to_bytes: (a: number, b: number) => void;
  readonly redeemer_from_bytes: (a: number, b: number) => number;
  readonly redeemer_tag: (a: number) => number;
  readonly redeemer_index: (a: number) => number;
  readonly redeemer_data: (a: number) => number;
  readonly redeemer_ex_units: (a: number) => number;
  readonly redeemer_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_redeemertag_free: (a: number) => void;
  readonly redeemertag_to_bytes: (a: number, b: number) => void;
  readonly redeemertag_from_bytes: (a: number, b: number) => number;
  readonly redeemertag_new_spend: () => number;
  readonly redeemertag_new_mint: () => number;
  readonly redeemertag_new_cert: () => number;
  readonly redeemertag_new_reward: () => number;
  readonly redeemertag_kind: (a: number) => number;
  readonly __wbg_redeemers_free: (a: number) => void;
  readonly redeemers_to_bytes: (a: number, b: number) => void;
  readonly redeemers_from_bytes: (a: number, b: number) => number;
  readonly redeemers_new: () => number;
  readonly redeemers_len: (a: number) => number;
  readonly redeemers_get: (a: number, b: number) => number;
  readonly redeemers_add: (a: number, b: number) => void;
  readonly __wbg_strings_free: (a: number) => void;
  readonly strings_new: () => number;
  readonly strings_len: (a: number) => number;
  readonly strings_get: (a: number, b: number, c: number) => void;
  readonly strings_add: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
