import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Demo from './Demo';

const Home = () => {

    return(
        <React.Fragment>
            <Router>
                <Link to="/"> Home </Link>
                <Link to="/Demo"> Demo </Link>
                <Switch>
                    <Route path="/demo" component={Demo}/>
                </Switch>
            </Router>
            Hello Home!
        </React.Fragment>
    )

}

export default Home;