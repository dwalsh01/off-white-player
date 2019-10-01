import React from 'react';
import { ThemeProvider, theme, GlobalStyle } from '../theme';
import { useAuth } from '../hooks/useAuth';
import { Footer } from './footer/footer';
import { Main } from '../styles/Main';
import NavBar from './navigation/app-bar';
import { SearchContext } from '../context/searchContext';
import AppRouter from '../routes';
import { UserContext } from '../context/firebase-config';

const App: React.FC = () => {
  const { state } = useAuth();
  const [term, setTerm] = React.useState('');
  const [searchVal, setSearchVal] = React.useState('tash sultana');
  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setTerm(e.currentTarget.value);
      setSearchVal(e.currentTarget.value);
    } else {
      setTerm(e.currentTarget.value);
    }
  };
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
          <UserContext.Provider value={{ user: state.user }}>
            <AppRouter searchVal={searchVal} />
          </UserContext.Provider>
        </Main>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
