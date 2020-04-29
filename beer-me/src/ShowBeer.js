import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class ShowBeer extends Component {
    constructor() {
        super();
        this.state = {
            beer: {}
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
                <div>
                    <div>
                        {/* <img src={beer.label} alt="" /> */}
                    </div>
                    <div>
                        <h1>{beer.name}</h1>
                        <p>{beer.style.description}</p>
                        {/* <p className="description">{beer.description}</p> */}
                    </div>

                </div>
            </>
            :
            <>
            </>;
    }
}

export default withRouter(ShowBeer);
