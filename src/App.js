import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import './App.css'
import AddTransaction from './components/AddTransaction';
import GlobalStateProvider from './context/GlobalState';

function App() {
  return (
    <GlobalStateProvider>
      <div className="container my-5 text-center">
        <div className="card card-body bg-dark shadow-lg" style={{minHeight: '85vh'}}>
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <Header />
              <Balance />
            </div>
            <div className="col-md-12 col-lg-8 mx-auto">
              <AddTransaction />
            </div>
          </div>
        </div>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
