import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ShowBeer.css"

class ShowBeer extends Component {
    constructor() {
        super();
        this.state = {
            beer: null
        };
    }

    componentDidMount() {
        // Object destructuring
        const { match, beers } = this.props;
        const beer = beers.find(beer => beer.name === match.params.name);

        this.setState({
            beer: beer
        });
    }

    render() {
        const { beer } = this.state;
        return beer ?
            <>
                <div className="show-beer">
                    <div>
                        {beer.labels && <img src={beer.labels.medium} alt="" />}
                    </div>

                    <div >
                        <h1>{beer.name}</h1>
                        <p>{beer.style.description}</p>
                    </div>

                </div>
            </>
            :
            <>
            </>;
    }
}

export default withRouter(ShowBeer);
