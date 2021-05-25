import React, { Component } from 'react';
import { Link} from "react-router-dom";

class Services extends Component {
    render() {
        return (
            <div className="Services">
                <div className="Services-heading Services-photo">
                    <h1>404</h1>
                </div>

                <div className="Services-contant">
                    <h3>Look like you're lost</h3>
                    <p>the page you are looking for not avaible!</p>
                    <Link to="/" className="Services-button">Go to Home</Link>
                </div>
            </div>
        )
    }
}

export default Services
