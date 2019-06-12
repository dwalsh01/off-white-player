import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase/config';

const FirebaseContext = React.createContext<firebase.auth.Auth>(auth);

interface User {
  user: firebase.User | null;
}
export const UserContext = React.createContext<User>({ user: null });

export default FirebaseContext;
