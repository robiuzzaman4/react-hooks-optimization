import React from "react";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <main className="min-h-svh w-full bg-white text-slate-950">
      <Outlet />
    </main>
  );
};

export default App;
