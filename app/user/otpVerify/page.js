import PlainLayout from "@/components/master/PlainLayout";
import PinVerifyForm from "@/components/user/PinVerifyForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");

  if (token) {
    redirect("/");
  }
  return (
    <PlainLayout>
      <PinVerifyForm />
    </PlainLayout>
  );
};

export default page;
