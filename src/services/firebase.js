import { firebase } from '../lib/firebase';

export default async function doesUsernameExists(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.length > 0;
}

// get user from firebase by userId
export async function getUserByUserId(userId) {
  const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();
  const user = result.docs.map((item) => ({ ...item.data(), docId: item.id }));
  return user;
}

export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection('users').limit(10).get();
  return result.docs
    .map((item) => ({ ...item.data(), docId: item.id }))
    .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
}
