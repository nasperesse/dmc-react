import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import ReactDmc from './components/react-dmc/ReactDmc';

class App extends React.Component {



  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <ReactDmc />
      </div>
    );
  }
}

export default App;
