import React from 'react';
import './Header.css';
import Nav from '../components/Nav/Nav';



class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render() {
    return (

      <header>
        <div className="top-bar animate-dropdown"></div>
        <div className="main-header">
            <div className="container">
                <h1 className="site-title">React Lite Level</h1>

            </div>
        </div>
        <div className="header-nav">
            <div className="container">
               <Nav />
            </div>
        </div>
    </header>
  
    );
  }
}

export default Header;
