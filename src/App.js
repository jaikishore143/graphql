// import Counter from "./components/Counter";

// function App() {
//   return (
//     <>
//     <Counter/>
//     </>
//   );
// }

// export default App;
import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { fetchCountries } from "./redux/slices/productSlice";
const FILMS_QUERY = gql`
  {
    launchesPast(limit: 100) {
      id
      mission_name
    }
  }
`;

export default function App() {
  const country=useSelector((state)=>state.countries)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchCountries())
  },[])
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
 
  return (
    <div>
      <h1>SpaceX Launches</h1>
      <h1>hi</h1>
      <ul>
        {data.launchesPast.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
      {console.log(country)}
    </div>
  );
}