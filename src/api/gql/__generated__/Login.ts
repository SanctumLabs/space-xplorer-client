/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login {
  __typename: "User";
  id: string;
  token: string | null;
}

export interface Login {
  /**
   * Logs in a user & returns their token
   */
  login: Login_login;
}

export interface LoginVariables {
  email: string;
}
