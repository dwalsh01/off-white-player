import React from 'react';
import firebase from 'firebase';
import { db } from '../firebase/config';
import search from 'youtube-search';

export const useAuth = () => {
  const [state, setState] = React.useState(() => {
    const user = firebase.auth().currentUser;
    return {
      initializing: !user,
      user
    };
  });
  async function getPlaylists(uid: string, playlist?: string) {
    const ref = playlist
      ? db.ref(`users/${uid}/playlists/${playlist}`)
      : db.ref(`users/${uid}/playlists`);
    return await ref.once('value');
  }
  function addToPlaylist(song: search.YouTubeSearchResults, playlist: string) {
    if (state.user) {
      const ref = db.ref(`users/${state.user.uid}/playlists`);
      getPlaylists(state.user.uid)
        .then(pl => pl.val())
        .then(vals => {
          if (!vals) {
            ref.set({ [playlist]: [song] });
          } else {
            let add = true;
            if (vals[playlist]) {
              for (let val of vals[playlist]) {
                if (val.id === song.id) {
                  add = false;
                  break;
                }
              }
            }
            if (add) {
              ref.set({ [playlist]: [...vals[playlist], song] });
            }
          }
        });
    }
  }
  function onChange(user: any) {
    setState({ initializing: false, user });
  }

  React.useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return { state, addToPlaylist, getPlaylists };
};
