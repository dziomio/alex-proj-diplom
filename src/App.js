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
            <h3> Курс валют на 30 ноября 2019</h3>
            <Rate/>
            <h3> Калькулятор обмена</h3>
            <div className="block">
                <div>Я хочу</div>
                <div><label><input type="radio" name="radio" defaultValue="0"/> купить</label></div>
                <div><label><input type="radio" name="radio" defaultValue="1"/> продать</label></div>
                <div>
                    <input type="number" defaultValue="150"/>
                    <select name="" id="">
                        <option defaultValue="USD">USD</option>
                        <option defaultValue="RUB">RUB</option>
                        <option defaultValue="EUR">EUR</option>
                    </select>
                </div>
                <div>
                    <h4>Результат</h4>
                    <ul className="calc-res">
                        <li>EUR 150</li>
                        <li>EUR 150</li>
                        <li>EUR 150</li>
                        <li>EUR 150</li>
                    </ul>
                </div>
            </div>
        </main>
    </div>

    <div className="container" id="cookie_info">
        <div className="site-content">
            <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br/>В
                частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
                местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
        </div>
    </div>


   
    </div>
  
    );
  }
}

export default App;
