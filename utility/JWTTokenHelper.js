// import { jwtVerify, SignJWT } from "jose";

// export async function CreateToken(email, id) {
//   if (!process.env.JWT_SECRET) {
//     throw new Error("JWT_SECRET is not defined.");
//   }
//   const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//   const Payload = { email: email, id: id };
//   let token = await new SignJWT(Payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setIssuer(process.env.JWT_ISSUER)
//     .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
//     .sign(secret);
//   return token;
// }

// export async function VerifyToken(token) {
//   const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//   const decoded = await jwtVerify(token, secret);
//   return decoded["payload"];
// }

import { jwtVerify, SignJWT } from "jose";

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

export async function CreateToken(email, id) {
  const payload = { email, id };
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER || "default-issuer")
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME || "2h")
    .sign(secretKey);
  return token;
}

export async function VerifyToken(token) {
  try {
    const decoded = await jwtVerify(token, secretKey);

    return decoded.payload;
  } catch (err) {
    console.error("Token verification failed:", err.message);
    throw new Error("Invalid token");
  }
}
