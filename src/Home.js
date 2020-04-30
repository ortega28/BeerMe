import React from "react"
import { Link } from "react-router-dom"
import './Home.css'
import Beer from './Beer.js'


const Home = ({ beers }) => {
    console.log({ beers })
    return (
        <div className="home-beers">
            {beers.map((beer) => (
                <Beer beer={beer} />
            ))}
        </div>
    )
}

export default Home