import { httpRequest } from "@/utils/dataHelpers";
import ListComponent from "@/components/tasks/listComponent";
import TaskEntry from "@/components/tasks/taskEntry";
import { Tasks, Task } from "@/utils/dataTypes";
import { NextPage } from "next";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserProfileData } from "@/services/profile.service";

 const TasksPage: NextPage = withPageAuthRequired( async () => {

  const userData = await getUserProfileData();
  
  const tasks: Tasks = await httpRequest(
    "/tasks", 
    {
      filterKey: "userId",
      filterValue: userData.sub,
    }, 
    "PUT",
    {cache: 'no-store'}
  );

  return (
    <div className="bg-[#C9C29F] px-6">
      {tasks.count ? 
        <h2>{tasks.count} tasks outstanding...</h2 > :
        <h2>All caught up!</h2>}
      {tasks.data.map((task: Task) => (
          <ListComponent key={task._id} task={task} /> 
      ))}
      <TaskEntry userId={userData.sub} />
    </div>
  );
}, { returnTo: '/tasks'});

export default TasksPage;
