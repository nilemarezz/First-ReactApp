import React, { Component } from 'react';
import "./App.css"
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./container/Home"


class App extends Component {
   
  renderRouter(){
     return(
       <Switch>
         <Route path="/" component={Home}></Route>
       </Switch>
     )
   }
  

  
  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
