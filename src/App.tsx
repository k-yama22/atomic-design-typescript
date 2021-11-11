import React from "react";
import "./App.css";
import Counter from "./components/molecules/counter/Counter";
import { Router } from "./router/Router";

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <>
      <div>
        <Counter />
      </div>
      <Router />;
    </>
  );
};

App.defaultProps = {
  message: "Hello, defaultProps!",
  // description: "This is App Component.",
};

export default App;
