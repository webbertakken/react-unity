import configure from '../core/configure-firebase';

export const firebase = configure();
export const database = firebase.firestore();
export const auth = firebase.auth();
export const functions = firebase.functions();
export const storage = firebase.storage();
export const storageReference = storage.ref();
