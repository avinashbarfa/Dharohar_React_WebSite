import React from 'react';
import './App.css';
import Header from "./components/header";
import Slider from "./components/slider";
import FeaturedSection from "./components/featuredSection";
import Footer from "./components/footer";
import AboutCompany from "./components/aboutCompany";

function App() {
  return (
    <div className="App">
      <Header />
       <Slider />
        <FeaturedSection/>
        <AboutCompany />
        <Footer />
    </div>
  );
}

export default App;
