import React from 'react';
import './ModifyQcm.css'
import QcmComp from './../qcmcomp/QcmComp';

class ModifyQcm extends React.Component {

    properties = [];
    constructor(props) {
        super(props);
        this.properties = [{
            frage: "what is 3+4+5",
            ergebnisse:
                [{
                    text: 12,
                    isCorrect: true
                },
                {
                    text: 20
                },
                {
                    text: 10
                },
                {
                    text: 14
                }]
        },
        {
            frage: "what is the name of first opposant in cameroon",
            ergebnisse:
                [{
                    text: "Maurice Kamto",
                    isCorrect: true
                },
                {
                    text: "Fruh Ndi"
                },
                {
                    text: "Jean de Dieu Momo"
                },
                {
                    text: "Messangua nyamdi"
                }]
        },
        {
            frage: "what is the name of the President of Cameroun",
            ergebnisse:
                [{
                    text: "Paul Biya",
                    isCorrect: true
                },
                {
                    text: "Alassane Watara"
                },
                {
                    text: "John Fruh Ndie"
                },
                {
                    text: "John Ngute"
                }]
        }
        ];
    }
    render() {
        return (
            <div id="modifyqcm" className="container">
                <h4 className="text-center">Generate your own Quiz</h4>
                <div className="row">
                    <div className="col-md-6 settings">
                        <h6> Enter your Questions </h6>

                    </div>
                    <div className="col-md-6">
                        <QcmComp quiz={this.properties} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ModifyQcm;