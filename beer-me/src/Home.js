import React from "react"
//import from "react-router-dom"
import './Home.css'



const Home = ({ beers }) => {
    console.log({ beers })
    return (
        <div>
            {beers.map((beer) => (
                <>
                    <div>
                        <p>Name: {beer.name} ID: {beer.id}</p>

                    </div>
                </>
            ))}
        </div>
    )
}

export default Home