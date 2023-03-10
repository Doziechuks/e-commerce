import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_storageBucket}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_messagingSenderId}`,
  appId: `${process.env.REACT_APP_FIREBASE_appId}`,
};

const app = initializeApp(config);
export const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const googleSignin = async () => {
try {
  await signInWithPopup(auth, provider)
} catch (error) {
  console.log(error.message);
}
};

export const handleSignOut = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error.message);
  }
}

export const manageUserAuthProfile = async (userAuth, otherProps) => {
  if(!userAuth) return;

  const addDocRef = doc(db, 'users', userAuth.uid);
  const getDocRef = await getDoc(addDocRef);

  if(!getDocRef.exists()){
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await setDoc(addDocRef, {displayName, email, createdDate, ...otherProps})
    } catch (error) {
      console.log(error.message);
    }
  }else{
    console.log('user already exist');
  }

  return addDocRef;
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
   return transformedCollections.reduce((accumulator, collection) => {
     accumulator[collection.title.toLowerCase()] = collection;
     return accumulator;
   }, {});
}; 