import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios"
import './App.css';
import Header from './Header.js'
import Nav from './Nav.js'
import Home from './Home.js'
import Footer from './Footer'
import ShowBeer from './ShowBeer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  async componentDidMount() {
    console.log("componentDidMount");

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
          <Switch>
            <Nav />


            <Route path="/beer/:name">
              <ShowBeer beers={this.state.beers} />
            </Route>
          </Switch>
        </BrowserRouter>
        <Home beers={this.state.beers} />
        <Footer />
      </div>
    );
  }
}

export default App;
