import React from 'react';
import { YouTubeSearchResults } from 'youtube-search';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled from '../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
);
interface Props {
  results: (YouTubeSearchResults)[];
}

const Item = styled.div`
  position: relative;
  min-height: 400px;
  text-align: center;
  margin: 20px;
  border: 2px solid ${props => props.theme.colors.primary};
  img {
    width: 100%;
    padding-bottom: 10px;
  }
  .header {
    min-height: 100px;
    width: 100%;
    font-style: italic;
    font-size: 24px;
    background: #f3df45;
    border: 1px solid #cd2c3b;
    bottom: 0;
    position: absolute;
  }
`;
export const Results: React.FC<Props> = ({ results }) => {
  const classes = useStyles();
  const checkTitle = (title: string) => {
    let res = title.substring(title.lastIndexOf('&') + 1, title.lastIndexOf(';'));
    if (res) {
      return title.replace(/&.*;/, '');
    }
    return title;
  };
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {results.map((item: YouTubeSearchResults) => {
            return (
              <Grid item md={3} sm={6} xs={12} key={item.id}>
                <Item>
                  <img
                    src={item.thumbnails.medium ? item.thumbnails.medium.url : ''}
                    alt={item.description}
                  />
                  <div className="header">{checkTitle(item.title)}</div>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <ul />
    </div>
  );
};
