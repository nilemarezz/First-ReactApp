import React, { Component } from 'react';
import "./App.css"
import {  BrowserRouter ,  Router , Switch} from "react-router-dom";
import Home from "./container/Home"


class App extends Component {
   renderRouter(){
     return(
       <Switch>
         <Router path="/" Component={Home}></Router>
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
