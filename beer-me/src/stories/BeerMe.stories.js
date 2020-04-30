import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import "../Header.css"
import "../App.css"
import "../Home.css"
import "../Beer.css"
import "../ShowBeer.css"
import "../Footer.css"
import "../Header.js"
import '../Home.js'
export default {
  title: 'BeerMe',
  component: Welcome,
};

export const Header = () => <>
  <header className="header-home">
    <h1>BeerMe</h1>
  </header></>

Header.story = {
  name: 'Header',
};

export const App = () => <>
  <img src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Beer" className="main-image" />
  <p className="main-paragraph">This app has a list of beers for you to explore. Click on any of the images/links to view the descriptions of the beers!</p>
</>

App.story = {
  name: 'App',
};


// export const Home = () => <Home />


// Home.story = {
//   name: 'Home',
// };




export const Footer = () =>
  <>
    <footer className="footer">
      <h2>Brewerydb.com</h2>
    </footer>
  </>

Footer.story = {
  name: 'Footer',
};