import firebase from "firebase";
import { firebaseConfig } from "./firebase";

firebase.initializeApp(firebaseConfig);

export const db = firebase?.firestore();
