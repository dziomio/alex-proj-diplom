import React from 'react';
import './Header.css';
import Nav from '../components/Nav/Nav';



class Header extends React.Component {

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
                <nav>
                    <ul className="header__menu">
                        <Nav
                            link={'/'}
                            title={'Главная'}
                        />
                        <Nav
                            link={'/about'}
                            title={'Пункты обмена'}
                        />
                        <Nav
                            link={'/contacts'}
                            title={'Контакты'}
                        />                      
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  
    );
  }
}

export default Header;
