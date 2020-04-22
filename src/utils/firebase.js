import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const Config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };


  firebase.initializeApp(Config);

  export const {auth} = firebase;
  export const storage = firebase.storage();
  export const databse = firebase.database();
  export const provider = new firebase.auth.FacebookAuthProvider();