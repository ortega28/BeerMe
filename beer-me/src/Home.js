import React from "react"
import { Link } from "react-router-dom"
import './Home.css'



const Home = ({ beers }) => {
    console.log({ beers })
    return (
        <div>
            <img src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Beer" className="main-image" />
            <p className="main-paragraph">This app has a list of beers for you to explore. Click on any of the images/links to view the descriptions of the beers!</p>
            {beers.map((beer) => (
                <>
                    <div key={beer.name}>
                        <Link to={`/beer/${beer.name}`}>
                            <p>Name: {beer.name} ID: {beer.id}</p>
                        </Link>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Home