import styled from 'styled-components';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';

export const StyledBar = styled(AppBar)`
  && {
    background: ${props => props.theme.colors.blue};
  }
  .MuiToolbar-regular {
    min-height: 20px;
  }
` as React.ComponentType<AppBarProps>;
