import React, { Component } from 'react';
import logo from './logo.svg';
import {Route, NavLink, Switch} from 'react-router-dom';
import './App.css';
import ShowAllOutfits from './pages/ShowAllOutfits'
import ShowAllTops from './pages/ShowAllTops'

class App extends Component{



  render(){
    return(
      <div className="App">
      <header className="App-header">
        <nav>
          <NavLink exact to='/outfits'>Outfits List</NavLink>
          <NavLink exact to='/tops'>Tops List</NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path='/outfits'
          render={()=>(
            <ShowAllOutfits />
          )}/>
          <Route exact path='/tops'
          render={()=>(
            <ShowAllTops />
          )}/>
        </Switch>
      </main>
      </div>
    )
  }
   

}

export default App;
