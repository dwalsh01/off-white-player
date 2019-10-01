import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PlaylistView } from '../components/playlists/playlist-view';
import { Search } from '../components/search';
import { SearchArea } from '../components/search';
import { AuthRoute } from './auth-route';
const Test = () => <div>logged in </div>;

const AppRouter: React.FC<SearchArea> = ({ searchVal }) => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Search searchVal={searchVal} />} />
      <Route path="/playlists" component={PlaylistView} />
      <AuthRoute path="/test" component={Test} />
    </Switch>
  </Router>
);

export default AppRouter;
