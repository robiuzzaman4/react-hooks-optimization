import React from "react";
import Navigators from "./Navigators";

const Home: React.FC = () => {
  return (
    <div className="max-w-screen-md w-full mx-auto py-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 grid gap-10">
      <h1 className="text-3xl font-semibold text-violet-500 text-center">
        React Hooks Optimization
      </h1>

      <Navigators />
    </div>
  );
};

export default Home;
