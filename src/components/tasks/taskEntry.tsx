'use client';
import { FormEvent, ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { httpRequest } from "@/utils/dataHelpers";
import { useRouter } from "next/navigation";

const TaskEntry = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  
  useEffect(() => {
    setFormData({userId: "1234"});    
  }, []);

  const handleData = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const response: Response = await httpRequest(
      "/tasks",
      formData,
      "POST"
    );

    if (response) {
      router.refresh();
    }
  };

  return (
    <div className="flex">
      <form method="POST" id="taskEntry" onSubmit={onSubmit}>
        <input
          type="text"
          name="taskTitle"
          placeholder="task"
          onChange={(e) => handleData(e)}
          className="flex-1"
        />
        <button className="btn btn-sm btn-outline btn-secondary" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default TaskEntry;
