'use client';
import { httpRequest } from "@/utils/dataHelpers";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Claims } from "@auth0/nextjs-auth0";
import { FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import moment from "moment";

export const ProfileForm = ({ userData }: { userData: Claims}) => {

  const router = useRouter();
  const [formData, setFormData] = useState({});

  const date = moment(userData.updated_at).format("DD MMM, YYYY HH:MM:SS");

  const handleData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response: Response = await httpRequest(
      `/api/v2/users/${userData.sub}`,
      formData,
      "PATCH"
    );

    if (response) {
      console.log("response", response);
      router.refresh();
    }
  }

  return (
    <div className="bg-[#CCE0C8] px-6]">
      <div className="flex justify-between items-center px-[5%] py-3">
        {userData.picture && (
          <Image
            src={userData.picture}
            alt="Profile"
            className="profile__avatar shadow-md rounded-[3px] border-solid border-2 border-gray-400"
            width={80}
            height={80}
          />
        )}
        <h2>{userData.nickname}'s Profile</h2>
        <p>User Id: {userData.sub}</p>
      </div>
      <div className="mt-[2rem] flex flex-col items-center justify-center">
        <div>
          <h3>{userData.name}</h3>
          <h3>
            {userData.email} {userData.verified ? "✅" : "❌"}
          </h3>
          <p>last updated: {date}</p>
        </div>
        <div className="mt-[2rem]">
          <form
            onSubmit={onSubmit}
            id="profileForm"
            method="PATCH"
            className="flex flex-col items-center"
          >
            <input
              type="text"
              value={userData.nickname ?? ""}
              name="nickname"
              placeholder="nickname"
              onChange={(e) => handleData(e)}
            />
            <input
              type="text"
              value={userData.picture ?? ""}
              name="picture"
              placeholder="picUrl"
              onChange={(e) => handleData(e)}
            />
            <div className="w-full flex justify-end my-[5px]">
              <button type="submit" className="mr-[5px]">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
