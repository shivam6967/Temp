"use client";

import FirstPage from "@/components/FirstPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/AluminiPage";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/events" element={<RecentProjects />} />
      </Routes>
    </Router>
  );
};

export default Home;
