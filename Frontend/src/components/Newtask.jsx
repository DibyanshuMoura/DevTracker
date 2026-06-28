import React from "react";
import { useState } from "react";
const API = import.meta.env.VITE_API_URL;

const Newtask = ({ token, tasks, setTasks }) => {
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const handleMessages = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 1500);
  };
  const handleClick = async () => {
    if (!heading.trim() || !body.trim()) {
      handleMessages("Fill all the fields");
      return;
    }
    try {
      const res = await fetch(`${API}/addtask`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          heading: heading,
          body: body,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      setTasks((prevTasks) => [...prevTasks, data.task]);

      setHeading("");
      setBody("");
      handleMessages(data.message);
    } catch (err) {
      handleMessages(err.message);
    }
  };
  return (
    <div className="flex gap-10 justify-evenly items-center text-center">
      <div className="flex flex-col gap-3 p-3 border shadow-2xl w-full md:min-w-1/2 md:max-w-1/2">
        <input
          type="text"
          className="p-3 border outline-none"
          placeholder="task heading"
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value);
          }}
        />
        <textarea
          placeholder="task body"
          className="p-2 border outline-0 h-40"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <button
          type="submit"
          className="border px-8 py-4 cursor-pointer hover:shadow-lg transition duration-300"
          onClick={handleClick}
        >
          Add New Task
        </button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Newtask;
