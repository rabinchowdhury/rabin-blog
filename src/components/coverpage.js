import React, { Component } from 'react';

// import { Link } from "gatsby";

class CoverPage extends Component {
    render() {
        return (
            <div className="cover-page">
                <div className="cover-text">
                    <h3>Hello, I'm Rabin.</h3>
                    <h5>I help busy business owners build affordable web-based applications quickly so that they can focus on running their business.</h5>
                    <button className="cover-button"><a href="/blogposts/">Read More</a></button>
                </div>
            </div>
        )
    }
}

export default CoverPage;