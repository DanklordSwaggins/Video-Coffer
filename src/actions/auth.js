import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

export const startLogin = () =>{
  return() =>{
    return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLogout =() => {
  return ()=>{
    return firebase.auth().signOut();
  }
}