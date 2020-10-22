import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import LandingPage from './components/Pages/LandingPage'
import CollectionPage from './components/Pages/CollectionPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const collections = [
  {id: 1, title: "Publications from Johnny McGorey's Pub", thumbnail: "", stories: []},
  {id: 2,title: "For Those Who Wander", thumbnail: "", stories: []},
  {id: 3,title: "The Unfamiliar and All That Comes With It", thumbnail: "", stories: []},
  {id: 4,title: "2 Pages or Less, for The Lazy or Short Winded", thumbnail: "", stories: []},
  {id: 5,title: "who else has been dead for hours?", thumbnail: "", stories: []}
]


function App() {
  return (
    <div className="App">
      <Switch>
        {/* Landing Page */}
        <Route exact path='/' render={(routerProps) => 
        <LandingPage collections={collections} />} />
        {/* Individual Collection Page */}
        <Route exact path='/c/:id' component={CollectionPage} />
     </Switch>
    </div>
  );
}

export default App;
