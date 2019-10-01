import React from 'react';
import styled from '../../theme';

const Thing = styled.div`
  width: 100%;
  padding: 15px 7.5px;
  padding-bottom: 40px;
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
`;

export const Footer = () => <Thing>Hello</Thing>;
