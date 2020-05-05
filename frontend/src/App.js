import React from "react";
import logo from "./logo.svg";
import "./App.css";

import useAxios from "axios-hooks";

function App() {
  const [{ data, loading, error }] = useAxios("http://localhost:3004/posts");

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;

  return (
    <>
      <div>
        <div>
          <h2>My blog post data!</h2>
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
