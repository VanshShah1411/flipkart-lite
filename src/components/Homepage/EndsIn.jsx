import React, { useState, useEffect } from "react";

function pad0(value) {
  return value.toString().padStart(2, "0");
}

const EndsIn = () => {
  const curr = new Date();
  const currentYear = curr.getFullYear();
  const month = curr.getMonth();
  const day = curr.getDate();

  const endDate = new Date(currentYear, month, day + 1).getTime();

  const [time, setTime] = useState({ secs: 0, mins: 0, hours: 0 });

  setInterval(() => {
    const currTime = curr.getTime();
    const remaining = endDate - currTime;
    const secs = Math.floor(remaining / 1000);
    const mins = Math.floor(secs / 60);
    const hours = Math.floor(mins / 60);

    setTime({ secs, mins, hours });
  }, 1000);

  return (
    <div>
      <p className="text-center text-3xl m-10 font-semibold text-gray-400">
        Ends In{" "}
        <span className="font-medium text-orange-500">
          {pad0(time.hours % 24)}:{pad0(time.mins % 60)}:{pad0(time.secs % 60)}
        </span>{" "}
        Grab Now!
      </p>
    </div>
  );
};

export default EndsIn;
