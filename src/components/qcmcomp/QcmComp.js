import React from 'react'
import './QcmComp.css'
class QcmComp extends React.Component {

    questions = [];
    response = [];
    output = [];
    index;
    showresult = false;
    constructor() {
        super();
        this.index = 0;
        this.output.push(<h1>Result of the Quiz</h1>);
        this.state = { position: 0 };
    }

    componentWillMount() {
        if (this.props.quiz) {
            this.props.quiz.map((q) => { console.log(q); this.questions.push(q); })
        }
    }

    next() {
        const form = document.querySelector("div#qcmcomp form");
        let end;
        let decision;
        const radios = form.answer;
        radios.forEach(radio => { if (radio.checked) { end = radio.value; radio.checked = false; } })
        console.log("_____ " + this.state.position)
        this.questions[this.state.position].ergebnisse.forEach(ergeb => {
            if (ergeb.text == end) {
                decision = ergeb.isCorrect ? true : false;
            }
        })
        this.response.push(decision);
        this.output.push(
            <div class="slide" style={{ backgroundColor: decision ? 'lightgreen' : 'red' }}>
                <div class="question">Question {this.index + 1}: {this.questions[this.state.position].frage} </div>
                <div class="answers">your Answer: {end} </div>
            </div>
        );
        console.log(this.index + " ++++++ " + this.questions.length + " ### " + decision)
        if (this.index < this.questions.length - 1) {
            this.index++
            this.setState({ position: this.index, showresult: false })
        } else {
            let correct = 0;
            let not = 0;
            this.response.forEach(x => {
                if (x) {
                    correct = correct + 1;
                } else {
                    not = not + 1;
                }
            });
            let correctPercent = (100 * correct) / this.response.length;
            let notCorrectPercent = (100 * not) / this.response.length;

            this.setState({ showresult: true })
            this.output.push(
                <div id="percent">
                    <h4>Percent</h4>
                    <span className="correct">Correct: {correctPercent} %</span>
                    <br />
                    <span className="notcorrect">Not Correct: {notCorrectPercent} %</span>
                </div>
            );
        }
    }

    render() {
        console.log(" ----- " + this.state.showresult)

        return (
            <div id="qcmcomp">
                {
                    this.questions.length === 0 &&
                    <div id="qcm">
                        <h3 className="text-center">Quiz Component</h3>
                        <h5 className="text-center">there is no data to render a Quiz</h5>
                    </div>
                }
                {
                    !this.state.showresult && this.questions.length > 0 &&
                    <div id="qcm">
                        <div class="count">
                            <span> {this.state.position + 1} / {this.questions.length} </span>
                        </div>
                        <form>
                            <h4>{this.questions[this.state.position].frage}</h4>
                            {this.questions[this.state.position].ergebnisse.map(ergebnis => (
                                <div>
                                    <input type="radio" id={ergebnis.text} name="answer" value={ergebnis.text} />
                                    <label>{ergebnis.text}</label>
                                </div>
                            )
                            )}
                            <br />
                            <div class="button">
                                <button type="button" className="btn btn-success" onClick={this.next.bind(this)}>Next</button>
                            </div>
                        </form>
                    </div>
                }
                {
                    this.state.showresult &&
                    <div id="responce">
                        {this.output}
                    </div>
                }
            </div>

        );
    }
}
export default QcmComp;