/* eslint-disable import/extensions */
import styled from '@emotion/styled';
import { css } from 'emotion';
import { colors, unit } from '@styles';
import space from '@assets/images/space.jpg';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { ReactComponent as Curve } from '@assets/curve.svg';
import { ReactComponent as Rocket } from '@assets/rocket.svg';
import { size } from 'polished';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  paddingBottom: unit * 6,
  color: 'white',
  backgroundColor: colors.primary,
  backgroundImage: `url(${space})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const svgClassName = css({
  display: 'block',
  fill: 'currentColor',
});

export const Header = styled('header')(svgClassName, {
  width: '100%',
  marginBottom: unit * 5,
  padding: unit * 2.5,
  position: 'relative',
});

export const StyledLogo = styled(Logo)(size(56), {
  display: 'block',
  margin: '0 auto',
  position: 'relative',
});

export const StyledCurve = styled(Curve)(size('100%'), {
  fill: colors.primary,
  position: 'absolute',
  top: 0,
  left: 0,
});

export const Heading = styled('h1')({
  margin: `${unit * 3}px 0 ${unit * 6}px`,
});

export const StyledRocket = styled(Rocket)(svgClassName, {
  width: 250,
});

export const StyledForm = styled('form')({
  width: '100%',
  maxWidth: 406,
  padding: unit * 3.5,
  borderRadius: 3,
  boxShadow: '6px 6px 1px rgba(0, 0, 0, 0.25)',
  color: colors.text,
  backgroundColor: 'white',
});

export const StyledInput = styled('input')({
  width: '100%',
  marginBottom: unit * 2,
  padding: `${unit * 1.25}px ${unit * 2.5}px`,
  border: `1px solid ${colors.grey}`,
  fontSize: 16,
  outline: 'none',
  ':focus': {
    borderColor: colors.primary,
  },
});
