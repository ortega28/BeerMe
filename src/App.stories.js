import React from 'react'
import { storiesof, storiesOf } from '@storybook/react'
import App from './App'

storiesOf('App', module)
    .add('HomeImage', () =>
        <img src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Beer" className="main-image" />
    )

    .add('HomeDescription', () =>
        <p className="main-paragraph">This app has a list of beers for you to explore. Click on any of the images/links to view the descriptions of the beers!</p>
    )

// .add('LIbrary', () => )

// export default {
//     title: 'BeerMe',
//     component: Welcome,
// };

// export const Header = () =>
//     <>
//         <header className="header-home">
//             <h1>BeerMe</h1>
//         </header>
//     </>

// Header.story = {
//     name: 'Header',
// };