import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { UserAuth } from '../context/user-auth';
import { useAuth } from '../hooks/useAuth';
import { StyledBar } from '../styles/StyledBar';
import { SearchInput } from './search-input';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      fontSize: 27,
      fontWeight: 600
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
          <Typography variant="h6" className={classes.title}>
            OFF-WHITE&trade;
          </Typography>
          <UserAuth user={state.user} />
        </Toolbar>
      </StyledBar>
    </div>
  );
};

export default NavBar;
