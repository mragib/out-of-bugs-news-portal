import { jwtVerify, SignJWT } from "jose";

export async function CreateToken(email, id) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const payload = { email, id };
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer(process.env.JWT_ISSUER)
    .setIssuedAt()
    .setExpirationTime(process.env.JWT_EXPIRES)
    .sign(secret);

  return token;
}

export async function VerifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const decoded = await jwtVerify(token, secret);

  return decoded["payload"];
}
