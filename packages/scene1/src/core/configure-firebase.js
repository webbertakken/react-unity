import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/storage';
import config from '../config/firebase';

const configureFirebase = () => {
  // Initialise firebase config instance
  firebase.initializeApp(config);

  // Explicitly list module calls for transparency
  firebase.firestore();
  firebase.auth();
  firebase.functions();
  firebase.storage();

  return firebase;
};

export default configureFirebase;
