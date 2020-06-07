import React from 'react';
import './App.css';
import Header from './Header/Header'
import Rate from './Rate/Rate';

class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render() {
    return (
    <div className="App">
        <Header />

        <div className="container">
            <main>
    
                <Rate/>
            
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
    </div>
  
    );
  }
}

export default App;
