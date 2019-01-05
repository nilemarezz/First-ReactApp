import React, { Component } from 'react';
import "./App.css"
import Header from './component/Header';
import Footer from './component/Footer';
import Monitor from './component/Monitor/Monitor'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { products : "" };

  }

  componentDidMount(){
    fetch("http://localhost:3001/products",{method:"GET"})
    .then(res => res.json())
    .then(res => {this.setState({products:res})})
  }

  



  render() {
    return (
      <div className="App">
        <Header name="Try React" />
        <Monitor products={this.state.products} />
        <Footer name='Matas Paosriwong' email='nilenon@gmail.com' />
      </div>
    );
  }
}

export default App;
