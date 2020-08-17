import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Login from "./login";

export default function Pages() {
    return (
        <>
            <Helmet title="SpaceXplorer" />
            <BrowserRouter>
                <Switch>
                    <Route path="/" />
                    <Route path="/launch/:launchId" />
                    <Route path="/cart" />
                    <Route path="/profile" />
                    <Route path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}
