import React from 'react';
import { YouTubeSearchResults } from 'youtube-search';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { SCard } from '../styles/Card';
// import { CardActions } from '@material-ui/core';
import { StyledButton } from '../styles/SButton';
import { useAuth } from '../hooks/useAuth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 20
    },
    media: {
      height: 0,
      paddingTop: '56.25%'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    }
  })
);
interface Props {
  results: (YouTubeSearchResults)[];
}

export const Results: React.FC<Props> = ({ results }) => {
  const classes = useStyles();
  const { addToPlaylist } = useAuth();
  const checkTitle = (title: string) => {
    let res = title.substring(title.lastIndexOf('&') + 1, title.lastIndexOf(';'));
    if (res) {
      return title.replace(/&.*;/, '');
    }
    return title;
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {results.map((item: YouTubeSearchResults) => {
          return (
            <Grid item xs={6} sm={3} key={item.id}>
              <SCard className={classes.paper}>
                <div className="card-title">{checkTitle(item.title)}</div>
                <CardMedia
                  className={classes.media}
                  image={item.thumbnails.medium ? item.thumbnails.medium.url : ''}
                  title={item.description}
                />
                <StyledButton
                  style={{
                    marginTop: 10,
                    background: '#f3df45',
                    border: '2px dashed #cd2c3b',
                    fontSize: 12
                  }}
                  onClick={() => addToPlaylist(item, 'Sample 1')}
                >
                  Add To Playlist
                </StyledButton>
              </SCard>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
