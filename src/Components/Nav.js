import React from 'react';
/* react-router-dom */
import { Link} from "react-router-dom";
/* react-icons */
import {useSelector} from "react-redux";
import { BsFillBagFill } from "react-icons/bs";

// Import FirebaseAuth and firebase.
import firebase from 'firebase';
/* End Import Libraries */

const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)

    return (
        <div className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/"><img src="/images/Logo.png" alt="logo"/></Link>
                    </div>
                    <div className="nav-link">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Shop">Shop</Link></li>
                            <li><Link to="/Services">Services</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>

                    <h4>
                        Welcome {firebase.auth().currentUser.displayName}
                    </h4>

                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                                <BsFillBagFill className="cart-icon" />
                                <span>{totalQuantities}</span>
                            </div>
                        </Link>
                    </div>

                    <button className="logout-btn" onClick={() => firebase.auth().signOut()}>
                    <span>Sign Out</span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Nav
