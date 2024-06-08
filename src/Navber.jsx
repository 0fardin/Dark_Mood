import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { getDatabase, push, ref, set, onValue } from "firebase/database";

const Navber = () => {
  let toggletheme = () => {
    document.documentElement.classList.add("dark");
  };
  let theme = () => {
    document.documentElement.classList.remove("dark");
  };

  let [task, setTask] = useState("");
  let [alldata, setAlldata] = useState([]);

  let input = (e) => {
    setTask(e.target.value);
  };
  let submit = () => {
    const db = getDatabase();
    set(push(ref(db, "data/")), {
      name: task,
    }).then(() => {
      setTask("");
      alert("Task added!");
    });
  };

  useEffect(() => {
    const db = getDatabase();
    const dataref = ref(db, "data/");
    onValue(dataref, (snapshot) => {
      let array = [];
      snapshot.forEach(() => {
        array.push(item.val());
      });
      setAlldata(array);
    });
  }, []);

  return (
    <>
      <div className="container  mx-auto">
        <div className=" bg-blue-900 flex justify-between dark:bg-red-800">
          <img
            className="w-20 align-middle ml-4"
            src="../images/logo.png"
            alt="logo"
          />
          <div className="flex items-center">
            <ul className="flex gap-8 items-center text-white">
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
            <button
              onClick={toggletheme}
              className=" ml-20 mr-10 py-3 px-4 bg-orange-700 rounded-md text-white"
            >
              <MdOutlineDarkMode className="dark:text-black" />
            </button>
            <button
              onClick={theme}
              className="mr-10 py-3 px-4 bg-orange-700 rounded-md text-white"
            >
              <MdOutlineLightMode className="text-black dark:text-white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          {" "}
          <label className="text-black font-bold text-4xl dark:text-white">
            Input
          </label>
          <input
            onChange={input}
            value={task}
            placeholder="Input Your Task"
            type="text"
            className="border border-black rounded-md w-6/12 h-14 py-2 px-3"
          />
          <button
            onClick={submit}
            className="text-black font-bold text-4xl py-2 px-3 rounded-md bg-blue-900 dark:bg-red-800 dark:text-white"
          >
            Submit
          </button>
        </div>
        <ul className="text-center text-2xl font-medium">
          <li>home</li>
          {alldata.map((item) => {
            return <li>{item.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Navber;
