import React from 'react';
import { useMutation } from '@apollo/client';
import Loading from '@components/loading';
import { createRecord } from "@localStorage";
import { isLoggedInVar } from '@cache';
import {LOGIN_USER} from "@schemas";
import * as LoginTypes from './__generated__/login';
import LoginForm from "./LoginForm";

export default function Login() {
    const [login, { loading, error }] = useMutation<
        LoginTypes.Login,
        LoginTypes.LoginVariables
        >(
        LOGIN_USER,
        {
            onCompleted({ login }) {
                createRecord('token', login.token as string);
                createRecord('userId', login.id as string);
                isLoggedInVar(true);
            }
        }
    );

    if (loading) return <Loading />;
    if (error) return <p>An error occurred</p>;

    return <LoginForm login={login} />;
}