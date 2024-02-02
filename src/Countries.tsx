import React, { useEffect, useState } from 'react';
import './App.css'

/* let's work on a component that shows the countries that that you are able to filter by capital
https://restcountries.com/v3.1/all 

And for capitals
https://restcountries.com/v3.1/capital/{capital}

for instance:
https://restcountries.com/v3.1/capital/tallinn
*/

const BASE_URL = 'https://restcountries.com/v3.1'

// using interfaces
interface CountryName {
  official: string;
}
interface Country {
  name: CountryName;
}

// using types
// type CountryName = {
//   official: string;
// }

// type Country = {
//   name: CountryName;
// }

const Country: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <>
      <span>{country.name.official}</span>
    </>
  )
}

function App() {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    const fetchRequest = await fetch(`${BASE_URL}/all`);
    const data = await fetchRequest.json();
    setCountries(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>List of countries</h1>
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </>
  )
}

export default App
