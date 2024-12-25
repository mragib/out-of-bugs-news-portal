import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const headersList = await headers();

    const id = parseInt(headersList.get("id"));
    const user = await prisma.users.findUnique({ where: { id: id } });

    return NextResponse.json({ status: "success", data: user });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

export async function POST(req, res) {
  try {
    const reqObj = await req.json();
    const prisma = new PrismaClient();
    const headersList = await headers();

    const id = parseInt(headersList.get("id"));
    const user = await prisma.users.update({ where: { id: id }, data: reqObj });
    return NextResponse.json({ status: "success", data: user });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}
