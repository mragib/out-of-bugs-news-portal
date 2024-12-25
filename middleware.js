import { VerifyToken } from "@/utility/JWTTokenHelper";
import { NextResponse } from "next/server";

export async function middleware(req, res) {
  try {
    const token = req.cookies.get("token");
    const payload = await VerifyToken(token["value"]);

    const requestHeader = new Headers(req.header);
    requestHeader.set("email", payload["email"]);
    requestHeader.set("id", payload["id"]);

    return NextResponse.next({ request: { headers: requestHeader } });
  } catch (error) {
    const requestHeader = new Headers(req.header);
    requestHeader.set("email", "0");
    requestHeader.set("id", "0");

    return NextResponse.next({ headers: requestHeader });
  }
}
