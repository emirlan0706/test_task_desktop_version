import React from "react";
import "./App.css";
import Create from "./components/Create";
import { DataProvider } from "./context/dataContextProvider";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Create />
      </DataProvider>
    </div>
  );
}

export default App;
