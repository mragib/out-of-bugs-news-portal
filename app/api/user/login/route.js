import { CreateToken, VerifyToken } from "@/utility/JWTTokenHelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqObj = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.users.findUnique({ where: reqObj });

    if (result.length === 0) {
      return NextResponse.json({ status: "fail", data: token });
    }

    const token = await CreateToken(result.email, result.id);
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString();
    const cookieString = `token=${token};expires=${expires};path=/`;

    return NextResponse.json(
      { status: "success", data: token },
      { headers: { "set-cookie": cookieString } }
    );
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

export async function GET(req, res) {
  try {
    const expires = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const response = NextResponse.redirect(new URL("/", req.url), 303);

    response.cookies.set("token", "", { expires: expires });

    return response;
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}
