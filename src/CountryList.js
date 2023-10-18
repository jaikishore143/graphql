import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from './actions';
import { useEffect } from 'react';

function CountryList() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countries);
  const loading = useSelector((state) => state.country.loading);
  const error = useSelector((state) => state.country.error);

  useEffect(() => {
    dispatch(fetchCountries());
    console.log(countries,"countre")
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>{country.mission_name}</li>
      ))}
    </ul>
  );
}

export default CountryList;
