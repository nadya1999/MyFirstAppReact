import React, {Component, PureComponent} from 'react';
import Menu from './Menu.jsx';
import Content from "./Content.jsx";
//import {render} from 'react-dom';

class App extends Component {
    render() {
        return(
            <div className='Container'>
                <div className='header shadow-lg'>
                    <Menu />
                </div>
                    <Content />
                <div className="header shadow-lg">still working</div>
            </div>
        )
    }
}

export default App;