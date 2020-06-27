import React from 'react';
import Header from './../shared/header/Header';
import ShowComp from './../showcomp/ShowComp';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ModifyUhr from '../modifyuhr/ModifyUhr';
import ModifyQcm from '../modifyqcm/ModifyQcm';


class ReactDmc extends React.Component {


    render() {

        return (
            <Router>
                <Header />
                    <div className="container">
                        <Route path="/digitaluhr" component={ModifyUhr} />
                        <Route path="/quiz" component={ModifyQcm} />
                        <Route path="/" exact component={ShowComp} />
                    </div>
            </Router>
        );
    }
}

export default ReactDmc;