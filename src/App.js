import React from "react"
import TopBar from "./components/TopBar.tsx";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Activities from "./Activities.tsx";
import Footer from "./components/Footer.tsx";
import Cardcarousel from "./components/Cardcarousel.tsx";

function App() {
  return (
    <div >
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Cardcarousel />
      <Footer />
    </div>
  );
}

export default App;
