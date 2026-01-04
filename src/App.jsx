import "./App.css";
import Navigation from "./components/common/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import WhatWeDo from "./components/sections/WhatWeDo";
import Programs from "./components/sections/Programs";
import JoinUs from "./components/sections/JoinUs";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <WhatWeDo />
      <Programs />
      <JoinUs />
      <Footer />
    </>
  );
}

export default App;
