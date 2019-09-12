import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export interface ThemeInterface {
  colors: {
    primary: string;
    secondary: string;
    blue: string;
    offWhite: string;
    white: string;
  };
  fonts: {
    primary: string;
    italic: string;
  };
}

//orange: main: '#EAAA7B'
export const theme = {
  colors: {
    primary: '#000000',
    secondary: '#f73906',
    blue: '#0d00ff',
    offWhite: '#e5f2e6',
    white: '#ffffff'
  },
  fonts: {
    primary: `'Helvetica', 'Arial', 'sans-serif'`,
    italic: `monospace`
  }
};

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'monospace';
    font-weight: 300;
  }
`;

export default styled;
export { css, keyframes, ThemeProvider };
