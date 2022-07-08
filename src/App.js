import { Route, Routes } from "react-router-dom"
import Notes from "./components/Notes"
import Contact from "./components/Contact"
import Home from "./components/Home"
import './App.css';
import Navbar from "./components/Navbar"

export default function App() {
    return (
        <div className="app--wrapper">
            <Navbar />
            <main className="content--wrapper">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/notes/:noteId" element={<Notes />} />
                    <Route path="/notes/*" element={<Notes />} />
                </Routes>
            </main>
        
        </div>
     )
 }

