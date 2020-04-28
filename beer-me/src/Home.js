import React from "react"
//import from "react-router-dom"
import './Home.css'

// function Home() {
//     return (
//         <div>
//             {/* <img src="/Users/alexortega/GA/unit2/project2/beer-me/src/christin-hume-08tX2fsuSLg-unsplash.jpg" alt="Beer" /> */}
//             <img src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Beer" className="main-image" />
//             <p className="main-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//         </div>
//     )
// }

const Home = ({ beers }) => {
    console.log({ beers })
    return (
        <>
            <div>
                <img src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Beer" className="main-image" />
                <p className="main-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                <p>Name: {beers.name} ID: {beers.id}</p>
            </div>
        </>
    )
    // return (
    //     <>
    //         {beers.map(beer => {
    //             return (
    //                 <>
    //                     <div >
    //                         <p>{beer.name}</p>
    //                     </div>
    //                 </>
    //             )
    //         })}
    //     </>
    // )
}

export default Home