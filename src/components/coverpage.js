import React, { Component } from 'react';

// import { Link } from "gatsby";

class CoverPage extends Component {
    render() {
        return (
            <div className="cover-page">
                <div className="cover-text">
                    <h3 className="animated bounceInDown delay-1s"><b>We're Duct Tape Startup.</b></h3>
                    <h4 className="animated fadeInUp delay-2s">We help busy entrepreneurs build affordable web-based applications quickly so that they can focus on running their business.</h4>
                    <button className="cover-button animated heartBeat delay-4s"><a href="/blogposts/">Read More</a></button>
                </div>
            </div>
        )
    }
}

export default CoverPage;