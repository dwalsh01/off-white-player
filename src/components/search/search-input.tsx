import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { SearchContext } from '../../context/searchContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderBottom: '1px solid black',
      color: '#000000',
      backgroundColor: fade(theme.palette.common.white, 1),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.95)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      fontWeight: 600,
      fontSize: 13,
      textTransform: 'uppercase',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200
      }
    }
  })
);

export const SearchInput: React.FC = () => {
  const classes = useStyles();
  return (
    <SearchContext.Consumer>
      {searchContext =>
        searchContext && (
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`"SEARCH"`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              value={searchContext.term}
              onChange={e => searchContext.setTerm(e.target.value)}
              onKeyDown={searchContext.handlePress}
              inputProps={{
                'aria-label': 'Search'
              }}
            />
          </div>
        )
      }
    </SearchContext.Consumer>
  );
};
