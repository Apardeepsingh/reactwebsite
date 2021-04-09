import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Nav from './Nav';
import Service from './Service';
import './index.css';   
import Footer from './Footer';

const App = () => {
    return (
        <>
            <Nav/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/service' component={Service} />
                <Route exact path='/contact' component={Contact} />
                <Redirect to='/' />
            </Switch>
            <Footer/>
        </>
    )
}

export default App;