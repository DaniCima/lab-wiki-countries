import './App.css';
// import Countries from './countries.json';
import { useEffect, useState } from 'react';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';

function App() {
  const [countryState, setCountryState] = useState([]);
  const apiUrl = 'https://ih-countries-api.herokuapp.com/countries';

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setCountryState(response.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(countryState);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<CountriesList countryState={countryState} />}
        />
        <Route
          path="/:countryId"
          element={<CountryDetails countryState={countryState} />}
        />
      </Routes>
    </div>
  );
}

export default App;
