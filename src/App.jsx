import React from "react";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";
import Properties from "./Components/Properties/Properties";
import WorkProcess from "./Components/WorkProcess/WorkProcess";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css"

function App() {
    return(
        <div>
            <Header/>
            <Services/>
           {/*  <Work/> */}
            <WorkProcess/>
            <NewsLetter/>
            <About/>
            <Properties/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App