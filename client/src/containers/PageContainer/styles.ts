import styled from '@emotion/styled';
import { unit, colors } from '@styles';

export const Bar = styled('div')({
  flexShrink: 0,
  height: 12,
  backgroundColor: colors.primary,
});

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  maxWidth: 600,
  margin: '0 auto',
  padding: unit * 3,
  paddingBottom: unit * 5,
});
