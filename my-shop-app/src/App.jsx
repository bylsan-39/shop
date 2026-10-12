import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Products from "./components/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "easy-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <Section1></Section1>
      <Products></Products>
      <TopProducts></TopProducts>
      <Section2></Section2>
      <Section3></Section3>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
}

export default App