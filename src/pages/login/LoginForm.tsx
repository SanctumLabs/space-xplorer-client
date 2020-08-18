import React, { Component, ChangeEvent } from 'react';
import * as LoginTypes from '@gqlOps/Login';
import Button from '@components/button';
import {
  Container,
  Header,
  StyledCurve,
  StyledLogo,
  StyledRocket,
  Heading,
  StyledForm,
  StyledInput,
} from './loginstyles';

interface Props {
  handleLogin: (a: { variables: LoginTypes.LoginVariables }) => void;
}

interface State {
  email: string;
}

export default class LoginForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const email = (event.target as HTMLInputElement).value;
    this.setState({ email });
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/ban-ts-ignore
  // @ts-ignore
  onSubmit = (event) => {
    const { email } = this.state;
    const { handleLogin } = this.props;

    event.preventDefault();
    handleLogin({ variables: { email } });
  };

  render() {
    return (
      <Container>
        <Header>
          <StyledCurve />
          <StyledLogo />
        </Header>
        <StyledRocket />
        <Heading>Space Explorer</Heading>
        <StyledForm onSubmit={this.onSubmit}>
          <StyledInput
            required
            type="email"
            name="email"
            placeholder="Email"
            data-testid="login-input"
            onChange={this.onChange}
          />
          <Button type="submit">Log in</Button>
        </StyledForm>
      </Container>
    );
  }
}
