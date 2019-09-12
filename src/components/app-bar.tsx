import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { UserAuth } from '../context/user-status';
import { useAuth } from '../hooks/useAuth';
import { StyledBar } from '../styles/StyledBar';
import { SearchInput } from './search-input';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Helvetica',
      fontSize: 17,
      lineHeight: 1.6,
      fontWeight: 600,
      letterSpacing: '0.0075em',
      padding: 0,
      margin: 0
    }
  })
);

const NavBar: React.FC = () => {
  const classes = useStyles();
  const { state } = useAuth();
  return (
    <div className={classes.root}>
      <StyledBar position="static" elevation={0}>
        <Toolbar style={{ paddingLeft: 0 }}>
          <SearchInput />
          <h6 className={classes.title}>OFF-WHITE&trade;</h6>
          <UserAuth user={state.user} />
        </Toolbar>
      </StyledBar>
    </div>
  );
};

export default NavBar;
