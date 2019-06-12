// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
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
}
