import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter,Routes,Link} from "react-router-dom"
import Home from './Home'
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="posts" element={<Posts />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
