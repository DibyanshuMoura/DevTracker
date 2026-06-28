import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Dashboard from "../components/Dashboard";
const API = import.meta.env.VITE_API_URL;

const Middle = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("jwt");
  useEffect(() => {
    const fetchData = async () => {

      if (!token) {
        navigate("/");
        return;
      }

      const res = await fetch(`${API}/me`
        , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );

      if (!res.ok) {
        localStorage.removeItem("jwt");
        navigate("/");
        return;
      }

      const data = await res.json();
      setUser(data.user);
      setTasks(data.tasks);
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="flex-1 flex px-10 py-8 items-center justify-center sm:px-16 sm:py-10">
      {user ? <Dashboard user={user} token={token} tasks={tasks} setTasks={setTasks}/> : <Loading />}
    </div>
  );
};

export default Middle;
