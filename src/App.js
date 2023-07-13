import React from "react"
import TopBar from "./components/TopBar.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.jsx";
// import DevSection from "./components/DevSection.jsx";


function App() {
  return (
    <div >
        <TopBar />
        <div className="bghome"> 
          <Home />
        </div>
        <Footer />
    </div>
  );
}

export default App;
