import React from "react";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";
import Testimonials from "./Components/Testimonials/Testimonials";
import "./App.css"

function App() {
    return(
        <div>
            <Header/>
            <Services/>
            <Work/>
            <Testimonials/>
        </div>
    )
}

export default App