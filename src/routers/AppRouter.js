import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { Navbar } from '../components/iu/Navbar';
import { LideresScreen } from '../components/lideres/LideresScreen';
import { RdScreen } from '../components/rd/RdScreen';
import { RvpScreen } from '../components/rvp/RvpScreen';
import { RvpPlatinumScreen } from '../components/rvpplatinum/RvpPlatinumScreen';
import { SvpScreen } from '../components/svp/SvpScreen';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Navbar />
                <div className="container mt-3">
                <Switch>
                    <Route exact path="/svp" component={SvpScreen} />
                    <Route exact path="/rvpplatinum" component={RvpPlatinumScreen} />
                    <Route exact path="/rvp" component={RvpScreen} />
                    <Route exact path="/rd" component={RdScreen} />
                    <Route exact path="/lider/:liderId" component={LideresScreen} />
                    <Redirect to="/svp" />
                </Switch>
                </div>
            </>
        </Router>
    )
}
