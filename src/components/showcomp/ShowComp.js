import React from 'react';
import { Link } from 'react-router-dom';
import uhrbild from '../../digitaluhr.png'
import quizbild from '../../quiz.png'


class ShowComp extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    modifyComp() {
    }
    render() {

        return (
            <div id="showcomp" className="">
                <div className="container">
                    <h3 style={{marginBottom: 2 + 'rem'}}className="text-center">Available Components</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <div class="card" style={{width: 18 + 'rem' }}>
                                <img className="card-img-top" src={uhrbild} alt=""/>
                                <div class="card-body">
                                    <h5 class="card-title">Digital Uhr</h5>
                                    <p class="card-text">personalize your digitale Uhr and generate it</p>
                                    <Link className="btn btn-primary" to="digitaluhr">Generate your digitale Uhr</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card" style={{width: 18 + 'rem' }}>
                                <img class="card-img-top" src={quizbild} alt="" />
                                    <div class="card-body">
                                        <h5 class="card-title">Quiz Component</h5>
                                        <p class="card-text">Create an Quizz an export it to your own Page</p>
                                        <Link className="btn btn-primary" to="quiz">Generate your Quiz</Link>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
        );
    }
}

export default ShowComp;