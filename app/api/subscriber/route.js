import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqObj = await req.json();
    const prisma = new PrismaClient();

    const user = await prisma.subscribers.create({ data: reqObj });
    return NextResponse.json({ status: "success", data: user });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}
