// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Provider } from 'react-redux';
// import { Store } from './redux/Store';
// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const client = new ApolloClient({
//   uri: "https://spacex-production.up.railway.app/",
//   cache: new InMemoryCache()
// });
// root.render(
//   <React.StrictMode>
//       <ApolloProvider client={client}>
//     <Provider store={Store}>
   
//     <App/>
   
//     </Provider>
//     </ApolloProvider>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import store from './store';
import CountryList from './CountryList';
import { client } from './apollo'; // Import your Apollo Client instance

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <CountryList />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
