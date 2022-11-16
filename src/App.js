import React from "react";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home"
import { ProtectedRoutes } from "./Router/ProtectedRoutes";

import { HashRouter, Routes, Route } from 'react-router-dom'
import HeaderLayout from "./components/layaout/headerLayout/HeaderLayout";
import CreateAccount from "./components/pages/CreateAccount/CreateAccount";
import Newpassword from "./components/pages/Newpassword/Newpassword";
import Messages from "./components/pages/Messages/Messages";
import Perfil from "./components/pages/Perfil/Perfil";
import Ventas from "./components/pages/Ventas/Ventas";
import Anuncios from "./components/pages/Anuncios/Anuncios";



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/newuser" element={<CreateAccount/>}/>
        <Route path="/newpassword" element={<Newpassword/>}/>
                     
        <Route element={<ProtectedRoutes/>}>
          <Route element={<HeaderLayout/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/account" element={<Perfil/>}/>
            <Route path="/sales" element={<Ventas/>}/>
            <Route path="/ads" element={<Anuncios/>}/>
            
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;



//import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
//import './App.css';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <Counter />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <span>
//          <span>Learn </span>
//          <a
//            className="App-link"
//            href="https://reactjs.org/"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            React
//          </a>
//          <span>, </span>
//          <a
//            className="App-link"
//            href="https://redux.js.org/"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Redux
//          </a>
//          <span>, </span>
//          <a
//            className="App-link"
//            href="https://redux-toolkit.js.org/"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Redux Toolkit
//          </a>
//          ,<span> and </span>
//          <a
//            className="App-link"
//            href="https://react-redux.js.org/"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            React Redux
//          </a>
//        </span>
//      </header>
//    </div>
//  );
//}

//export default App;
