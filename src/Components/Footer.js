import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!-------------------- 
                    ---- Start Footer ----
                    ---------------------> */}
                    <footer className="footer-distributed">

            <div className="footer-left">
                <h3>Rudex <span>Shop</span></h3>

                <p className="footer-links">
                    <Link to="/">Home</Link>
                    |
                    <Link to="/Shop">Shop</Link>
                    |
                    <Link to="/Services">Services</Link>
                    |
                    <Link to="/Contact">Contact</Link>
                </p>
                <p className="footer-Copyright">Copyright &copy; 2021 <span>Design By: Peter Soliman</span> .you</p>
            </div>

            <div className="footer-center">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p>Egypt - Cairo</p>
                </div>

                <div>
                    <i class="fa fa-phone"></i>
                    <p>+2 0122 264 1669</p>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="mailto:petersoliman150@gmail.com">petersoliman150@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the Peter</span>
                    Experienced web design with a clear history of working in the internet industry, skilled in engineering and web design, Professional in art and design.</p>
                <div class="footer-icons">
                    <Link to="/"><i class="fab fa-facebook-square"></i></Link>
                    <Link to="/"><i class="fab fa-twitter"></i></Link>
                    <Link to="/"><i class="fab fa-instagram"></i></Link>
                    <Link to="/"><i class="fab fa-linkedin"></i></Link>
                    <Link to="/"><i class="fab fa-youtube"></i></Link>
                    <Link to="/"><i class="fab fa-google"></i></Link>
                    <Link to="/"><i class="fab fa-yahoo"></i></Link>
                </div>
            </div>
            </footer>
            {/* <!-- End Footer --> */}
            </div>
        )
    }
}

export default Footer
