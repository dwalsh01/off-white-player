import React from 'react';
import { Results } from './results';
import { YouTubeSearchResults } from 'youtube-search';
import { searchYT } from '../../firebase/yt/opts';

export interface SearchArea {
  searchVal: string;
}
export const Search: React.FC<SearchArea> = ({ searchVal }) => {
  const [results, setResults] = React.useState<[] | YouTubeSearchResults[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);
  React.useEffect(() => {
    if (searchVal.length !== 0) {
      setIsSearching(true);
      searchYT({ term: searchVal, maxResults: 10 }).then(resp => {
        setResults(resp);
      });
    }
    if (searchVal.length === 0) {
      setResults([]);
    }
    setIsSearching(false);
  }, [searchVal]);
  if (isSearching) {
    return <h1>Loading!!</h1>;
  }

  return (
    <React.Fragment>
      <Results results={results} />
    </React.Fragment>
  );
};
