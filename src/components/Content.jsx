import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.jsx';
import About from "./About.jsx";
import Works from "./Works.jsx";

const Content = () => {
    return(
        <div className='messages footer shadow-lg'>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/works' component={Works}/>
                <Route path='/about' component={About}/>
            </Switch>
        </div>
    )
};

export default Content;