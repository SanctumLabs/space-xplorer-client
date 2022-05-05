import styled from '@emotion/styled';
import { menuItemClassName } from '@components/menu/MenuItem';

// eslint-disable-next-line import/prefer-default-export
export const StyledButton = styled('button')(menuItemClassName, {
  background: 'none',
  border: 'none',
  padding: 0,
});
