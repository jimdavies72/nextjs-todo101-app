'use client';
import { httpRequest } from "@/utils/dataHelpers";
import { useRouter } from "next/navigation";

const DeleteButton = ({ _id }: { _id: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const payload = {
      filterKey: "_id",
      filterValue: _id
    };
    
    await httpRequest("/tasks/delete", payload, "PATCH", { cache: "no-store" });

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
