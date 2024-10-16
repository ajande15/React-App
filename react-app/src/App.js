import React from 'react';
import { useState } from "react";
import Arctic from "./Pages/Arctic.js";
import AboutUs from "./Pages/About-Us.js";
import HireUs from "./Pages/Hire-Us.js";
import ContactUs from "./Pages/Contact-Us.js";
import Login from "./Pages/Login.js";
import Signup from "./Pages/Signup.js";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === 'home' && (
        <>
          <Arctic setPage={setPage} />
          <AboutUs />
          <HireUs />
          <ContactUs />
        </>
      )}
      {page === 'login' && <Login setPage={setPage}/>}
      {page === 'signup' && <Signup setPage={setPage}/>}
    </div>
  );
}

export default App;

