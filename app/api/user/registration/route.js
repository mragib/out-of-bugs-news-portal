import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const reqObj = await req.json();
  reqObj.otp = "0";
  const prismaClient = new PrismaClient();
  try {
    const result = await prismaClient.users.create({
      data: reqObj,
    });
    return NextResponse.json(
      { message: "success", data: result },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "fail", error }, { status: 500 });
  }
}
