import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from '../src/components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import ProjectDetail from './pages/ProjectDetails';
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/EliaG-Portfolio/" element={<Home />} />
        <Route path="/EliaG-Portfolio/about" element={<About />} />
        <Route path="/EliaG-Portfolio/projects/:projectId" element={<ProjectDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
