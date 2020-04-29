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

        <Nav />
        <img src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Beer" className="main-image" />
        <p className="main-paragraph">This app has a list of beers for you to explore. Click on any of the images/links to view the descriptions of the beers!</p>

        <Switch>
          <Route path="/Home">
            <Home beers={this.state.beers} />
          </Route>
          <Route path="/beer/:name">
            <ShowBeer beers={this.state.beers} />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
