import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReducerHookExample from "./components/ReducerHookExample.tsx";
import Home from "./components/Home.tsx";
import EffectHookExample from "./components/EffectHookExample.tsx";
import CompoundComponent from "./components/CompoundComponent.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/use-reducer", element: <ReducerHookExample /> },
      { path: "/use-effect", element: <EffectHookExample /> },
      { path: "/compound-component", element: <CompoundComponent /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
