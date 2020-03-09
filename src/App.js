import React from 'react';
import './App.css';
import Navbar from './Components/Major/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Error404 from './Pages/Error404/Error404';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Error404} />
            <Route path='/login' exact component={Login} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
