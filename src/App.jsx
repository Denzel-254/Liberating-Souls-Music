import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";

import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";

// Landing sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WhatWeDo from "./components/sections/WhatWeDo";
import Programs from "./components/sections/Programs";
import JoinUs from "./components/sections/JoinUs";

// Pages
import AboutPage from "./components/pages/AboutPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import WhatWeDoPage from "./components/pages/WhatWeDoPage";
import MediaPage from "./components/pages/MediaPage";
import ContactPage from "./components/pages/ContactPage";
import CollectivePage from "./components/pages/CollectivePage";
import EventsPage from "./components/pages/EventsPage";

/* 🔹 Layout Component */
function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

/* 🔹 Home Page (Landing composed of sections) */
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <Programs />
      <JoinUs />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* All pages wrapped with header + footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/collective" element={<CollectivePage />} />
        <Route path="/events" element={<EventsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
