import React from "react";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import { getCategories, getSocials } from "@/lib/data-service";
import { Toaster } from "react-hot-toast";
import { cookies } from "next/headers";

const PlainLayout = async ({ children }) => {
  const socials = await getSocials();
  const categories = await getCategories();
  const cookkies = await cookies();
  const token = cookkies.get("token");
  const isLogin = token ? true : false;

  return (
    <>
      <AppNavbar isLogin={isLogin} categories={categories} socials={socials} />
      {children}
      <Toaster position="bottom-center" />
      <Footer categories={categories} socials={socials} />
    </>
  );
};

export default PlainLayout;
