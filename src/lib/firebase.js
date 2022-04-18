import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCKFIaAOyGEGEXnW6FnSxdn_MB74VNV74w',
  authDomain: 'instagram-3c9fa.firebaseapp.com',
  projectId: 'instagram-3c9fa',
  storageBucket: 'instagram-3c9fa.appspot.com',
  messagingSenderId: '813792662183',
  appId: '1:813792662183:web:0331bdabc1f3221e07c182'
};
const firebase = Firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;

export { firebase, FieldValue };
