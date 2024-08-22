import { assert, test } from "@hazae41/phobos";
import { X25519PublicKey, X25519StaticSecret, initBundled } from "./index.js";

function equals(a: Uint8Array, b: Uint8Array) {
  return Buffer.from(a).equals(Buffer.from(b))
}

function assertX25519StaticSecret(secret: X25519StaticSecret) {
  const bytes = secret.to_bytes()
  const bytes2 = X25519StaticSecret.from_bytes(bytes).to_bytes()

  assert(equals(bytes.bytes, bytes2.bytes), `secret.to_bytes serialization`)
}

function assertX25519PublicKey(publick: X25519PublicKey) {
  const bytes = publick.to_bytes()
  const bytes2 = X25519PublicKey.from_bytes(bytes).to_bytes()

  assert(equals(bytes.bytes, bytes2.bytes), `publick.to_bytes serialization`)
}

test("X25519", async () => {
  await initBundled()

  const secretx = new X25519StaticSecret()
  const secrety = new X25519StaticSecret()

  assertX25519StaticSecret(secretx)
  assertX25519StaticSecret(secrety)

  const publicx = secretx.to_public()
  const publicy = secrety.to_public()

  assertX25519PublicKey(publicx)
  assertX25519PublicKey(publicy)

  const sharedx = secretx.diffie_hellman(publicy)
  const sharedy = secrety.diffie_hellman(publicx)

  assert(equals(sharedx.to_bytes().bytes, sharedy.to_bytes().bytes), `secrets should be equal`)
})