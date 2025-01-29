import PlainLayout from "@/components/master/PlainLayout";
import ProfileForm from "@/components/user/ProfileForm";
import { getUserProfile } from "@/lib/data-service";
import { cookies } from "next/headers";
import React from "react";

const Profile = async () => {
  const cookie = await cookies();
  const profile = await getUserProfile(cookie);
  return (
    <PlainLayout>
      <ProfileForm profile={profile.data} />
    </PlainLayout>
  );
};

export default Profile;
