import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Cheef from './components/cheef/Cheef';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <Header />
      <Cheef />
    </div>
  );
};

const MenuPage = () => {
  return (
    <div>
      <Menu />
    </div>
  );
};

const ContactPage = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <About />
    </div>
  );
};

const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

const RegisterPage = () => {
  return (
    <div>
      <Register />
    </div>
  );
};

export default App;