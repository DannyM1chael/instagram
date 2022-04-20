import { firebase } from '../lib/firebase';

export default async function doesUsernameExists(username) {
  const result = firebase.firestore().collection('users').where('username', '==', username).get();

  return result.docs.length > 0;
}
