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

    console.log(data.data.data)
    console.log(data.data.data[0])
    //console.log(data.data.data[0].labels)

    this.setState({
      beers: data.data.data

    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Nav />
          <img src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Beer" className="main-image" />
          <p className="main-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </BrowserRouter>
        <Home beers={this.state.beers} />
        <Footer />
      </div>
    );
  }
}

export default App;
