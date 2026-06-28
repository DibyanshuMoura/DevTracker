import React from "react";

const Heading = ({username}) => {
  return (
    <div className="flex flex-col gap-2 text-center">
      <h1 className="text-3xl font-bold">Welcome, {username}</h1>
      <p className="text-2xl font-light">Lets get things done</p>
    </div>
  );
};

export default Heading;
