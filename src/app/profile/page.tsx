'use client';
import { useUser } from "@auth0/nextjs-auth0/client";
import { FormEvent } from "react";
const ProfilePage = () => {
  const { user, isLoading } = useUser();
  const { nickname, name, email } = user || {}

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("./api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }

  return (
    <div className="bg-[#CCE0C8] px-6">
      <h1>Profile</h1>
      <div className="flex justify-center">
        <form onSubmit={onSubmit} className="flex flex-col items-center">
          <input
            type="text"
            value={nickname ?? ""}
            name="nickname"
            placeholder="nickname"
            onChange={(e) => e.target.value}
          />
          <input
            type="text"
            value={name ?? ""}
            name="name"
            placeholder="name"
            onChange={(e) => e.target.value}
          />
          <input
            type="text"
            value={email ?? ""}
            name="email"
            placeholder="email"
            onChange={(e) => e.target.value}
          />
          <div className="w-full flex justify-end my-[5px]">
            <button type="submit" className="mr-[5px]">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
