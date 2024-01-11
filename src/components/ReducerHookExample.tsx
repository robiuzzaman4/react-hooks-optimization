import React, { useReducer } from "react";
import { Link } from "react-router-dom";

type TAction = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action?.type) {
    case "increment":
      return { count: currentState?.count + action?.payload };
    case "decrement":
      return { count: currentState?.count - action?.payload };
    case "reset":
      return { count: action?.payload };
    default:
      return currentState;
  }
};

const ReducerHookExample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
      <h3 className="text-5xl text-center text-violet-500 font-semibold">
        {state?.count}
      </h3>
      <div className="flex items-center justify-between gap-2 w-full">
        <button
          onClick={() => dispatch({ type: "decrement", payload: 5 })}
          className="py-1.5 px-4 rounded-full text-white bg-pink-500 font-medium"
        >
          Decrement (-5)
        </button>
        <button
          onClick={() => dispatch({ type: "reset", payload: 0 })}
          className="py-1.5 px-4 rounded-full text-white bg-orange-500 font-medium"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: "increment", payload: 5 })}
          className="py-1.5 px-4 rounded-full text-white bg-violet-500 font-medium"
        >
          Incremet (+5)
        </button>
      </div>
    </div>
  );
};

export default ReducerHookExample;
