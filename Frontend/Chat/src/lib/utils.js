import CryptoJS from 'crypto-js';
export function formatMessageTime(date) {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  const ENCRYPTION_SECRET = "12345678901234567890123456789012";
  
  export const decryptText = (cipherText) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, ENCRYPTION_SECRET);
    return bytes.toString(CryptoJS.enc.Utf8);
  };
