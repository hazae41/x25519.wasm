export * from "../../wasm/pkg/x25519_wasm.js";

import init from "../../wasm/pkg/x25519_wasm.js";
import { data } from "../../wasm/pkg/x25519_wasm.wasm.js";

export async function initBundled() {
  return await init({ module_or_path: data })
}
