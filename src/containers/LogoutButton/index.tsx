/* eslint-disable import/extensions */
import React from 'react';
import { useApolloClient } from '@apollo/client';
import { isLoggedInVar } from '@cache';
import { ReactComponent as ExitIcon } from '@assets/icons/exit.svg';
import { StyledButton } from './logoutButton.styles';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const LogoutButton = () => {
  const client = useApolloClient();
  return (
    <StyledButton
      data-testid="logout-button"
      onClick={() => {
        // Since we're logging out, remove all traces of the current user
        // from the cache. First use `cache.evict()` to remove the stored
        // `me` reference that was added to the cache by the `GET_MY_TRIPS`
        // query in `profile.tsx`. Then trigger garbage collection using
        // `cache.gc()` to remove the cached `User` object that is no longer
        // reachable.
        client.cache.evict({ fieldName: 'me' });
        client.cache.gc();

        // Remove user details from localStorage.
        localStorage.clear();

        // Let other parts of the application that are relying on logged in
        // state know we're now logged out.
        isLoggedInVar(false);
      }}
    >
      <ExitIcon />
      Logout
    </StyledButton>
  );
};

export default LogoutButton;
