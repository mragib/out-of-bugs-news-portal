import PlainLayout from "@/components/master/PlainLayout";
import SignUpForm from "@/components/user/SignUpForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");

  if (token) {
    redirect("/");
  }
  return (
    <PlainLayout>
      <SignUpForm />
    </PlainLayout>
  );
}

export default page;
