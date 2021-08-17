import React from "react";
import "./App.css";

import { GloalProvider } from "./context/GlobalState";

function App() {
  return (
    <GloalProvider>
      <div>App provider</div>
    </GloalProvider>
  );
}

export default App;
