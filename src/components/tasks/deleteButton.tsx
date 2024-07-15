'use client';
import { httpRequest } from "@/utils/dataHelpers";

const DeleteButton = ({ _id }: { _id: string }) => {
  
  const handleDelete = async () => {
    const payload = {
      filterKey: "_id",
      filterValue: {_id},
    }

    await httpRequest("/tasks/delete", payload, "PATCH", { cache: "no-store" });

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
