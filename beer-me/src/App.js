import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import axios from "axios"
import './App.css';
import Header from './Header.js'
import Nav from './Nav.js'
import Home from './Home.js'
import Footer from './Footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  // async componentDidMount() {
  //   console.log("componentDidMount");
  //   const data = await axios("https://sandbox-api.brewerydb.com/v2/beers/?key=9b376004b2bce193f7d31cbdd0fbcdfa")
  //   console.log(data)
  //   // console.log(data.data.results[0].name)
  //   this.setState({
  //     beer: data
  //   })
  // }


  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
