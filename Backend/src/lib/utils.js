import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";



export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};

const ENCRYPTION_SECRET = "12345678901234567890123456789012";

export const encryptText = (plainText) => {
  return CryptoJS.AES.encrypt(plainText, ENCRYPTION_SECRET).toString();
};
