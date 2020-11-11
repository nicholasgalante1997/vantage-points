import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
// import Collections from './CollectionFile'
import LandingPage from './components/Pages/LandingPage'
import CollectionPage from './components/Pages/CollectionPage'
import Collections from './data/collections'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* Landing Page */}
        <Route exact path='/' render={(routerProps) => 
        <LandingPage collections={Collections} />} />
        {/* Individual Collection Page */}
        <Route exact path='/c/:id' component={CollectionPage} />
     </Switch>
    </div>
  );
}

export default App;
