import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAqffP0_6nHnq1xbvdLFbsyZUCbA2UpGJk",
    authDomain: "crwn-db-f2b0c.firebaseapp.com",
    projectId: "crwn-db-f2b0c",
    storageBucket: "crwn-db-f2b0c.appspot.com",
    messagingSenderId: "191908674731",
    appId: "1:191908674731:web:7b8c218fb36d1ea3ec8bee",
    measurementId: "G-CMY701MJ6R"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;