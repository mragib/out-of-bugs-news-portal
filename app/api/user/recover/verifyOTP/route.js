import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqObj = await req.json();
    const prisma = new PrismaClient();

    const count = await prisma.users.count({ where: reqObj });
    if (count === 1) {
      return NextResponse.json({ status: "success", data: "Valid OTP" });
    }
    return NextResponse.json({ status: "fail", data: "Invalid OTP" });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}
