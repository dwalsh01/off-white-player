import React from 'react';
import { ThemeProvider, theme, GlobalStyle } from '../theme';
import { useAuth } from '../hooks/useAuth';
import { Footer } from './footer';
import { Main } from '../styles/Main';
import NavBar from './app-bar';
import { YouTubeSearchResults } from 'youtube-search';
import { Results } from './results';
import { searchYT } from '../firebase/yt/opts';
import { SearchContext } from '../context/searchContext';

const App: React.FC = () => {
  const { state, addToPlaylist } = useAuth();
  const [term, setTerm] = React.useState('');
  const [searchVal, setSearchVal] = React.useState('tash sultana');
  const [results, setResults] = React.useState<[] | YouTubeSearchResults[]>([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setTerm(e.currentTarget.value);
      setSearchVal(e.currentTarget.value);
    } else {
      setTerm(e.currentTarget.value);
    }
  };
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

  if (state.initializing) {
    return <h1>Loading...</h1>;
  }

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <SearchContext.Provider value={{ term, setTerm, handlePress }}>
          <NavBar />
        </SearchContext.Provider>
        <Main>
          {isSearching && <h1>Searching...</h1>}
          {state.user ? state.user.email : 'no user'}
          {results.length > 0 ? <Results results={results} /> : <h1>USE SEARCH ABOVE</h1>}
        </Main>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
