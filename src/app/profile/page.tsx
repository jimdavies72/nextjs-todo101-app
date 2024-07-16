import { ProfileForm } from "@/components/profile/profileForm";
import { getUserProfileData } from "@/services/profile.service";
import { NextPage } from "next";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";


const ProfilePage: NextPage = withPageAuthRequired(async () => {

  const userData = await getUserProfileData();

  return(
    <ProfileForm userData={userData}/>
  )
},{ returnTo: "/profile" });

export default ProfilePage;