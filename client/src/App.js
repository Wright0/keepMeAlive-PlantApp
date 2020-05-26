import React from 'react';
import './App.css';
import KeepMeAliveContainer from './containers/KeepMeAliveContainer.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlantInfo from './components/keepMeAliveComponents/PlantInfo.js';
import GameContainer from './containers/GameContainer.js';
import Error404 from './Error404.js';
import SiteHeader from './SiteHeader.js';

function App() {
  return (
    <Router>
        <SiteHeader/>

          <Switch>
            <Route exact path="/" render={() => 
            <KeepMeAliveContainer/>
            }/>

            <Route exact path="/plant/:plantId/game" render={() => 
            <GameContainer />
            }/>

            <Route exact path="/plant/:plantId" render={ () => 
              <PlantInfo />
            }/>

          <Route render={() => <Error404/>} />

          </Switch>
        </Router>
  );
}

export default App;
