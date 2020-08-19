/* eslint-disable import/extensions */
import styled from '@emotion/styled';
import { unit } from '@styles';
import { cardClassName } from '../Launch.styles';

// eslint-disable-next-line import/prefer-default-export
export const Card = styled('div')(cardClassName, {
  height: 365,
  marginBottom: unit * 4,
});
