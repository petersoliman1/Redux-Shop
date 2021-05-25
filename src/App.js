/* react-router-dom */
import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";


// Import Css.
import './App.css';

// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
/* End Import Libraries */


/* Start My Components */
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
/* End My Components */



// Configure Firebase.
firebase.initializeApp ({
  apiKey: 'AIzaSyBc391hkuhfxUDcA-KltJHfuybkgPDm9OM',
  authDomain: 'e-commerce-c2ad4.firebaseapp.com',
})

class App extends Component {

  
    // The component's Local state.
    state = { isSignedIn: false };  // Local signed-in state.

    // Configure FirebaseUI.
    uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google, HitHub, Facebook, and Email as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccess: () => false
      }
    }

    // Listen to the Firebase Auth state and set the local state.
    componentDidMount = () => {
      firebase.auth().onAuthStateChanged( user => {
        this.setState({isSignedIn: !!user})
        console.log("user", user)
      });
    }


  render() {
    return (

    <Router>
      <div>
      {this.state.isSignedIn ? (  

        <Provider store={store}>

        <Nav />
        


        <Route path="/" exact component={Home} />
        <Route path="/Shop" exact component={Shop} />
        <Route path="/Services" exact component={Services} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Cart" exact component={Cart} />
        <Route path="/Details/:id" exact component={Details} />


        <Footer />
        </Provider>


          



      ) : (
        <StyledFirebaseAuth
        uiConfig={this.uiConfig} 
        firebaseAuth={firebase.auth()}
        />
      )}
      </div>
    </Router>
    


    
    )
  }
}

export default App