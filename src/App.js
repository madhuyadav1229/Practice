import React from "react";
import './App.css'
import Header from "./Components/Header/Header";
import Home from "./Components/Hero/Home";
import Features from "./Components/Features/Features";
import Feedback from "./Components/Feedback/Feedback";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Features/>
    <Feedback/>
    <Blog/>
    <Contact/>
    <Footer/>
  </>
  );
}

export default App;
