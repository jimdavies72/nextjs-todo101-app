'use client';
import { useState, useEffect } from "react";
import { httpRequest } from "@/utils/dataHelpers";

const CompleteCheckBox = ( 
  { _id, token, completed }: { _id: string, token: string, completed: boolean }
) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckUpdate = async () => {
    setIsChecked(!isChecked);

    const payload = 
    {
      filter: {
        filterKey: "_id",
        filterValue: {_id},
      },
      data: {
        completed: !isChecked
      }
    }

    await httpRequest("/tasks/update", payload, "PATCH", token, {cache: 'no-store'});

  };

  return (
    <div>
      <label >
        Completed: 
        <input 
          name="completed"
          type="checkbox"
          className="text-lg font-medium" 
          checked={isChecked}
          onChange={handleCheckUpdate}
        />
      </label>
    </div>
  );
};

export default CompleteCheckBox;