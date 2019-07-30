import React from 'react';
import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import Chatbot from './Componentes/Chatbot';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Home></Home>
        <Chatbot></Chatbot>
        <Footer></Footer>
    </div>
  );
}

export default App;
