'use client';
import { httpRequest } from "@/utils/dataHelpers";
import { useRouter } from "next/navigation";

const DeleteButton = ({ _id, token }: { _id: string, token: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const payload = {
      filterKey: "_id",
      filterValue: _id
    };
    
    await httpRequest("/tasks/delete", payload, "PATCH", token, { cache: "no-store" });

    router.refresh();
  };

  return (
    <div>
      <button
        className="btn btn-xs btn-warning"
        onClick={() => handleDelete()}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
