import React from 'react';
import './App.css';
//Provider para dizer qual escopo a store vai agir.
//E eu quero que o Provider atinja toda a aplicação
//Por isso eu estou colocando aqui
import {Provider} from 'react-redux';
//Passando a store
//E assim todos os componentes que estiverem dentro do provider
//Vão ter acesso a store
import store from './store';

import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import Chatbot from './Componentes/Chatbot';

function App() {
  return (
    <Provider store={store}>
      <div className="conteudo">  
          <Header></Header>
          <Home></Home>
          <Chatbot></Chatbot>
          <Footer></Footer>
      </div>
    </Provider>
    
  );
}

export default App;
