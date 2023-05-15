import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Project from './components/Project';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/christinelin-personal-website" element={<Home/>}></Route>
          <Route path="/christinelin-personal-website/about-me" element={<AboutMe/>}></Route>
          <Route path="/christinelin-personal-website/experience" element={<Experiences/>}></Route>
          <Route path="/christinelin-personal-website/projects" element={<Project/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
