import Firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {};
const firebase = Firebase.initializeApp(config);
// const { FieldValue } = firebase.firestore;
//
// export { firebase, FieldValue };
export { firebase };
