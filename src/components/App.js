
import React from "react";
import './../styles/App.css';
import { BrowserRouter } from "react-router-dom";
import Switch from "./Switch";
const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <BrowserRouter>
        <Switch />
      </BrowserRouter>
    </div>
  )
}

export default App
