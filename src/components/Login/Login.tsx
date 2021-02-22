import React from 'react';
import firebase from "firebase/app";
import { useAuth, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { Jumbotron, Button, Container } from 'react-bootstrap';

export const Login = () => {

    const auth = useAuth();

    const sign_in = async () => {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    };

		const sign_out = async () => {
        await auth.signOut();
    }

		return (
                <AuthCheck fallback={
                    <Button id="sign-in-button" onClick={sign_in}>
                        Sign In With Google
                    </Button>
                }>
                    <Button onClick={sign_out}>Sign Out</Button>
                </AuthCheck>
    )

}