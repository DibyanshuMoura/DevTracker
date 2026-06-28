import React from "react";
import Heading from "../components/Heading";
import Newtask from "../components/Newtask";
import Tasks from "../components/Tasks";

const Dashboard = ({ user, token, tasks, setTasks }) => {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <Heading username={user.username} />
      <Newtask token={token} tasks={tasks} setTasks={setTasks}/>
      <Tasks tasks={tasks} setTasks={setTasks} token={token}/>
    </div>
  );
};

export default Dashboard;
