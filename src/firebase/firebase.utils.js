import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCs4Ovk5G5EEDCwXPLGPjF9_tEyq24X1mU",
    authDomain: "cwrn-db-d7bac.firebaseapp.com",
    projectId: "cwrn-db-d7bac",
    storageBucket: "cwrn-db-d7bac.appspot.com",
    messagingSenderId: "562406306598",
    appId: "1:562406306598:web:aff95030bd6fb20f6b87e7",
    measurementId: "G-FZ5HWJVXEK"
  }


  export const createUserProfileDocument = async (userAth, additionalData) => {
      if (!userAth) return ;

      const userRef = firestore.doc(`users/${userAth.uid}`);
      const snapshot = await userRef.get();

      if (!snapshot.exists) {
        const  { displayName , email } = userAth;
        const createdAt = new Date()
        try {
          await userRef.set({ displayName,email,createdAt,...additionalData})
        }catch(error) {
          console.log('error create user',error.message)
        }
      }
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;