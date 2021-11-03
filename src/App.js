
import './App.css';
import React, {Component} from "react";

import MainPage from './containers/MainPage';
import AddItemPage from './containers/AddItemPage';
import PageNotFound from './containers/PageNotFound';
import {Route, Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/add' component={AddItemPage}/>
            <Route path='/' component={PageNotFound}/>
          </Switch>
        </div>
    );
  }
}

export default App;
