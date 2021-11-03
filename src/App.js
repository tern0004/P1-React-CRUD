
import './App.css';
import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import MainPage from './containers/MainPage';
import AddItemPage from './containers/AddItemPage';
import PageNotFound from './containers/PageNotFound';


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
