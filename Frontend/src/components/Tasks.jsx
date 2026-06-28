import React from "react";
const API = import.meta.env.VITE_API_URL;

const Tasks = ({ tasks, setTasks, token }) => {
  const handleClick = async (id) => {
    try {
      const res = await fetch(`${API}/deletetask/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to delete task");
      }

      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => {
        return (
          <div
            key={task._id}
            className="w-full border flex justify-between items-center p-2 gap-4 shadow-2xl"
          >
            <div>
              <h1 className="font-medium text-2xl">{task.heading}</h1>
              <p>{task.body}</p>
            </div>
            <button
              className="px-5 border py-2 hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => {
                handleClick(task._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
