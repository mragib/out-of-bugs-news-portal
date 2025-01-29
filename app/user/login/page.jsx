import PlainLayout from "@/components/master/PlainLayout";
import LoginForm from "@/components/user/LoginForm";
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
      <LoginForm />
    </PlainLayout>
  );
};

export default page;
