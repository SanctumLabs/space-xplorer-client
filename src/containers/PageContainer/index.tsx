import React, { ReactNode } from 'react';
import { Bar, Container } from './styles';

interface Props {
  children?: ReactNode;
}

export default function Index(props: Props) {
  const { children } = props;
  return (
    <>
      <Bar />
      <Container>{children}</Container>
    </>
  );
}
