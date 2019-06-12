import styled from 'styled-components';
import Button, { ButtonProps } from '@material-ui/core/Button';

export const StyledButton = styled(Button)`
  && {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    border-radius: 0;
  }
  &:hover {
    background: ${props => props.theme.colors.secondary}!important;
    color: ${props => props.theme.colors.white}!important;
  }
` as React.ComponentType<ButtonProps>;
