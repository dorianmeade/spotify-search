import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App'
import { Redirect } from '../components/Redirect'
import Dashboard  from '../components/Dashboard'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact={true}/>
                <Route path='/redirect' component={Redirect}/>
                <Route path='/dashboard' component={Dashboard}/>

            </Switch>
        </BrowserRouter>
    )
}
export default AppRouter;