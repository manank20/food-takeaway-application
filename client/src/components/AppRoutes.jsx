import React from "react";
import Home from "./Home/Home";
import Order from "./Order/Order";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Authentication/Login"
import Register from "./Authentication/Register"
import Location from "./Payment/Location"

const ConditionalRoute = ({ children, condition, redirect, ...rest }) => (
    <Route {...rest} render={() => (condition ? children : <Redirect to={redirect} />)} />
);

function AppRoutes(props) {
    return (
        <Switch>
            <Route exact path="/">
                {props.loggedIn ? <Home authenticated={props.authenticated} applyAccessToken={props.applyAccessToken} accessToken={props.accessToken}/> : <Redirect to="/authenticate" />}
            </Route>

            <ConditionalRoute exact path="/authenticate" condition={!props.loggedIn} redirect='/'>
                <Login loggedIn={props.loggedIn} authenticated={props.authenticated}  applyAccessToken = {props.applyAccessToken} accessToken={props.accessToken}/>
            </ConditionalRoute>
            <Route exact path={`/:name/order`}>
                {props.loggedIn ? <Order authenticated={props.authenticated} accessToken={props.accessToken} applyAccessToken = {props.applyAccessToken} /> : <Redirect to="/authenticate" />}
            </Route>
            <ConditionalRoute exact path="/authenticate/register" condition={!props.registerNow} redirect='/'>
                <Register authenticated={props.authenticated} registerNow={props.resgisterNow} registered={props.registered} />
            </ConditionalRoute>
            <Route exact path='/:id/order/location'>
                <Location />
            </Route>
        </Switch>

    );
}

export default AppRoutes;
