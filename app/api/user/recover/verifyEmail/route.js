import { sendMail } from "@/utility/EmailUtility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    // console.log(searchparams);

    const email = searchParams.get("email");
    const prisma = new PrismaClient();

    const count = await prisma.users.count({ where: { email: email } });

    if (count === 1) {
      const code = Math.floor(100000 + Math.random() * 900000);
      const subject = "Out of Bugs News Portal Verification Code";
      const text = "Your OTP is:" + code;
      await sendMail(email, subject, text);
      let result = await prisma.users.update({
        where: { email: email },
        data: { otp: code.toString() },
      });

      return NextResponse.json({
        status: "success",
        data: result,
      });
    }
    return NextResponse.json({ status: "fail", data: "No user found" });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.message });
  }
}
