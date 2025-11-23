import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Meetups from "./pages/Meetups";
import MeetupDetails from "./pages/MeetupDetails";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="meetups" element={<Meetups />} />
        <Route path="meetups/:id" element={<MeetupDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);