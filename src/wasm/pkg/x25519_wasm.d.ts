/* tslint:disable */
/* eslint-disable */
export class Memory {
  [Symbol.dispose](): void;
/**
* @param {Uint8Array} inner
*/
  constructor(inner: Uint8Array);
/**
* @returns {number}
*/
  ptr(): number;
/**
* @returns {number}
*/
  len(): number;
/**
* @returns {Uint8Array}
*/
  get bytes(): Uint8Array;
}
export class X25519PublicKey {
  [Symbol.dispose](): void;
  constructor(bytes: Memory);
  static from_bytes(bytes: Memory): X25519PublicKey;
  to_bytes(): Memory;
}
export class X25519SharedSecret {
  private constructor();
  [Symbol.dispose](): void;
  to_bytes(): Memory;
  was_contributory(): boolean;
}
export class X25519StaticSecret {
  [Symbol.dispose](): void;
  constructor();
  static from_bytes(bytes: Memory): X25519StaticSecret;
  to_bytes(): Memory;
  diffie_hellman(other: X25519PublicKey): X25519SharedSecret;
  to_public(): X25519PublicKey;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_x25519staticsecret_free: (a: number, b: number) => void;
  readonly x25519staticsecret_random: () => number;
  readonly x25519staticsecret_from_bytes: (a: number) => [number, number, number];
  readonly x25519staticsecret_to_bytes: (a: number) => number;
  readonly x25519staticsecret_diffie_hellman: (a: number, b: number) => number;
  readonly x25519staticsecret_to_public: (a: number) => number;
  readonly __wbg_x25519publickey_free: (a: number, b: number) => void;
  readonly x25519publickey_from_bytes: (a: number) => [number, number, number];
  readonly x25519publickey_to_bytes: (a: number) => number;
  readonly x25519publickey_new: (a: number) => [number, number, number];
  readonly __wbg_x25519sharedsecret_free: (a: number, b: number) => void;
  readonly x25519sharedsecret_to_bytes: (a: number) => number;
  readonly x25519sharedsecret_was_contributory: (a: number) => number;
  readonly __wbg_memory_free: (a: number, b: number) => void;
  readonly memory_new: (a: number, b: number) => number;
  readonly memory_ptr: (a: number) => number;
  readonly memory_len: (a: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
