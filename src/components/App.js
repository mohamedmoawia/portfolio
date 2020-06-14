import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Contact" component={Contact} />
            </BrowserRouter>
        )
    }
}

export default App