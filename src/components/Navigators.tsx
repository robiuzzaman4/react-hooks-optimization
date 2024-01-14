import React from "react";
import { Link } from "react-router-dom";

const Navigators: React.FC = () => {
  const navigators = [
    { id: 1, title: "useReducer Hook", url: "use-reducer" },
    { id: 2, title: "useEffect Hook", url: "use-effect" },
    { id: 3, title: "compound Component", url: "compound-component" },
  ];
  return (
    <div className="w-full grid">
      {navigators?.map((navigator) => (
        <Link
          key={navigator?.id}
          to={navigator?.url}
          className="text-sm font-medium hover:underline p-2 rounded hover:bg-slate-100"
        >
          {`${navigator?.id}. ${navigator?.title}`}
        </Link>
      ))}
    </div>
  );
};

export default Navigators;
