import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countryState }) => {
  return (
    <div>
      {countryState.map((item) => {
        return (
          <div key={item.alpha3Code}>
            <Link className="bla-bla" to={`/${item.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`}
                alt="flag"
                width={16}
                height={12}
                className="m-2"
              />
              {item.name.official}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
