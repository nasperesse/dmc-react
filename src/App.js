import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ReactDmc from './components/react-dmc/ReactDmc';
import QcmComp from './components/qcmcomp/QcmComp';
import ModifyUhr from './components/modifyuhr/ModifyUhr';
import ModifyQcm from './components/modifyqcm/ModifyQcm';

class App extends React.Component {



  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ReactDmc />
    );
  }
}

export default App;
