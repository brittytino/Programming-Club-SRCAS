import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Join from "./components/Join";
import Partners from './components/Partners'
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/join" element={<Join />} />
                <Route path="/partners" element={<Partners/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
