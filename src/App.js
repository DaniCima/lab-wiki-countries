// src/App.js
import './App.css';
import Countries from './countries.json';
import { useState } from 'react';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countryState, setCountryState] = useState(Countries);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countryState={countryState} />
      <Routes>
        {/* <Route
          path="/:id"
          element={<CountryDetails countryState={countryState} />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
