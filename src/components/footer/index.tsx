/* eslint-disable import/extensions */
import React from 'react';
import MenuItem from '@components/menu/MenuItem';
import LogoutButton from '@containers/LogoutButton';
import { ReactComponent as HomeIcon } from '@assets/icons/home.svg';
import { ReactComponent as CartIcon } from '@assets/icons/cart.svg';
import { ReactComponent as ProfileIcon } from '@assets/icons/profile.svg';
import { Container, InnerContainer } from './footerStyles';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <MenuItem to="/">
          <HomeIcon />
          Home
        </MenuItem>
        <MenuItem to="/cart">
          <CartIcon />
          Cart
        </MenuItem>
        <MenuItem to="/profile">
          <ProfileIcon />
          Profile
        </MenuItem>
        <LogoutButton />
      </InnerContainer>
    </Container>
  );
}
