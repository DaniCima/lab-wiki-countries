import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails({ countryState }) {
  const [targetCountry, setTargetCountry] = useState({});
  const [foundedCountry, setFoundedCountry] = useState(false);
  const { countryId } = useParams();
  //console.log(countryId);

  useEffect(() => {
    const findCountry = countryState.find(
      (country) => country.alpha3Code === countryId
    );
    console.log(findCountry);
    setTargetCountry(findCountry);
    setFoundedCountry(true);
  }, []);

  return (
    <div className="col-7">
      {foundedCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${targetCountry.alpha2Code.toLowerCase()}.png`}
            alt="flag"
            className="m-2"
          />
          <h1>{targetCountry.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{targetCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {targetCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {targetCountry.borders.map((code) => {
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
