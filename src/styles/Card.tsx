import styled from '../theme';
import { Card } from '@material-ui/core';
import { CardProps } from '@material-ui/core/Card';

export const SCard = styled(Card)`
  && {
    font-family: ${props => props.theme.fonts.italic};
    /* box-shadow: none; */
    margin: 20px;
    color: ${props => props.theme.colors.primary};
    .card-title {
      font-family: ${props => props.theme.fonts.italic};
      font-size: 16px;
      font-weight: bold;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ul {
      text-align: left;
      margin: 0;
      padding: 0;
      li {
        text-transform: capitalize;
      }
    }
  }
` as React.ComponentType<CardProps>;
