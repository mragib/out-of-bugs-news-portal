import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const email = reqBody["email"];
    const otp = reqBody["otp"];
    const updatedPassword = reqBody.password;

    const count = await prisma.users.count({
      where: { email: email, otp: otp },
    });

    if (count === 1) {
      const updatedUser = await prisma.users.update({
        where: { email: email, otp: otp },
        data: { password: updatedPassword, otp: "0" },
      });
      return NextResponse.json({
        status: "success",
        data: "Password reset successfully",
      });
    }

    return NextResponse.json({ status: "fail", data: "Password reset failed" });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}
