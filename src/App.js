import React from 'react';
import './App.css';
import Header from './Header/Header'
import Rate from './Rate/Rate';
import Footer from './Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About/About';
import Contacts from './Contacts/Contacts';

class App extends React.Component {
  render() {
    return (
    <div className="App">
        <Header />

        <div className="container">
            <main>
                
                    <Route exact
                        path="/"
                         component={Rate}
                    />
                    <Route exact
                        path="/about"
                        component={About}
                    />
                    <Route exact
                        path="/contacts"
                        component={Contacts}
                    />
                   
            </main>
            <div className="container" id="cookie_info">
                <div className="site-content">
                    <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br/>В
                        частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
                        местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  
    );
  }
}

export default App;
