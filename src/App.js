import React from 'react';
import logo from './logo.svg';
import Intl from 'intl'
import './App.css';
import 'intl/locale-data/jsonp/de-DE'
import uhrComp from './components/uhrComp';


class App extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      clock: new Date().getTime(),
      date: new Date().getDay()
    };

  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervaId);
  }

  tick() {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat

    const options = {weekday: "long", month: "long", day: "numeric", year: "numeric"};
    const options1 = {hour: "numeric", minute: "numeric", second: "numeric", hour12: false};
    const date = new Date();
    const formatClock = new Intl.DateTimeFormat("de-DE", options1).format(date);
    const formatDate = new Intl.DateTimeFormat("de-DE", options).format(date)
    this.setState({
      clock: formatClock,
      date: formatDate
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The Time ist {this.state.clock}.
        </p>
          <p>
            The Time ist {this.state.date}.
        </p>
        <div>
            <uhrComp />
        </div>
         
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
