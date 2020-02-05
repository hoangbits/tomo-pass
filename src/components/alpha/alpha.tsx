import React from 'react';
import logo from 'images/logo.svg';
import './alpha.css';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Alpha: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Portfolio.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </header>
    </div>
  );
};

export default Alpha;
