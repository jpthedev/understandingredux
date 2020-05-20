import React from 'react';
import CakeContainer from './components/cakecontainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import Users from './components/users'
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <IceCreamContainer />
        {/*
          <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        */}
        <Users />
      </div>
    </Provider>
  );
}

export default App;
