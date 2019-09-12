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
    const res = await ref.once('value');
    return res.val();
  }
  // addToPlaylist adds youtube search result to either an existing playlist
  // or creates a new playlist and adds said sound to it
  function addToPlaylist(song: search.YouTubeSearchResults, playlist: string) {
    let success = false;
    if (state.user) {
      const ref = db.ref(`users/${state.user.uid}/playlists`);
      getPlaylists(state.user.uid).then(pl => {
        console.log(pl);
        if (pl === null) {
          ref.set({ [playlist]: [song] });
          success = true;
        } else {
          let add = true;
          if (pl[playlist]) {
            for (let val of pl[playlist]) {
              if (val.id === song.id) {
                add = false;
                break;
              }
            }
          }
          if (add) {
            console.log(pl[playlist]);
            ref.set({ [playlist]: [...pl[playlist], song] });
            success = true;
          }
        }
      });
    }
    return success;
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
