import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const headersList = await headers();

    const id = parseInt(headersList.get("id"));
    if (!id) {
      return NextResponse.json({ status: "fail", data: "Missing ID" });
    }
    const result = await prisma.comments.findMany({
      where: { userID: id },
      include: { news_list: { select: { title: true } } },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const headersList = await headers();

    const id = parseInt(headersList.get("id"));
    if (!id) {
      return NextResponse.json({ status: "fail", data: "Missing ID" });
    }

    const reqObj = await req.json();
    reqObj.userID = id;
    const result = await prisma.comments.create({
      data: reqObj,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}

export async function DELETE(req, res) {
  try {
    const prisma = new PrismaClient();
    const headersList = await headers();

    const user_id = parseInt(headersList.get("id"));
    if (!user_id) {
      return NextResponse.json({ status: "fail", data: "Missing ID" });
    }

    const reqObj = await req.json();
    const comment_id = parseInt(reqObj["id"]);

    const result = await prisma.comments.deleteMany({
      where: {
        AND: [{ userID: user_id }, { id: comment_id }],
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}
