import React from 'react'
import { Link } from "react-router-dom"
import "./Beer.css"

function Beer(props) {
    const beer = props.beer
    return (
        <>
            <div key={beer.name} >
                <Link to={`/beer/${beer.name}`} >
                    {beer.labels ? <img src={beer.labels.medium} alt="" className="beer-image" /> : <h1 className="beer-emoji">🍺</h1>}
                    <p className="beer-name">Name: {beer.name} </p>
                </Link>
            </div>
        </>
    )
}

export default Beer
