import CryptoJS from "crypto-js";

const key = (process.env.NEXTAUTH_SECRET ?? "changeme").padEnd(32, "0").slice(0, 32);
const iv = "0123456789abcdef"; // static IV for simplicity; rotate in production

export function encryptToBase64(plain: string): string {
  const encrypted = CryptoJS.AES.encrypt(plain, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}

export function decryptFromBase64(ciphertext: string): string {
  const decrypted = CryptoJS.AES.decrypt(ciphertext, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}


