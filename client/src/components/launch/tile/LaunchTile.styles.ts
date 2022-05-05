/* eslint-disable import/extensions */
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { unit } from '@styles';
import { cardClassName } from '../Launch.styles';

const padding = unit * 2;

// eslint-disable-next-line import/prefer-default-export
export const StyledLink = styled(Link)(cardClassName, {
  display: 'block',
  height: 193,
  marginTop: padding,
  textDecoration: 'none',
  ':not(:last-child)': {
    marginBottom: padding * 2,
  },
});
