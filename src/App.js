// src/App.js
import './App.css';
import Countries from './countries.json';
import { useState } from 'react';
import CountriesList from './components/CountriesList';

function App() {
  const [countryState, setCountryState] = useState(Countries);
  return (
    <div className="App">
      <CountriesList countryState={countryState} />
    </div>
  );
}
export default App;
