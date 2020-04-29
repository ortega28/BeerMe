// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";


// class ShowBeer extends Component {
//     constructor() {
//         super();
//         this.state = {
//             beer: {}
//         };
//     }

//     componentDidMount() {
//         // Object destructuring
//         const { match, beers } = this.props;
//         //const beer = beers.find(beer => beer.name === match.params.name);

//         this.setState({
//             beer: beer
//         });
//     }

//     render() {
//         const { beer } = this.state;
//         return beer ?
//             <>
//                 <div>
//                     {/* <div>
//                         <img src={bird.image} className="bird-image" alt="" />
//                     </div>
//                     <div className="div-text">
//                         <h1 className="bird-name">{bird.name}</h1>
//                         <h5 className="bird-genus">({bird.genus})</h5>
//                         <h3 className="status">Conservation status</h3>
//                         <p className="description">{bird.conservationStatus}</p>
//                         <button className="button">Read More</button>
//                     </div> */}

//                 </div>
//             </>
//             :
//             <>
//             </>;
//     }
// }

// export default withRouter(ShowBeer);
