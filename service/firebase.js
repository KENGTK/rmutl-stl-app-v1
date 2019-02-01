import { AsyncStorage } from 'react-native';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCU_vtVYrKVPUb5o7AE54cCBzkiJCkMd04',
  authDomain: 'student-loan-login.firebaseapp.com',
  databaseURL: 'https://student-loan-login.firebaseio.com',
  projectId: 'student-loan-login',
  storageBucket: 'student-loan-login.appspot.com',
  messagingSenderId: '605268630638',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database();

export const signInEnP = (email, password) => {
  return new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(firebaseUser => {
        if (firebaseUser) {
          resolve(firebaseUser);
          AsyncStorage.setItem('userData', firebaseUser);
        }
      })
      .catch(error => {
        reject(error.message);
      });
  });
};

export const signUpEnP = (email, password) => {
  return new Promise((resolve, reject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(firebaseUser => {
        if (firebaseUser) {
          resolve(firebaseUser);
          AsyncStorage.setItem('userData', firebaseUser);
        }
      })
      .catch(error => {
        reject(error.message);
      });
  });
};

export const autoSignin = () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        resolve(firebaseUser);
        AsyncStorage.setItem('userData', firebaseUser);
      } else reject('no data');
    });
  });
};

export const signOut = () => {
  return new Promise((resolve, reject) => {
    auth
      .signOut()
      .then(() => {
        resolve('Sign Out');
        AsyncStorage.removeItem('userData');
      })
      .catch(error => {
        reject(error.message);
      });
  });
};
