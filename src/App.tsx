import React from "react";
import "./App.css";
import { Router } from "./router/Router";

interface AppProp {
  message: string;
}

const App = ({ message }: AppProp) => {
  return (
    <>
      <div>{message}</div>
      <Router />;
    </>
  );
};

export default App;
