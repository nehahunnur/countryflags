import React, { useEffect, useState } from "react";
import "./CountriesList.css";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="countries-container">
      {countries.map((country) => (
        <div className="country" key={country.name}>
          <img src={country.flag} alt={`Flag of ${country.name}`} />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
