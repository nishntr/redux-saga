import React from 'react'
import './App.css';

import { Provider } from 'react-redux';
import Cat from './components/cat';
import Header from './components/header';
import { Divider } from 'semantic-ui-react';
import { store } from './store';
import Pokemons from './components/pokemons';



function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header />
        <Cat />
        <Divider />
        <Pokemons />

      </React.Fragment>
    </Provider>
  );
}


export default App;
