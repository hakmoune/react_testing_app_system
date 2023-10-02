import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter/counter';

function App() {
  return (
    <div>
      <Counter description="My description" defaultCount={0} />
    </div>
  );
}

export default App;
