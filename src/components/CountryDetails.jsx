import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails({ countryState }) {
  let { id } = useParams;
  // console.log(id);

  const findCountry = (id) => {
    const targetCountry = (theCountry) => {
      return theCountry.id === id;
    };
    return countryState.find(targetCountry);
  };

  return (
    <div className="col-7">
      {findCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${findCountry.alpha2Code.toLowerCase()}.png`}
            alt="flag"
            className="m-2"
          />
          <h1>{findCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{findCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {findCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {findCountry.borders.map((code) => {
                      return (
                        <li key={code.alpha3Code}>
                          <Link to={`/${code}`}>
                            {countryState.map((country) => {
                              if (country.alpha3Code === code) {
                                return country.name.common;
                              }
                            })}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
