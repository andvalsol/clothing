import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDud9e6Gm2pbZGwBRuiWQtFyNPZhI-SxBE",
    authDomain: "crown-73243.firebaseapp.com",
    projectId: "crown-73243",
    storageBucket: "crown-73243.appspot.com",
    messagingSenderId: "608756363988",
    appId: "1:608756363988:web:2a644f2c3b8c90fcd14141",
    measurementId: "G-3VMPN070FN"
};

export const createUserProfileDocument = async (user, data) => {
    if (!user) return; // early exit

    // Query for the document and check if the user exists
    const userRef = firestore.doc(`users/${user.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName, email} = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            })
        } catch (e) {
            console.log('Error creating user: ', e.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionReference = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach((object) => {
        const newDocumentReference = collectionReference.doc();
        batch.set(newDocumentReference, object);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map((doc) => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;

        return accumulator;
    }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
