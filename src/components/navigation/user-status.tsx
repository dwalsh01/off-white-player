import React from 'react';
import { UserContext } from '../../context/firebase-config';
import { LoginForm } from '../forms/login-form';
import firebase from 'firebase';
import { StyledUser } from '../../styles/StyledUser';
import { StyledButton } from '../../styles/SButton';

interface Props {
  user: firebase.User | null;
}
export const UserAuth: React.FC<Props> = ({ user }) => (
  <UserContext.Provider
    value={{
      user
    }}
  >
    <React.Fragment>
      <UserContext.Consumer>
        {user => {
          if (user.user) {
            return (
              <React.Fragment>
                <StyledUser>{user.user.email}</StyledUser>
                <StyledButton onClick={() => firebase.auth().signOut()}>{`"LOGOUT"`}</StyledButton>
              </React.Fragment>
            );
          }
          return <LoginForm />;
        }}
      </UserContext.Consumer>
    </React.Fragment>
  </UserContext.Provider>
);
