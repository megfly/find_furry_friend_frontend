import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import PetContainer from '../containers/PetContainer'
import ShelterContainer from '../containers/ShelterContainer'

export default function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/api/v1/pets" component={PetContainer} />
            <Route exact path="/api/v1/shelters" component={ShelterContainer} />
        </Switch>
    )
}
