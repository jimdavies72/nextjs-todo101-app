import { httpRequest } from "@/utils/dataHelpers";
import ListComponent from "@/components/tasks/listComponent";
import TaskEntry from "@/components/tasks/taskEntry";
import { Tasks, Task } from "@/utils/dataTypes";


const TasksPage = async () => {

  const tasks: Tasks = await httpRequest(
    "/tasks", 
    {
      filterKey: "userId",
      filterValue: "1234",
    }, 
    "PUT",
    {cache: 'no-store'}
  );

  return (
    <div className="bg-[#C9C29F] px-6">
      <h2>{tasks.count} Tasks</h2 >
      {tasks.data.map((task: Task) => (
          <ListComponent key={task._id} task={task} /> 
      ))}
      <TaskEntry />
    </div>
  );
};

export default TasksPage;
