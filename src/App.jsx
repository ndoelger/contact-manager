import "./App.css";
// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { getContacts } from "./utilities/hubspot-test";
import { ContactDashboard } from "./pages/ContactDashboard";

function App() {

  return (
    <div className="App pb-7">
      <>
        <Routes>
          <Route path="/" element={<ContactDashboard />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
