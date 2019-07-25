import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/layout/header/header';
import Main from './components/layout/main/main';
import ProjectDetails from './components/projects/projectDetails';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/project/:id' component={ProjectDetails}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;