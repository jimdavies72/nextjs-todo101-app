import ControlsComponent from "./controlsComponent";
import { Task } from "@/utils/dataTypes";

const ListComponent = ({ task }: { task: Task }) => {

  return (
    <div className="my-2 bg-white shadow-md rounded text-gray-700">
      <div className=" py-[0.25rem] px-[1rem] flex justify-between items-center bg-[#E0D0C8]">
        <h3 className="text-xl font-semibold">{task.taskTitle}</h3>
        <ControlsComponent _id={task._id} completed={task.completed} />
      </div>
      <div className="collapse">
        <div className="collapse-title">
          <h3>{task.taskDescription ? 'v' : '' }</h3>
        </div>
        <input id={task._id} type="checkbox" />
        <div className="collapse-content">
          <p>{task.taskDescription ? task.taskDescription : 'No Details'}</p>
        </div>
      </div>
    </div>
  );
};

export default ListComponent;