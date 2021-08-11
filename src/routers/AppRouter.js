import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Navbar } from '../components/iu/Navbar';
import { LideresScreen } from '../components/lideres/LideresScreen';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={LideresScreen}/>
                </Switch>
            </>
        </Router>
    )
}
