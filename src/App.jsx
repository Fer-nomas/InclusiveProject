import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Abecedario from "./pages/Abecedario";
import Search from "./pages/Search";
import MesaggeProvider from "./context/MessageContext";
import ShowProvider from "./context/ShowContext";

function App() {
  return (
    <ShowProvider>
      <MesaggeProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<Abecedario />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </MesaggeProvider>
    </ShowProvider>
  );
}

export default App;
