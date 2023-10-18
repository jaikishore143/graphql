import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from './actions';
import { useEffect } from 'react';

function ShipsList() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.ship.ships);
  const loading = useSelector((state) => state.ship.loading);
  const error = useSelector((state) => state.ship.error);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container-fluid bg-info">
        <h1 className='text-center m-4'>Ships</h1>
    <div className="row">
      {countries.map((ship) => (
        <div key={ship.id} className="col-md-6">
          <div className="card mb-3">
          <div className="card-img-container">
                <img
                  src={ship.image}
                  alt={ship.name}
                  className="card-img-top"
                  width="200"
                  height="600"
                />
              </div>
            <div className="card-body">
              <h5 className="card-title">{ship.name}</h5>
              <p className="card-text">Type: {ship.type}</p>
              <p className="card-text">Home Port: {ship.home_port}</p>
              <p className="card-text">Year Built: {ship.year_built || "N/A"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default ShipsList;
