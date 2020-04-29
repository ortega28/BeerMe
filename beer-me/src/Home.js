import React from "react"
import { Link } from "react-router-dom"
import './Home.css'



const Home = ({ beers }) => {
    console.log({ beers })
    return (
        <div>
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