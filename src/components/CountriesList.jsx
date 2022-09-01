import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countryState }) => {
  return (
    <div>
      {countryState.map((item) => {
        return (
          <div key={item.alpha3Code}>
            <Link className="bla-bla" to={`/${item.alpha3Code}`}>
              {item.name.official}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
