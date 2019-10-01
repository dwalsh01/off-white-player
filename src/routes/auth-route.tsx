import React from 'react';
import { UserContext } from '../context/firebase-config';
import { RouteComponentProps, Route, RouteProps, Redirect } from 'react-router-dom';

export const AuthRoute: React.FC<RouteProps> = ({ component, ...rest }: RouteProps) => {
  const { user } = React.useContext(UserContext);
  const renderFunc = (routeProps: RouteComponentProps<{}>) => {
    if (!user) {
      return <Redirect to="/" />;
    }

    const Component = component as any;

    return <Component {...routeProps} />;
  };
  return <Route {...rest} render={renderFunc} />;
};
