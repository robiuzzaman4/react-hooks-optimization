import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EffectHookExample: React.FC = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="grid gap-6 w-full max-w-[540px] mx-auto rounded-lg bg-slate-50 shadow-md p-4 my-20">
      <Link to="/" className="bg-slate-100 p-1 rounded-lg w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.8"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </Link>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="py-1.5 px-4 rounded-full text-white bg-violet-500 font-medium"
      >
        {hidden ? "Show" : "Hide"}
      </button>
      {!hidden && <Counter />}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("render");
      setCount((prev) => prev + 3);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <h4 className="text-2xl font-semibold">
      This count is increasing 3 times in every 3 second:{" "}
      <span className="text-violet-500">{count}</span>
    </h4>
  );
};

export default EffectHookExample;
