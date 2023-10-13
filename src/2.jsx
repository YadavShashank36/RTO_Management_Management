import Hero from "./components/Hero/Hero.jsx";
import Header from "./components/headers/Header";
import "./App.css";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies/residencies.jsx";
import GetStarted from "./components/GetStarted/GetStarted.jsx";
import Footer from "./components/Footer/footer.jsx";
import React from "react";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
