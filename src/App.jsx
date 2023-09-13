import React from "react";
import Create from "./components/addList/Create";
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
