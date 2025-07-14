# x25519.wasm (deprecated: use WebCrypto)

WebAssembly port of X25519

```bash
npm i @hazae41/x25519.wasm
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/x25519.wasm)

## Features
- Reproducible building
- Pre-bundled and streamed
- Zero-copy memory slices

## Modules
- x25519-dalek

## Algorithms
- X25519

## Usage

```typescript
import { X25519Wasm, X25519StaticSecret } from "@hazae41/x25519.wasm";

// Wait for WASM to load
await X25519Wasm.initBundled();

// Generate secret x for Alice
using secretx = new X25519StaticSecret()

// Generate secret y for Bob
using secrety = new X25519StaticSecret()

// Get public X for Alice to send to Bob
using publicx = secretx.to_public()

// Get public Y for Bob to send to Alice
using publicy = secrety.to_public()

// Alice computes the shared key S from x and Y
using sharedx = secretx.diffie_hellman(publicy)

// Bob computes the shared key S from y and X
using sharedy = secrety.diffie_hellman(publicx)

using sharedx_memory = sharedx.to_bytes()
using sharedy_memory = sharedy.to_bytes()

// S is the same for Alice and Bob
console.log("S (Alice)", sharedx_memory.bytes)
console.log("S (Bob", sharedy_memory.bytes)
```

## Building

### Unreproducible building

You need to install [Rust](https://www.rust-lang.org/tools/install)

Then, install [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

```bash
cargo install wasm-pack
```

Finally, do a clean install and build

```bash
npm ci && npm run build
```

### Reproducible building

You can build the exact same bytecode using Docker, just be sure you're on a `linux/amd64` host

```bash
docker compose up --build
```

Then check that all the files are the same using `npm diff`

```bash
npm diff
```

If the output is empty then the bytecode is the same as the one I commited

### Automated checks

Each time I release a new version on GitHub, the GitHub's CI clones the GitHub repository, reproduces the build, and throws an error if the NPM release is different. If a version is present on NPM but not on GitHub, do not use it!
