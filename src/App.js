import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore(()=>{return [{id:0, name:test}]})

const App = () => {
  return (

    <Provider store={store}>
        <div>App
        
        sdfgdsf
        
        
        </div>
    </Provider>
  )
}

export default App;
