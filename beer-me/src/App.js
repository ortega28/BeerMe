import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
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

  async componentDidMount() {
    console.log("componentDidMount");

    // const data = await axios("https://sandbox-api.brewerydb.com/v2/beers/?key=9b376004b2bce193f7d31cbdd0fbcdfa")

    //const data = await axios("https://restcountries.eu/rest/v2/all")

    //const data = await axios("https://sandbox-api.brewerydb.com/v2/beers")

    const data = await axios("http://corsanywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=9b376004b2bce193f7d31cbdd0fbcdfa")

    console.log(data.data.data[0].id)

    this.setState({
      beers: data.data.data[0]
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
        <Home beers={this.state.beers} />
        <Footer />
      </div>
    );
  }
}

export default App;
