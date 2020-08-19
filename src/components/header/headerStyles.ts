import styled from '@emotion/styled';
import { size } from 'polished';
import { unit, colors } from '@styles';

export const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: unit * 4.5,
});

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const Image = styled('img')(size(134), (props: { round: boolean }) => ({
  marginRight: unit * 2.5,
  borderRadius: props.round ? '50%' : '0%',
}));

export const Subheading = styled('h5')({
  marginTop: unit / 2,
  color: colors.textSecondary,
});
