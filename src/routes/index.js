import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { HomePage, ActorDetails } from '../pages';

export default function Index() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/actor/:id" component={ActorDetails} />
        </Switch>
    )
}
