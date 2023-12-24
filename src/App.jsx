import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import TopNav from "./TopNav";

function App() {
  return (
    <div className="flex h-screen flex-col bg-slate-900">
      <TopNav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Skill" element={<Skill />}></Route>
        <Route exact path="/Project" element={<Project />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
