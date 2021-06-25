import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from '../../../firebase.config';
import { useHistory, useLocation } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Header from "../../Home/Header/Header";
import { UserContext } from "../../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
        // ...
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <Header></Header>
      <Container className="mt-5 App">
        <h1>Login</h1>
        <Button variant="success" onClick={handleGoogleSignIn}>
          Continue With Google
        </Button>
      </Container>
    </div>
  );
};

export default Login;
