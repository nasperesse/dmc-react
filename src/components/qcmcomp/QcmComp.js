import React from 'react'
import './QcmComp.css'
import Style from 'style-it'
class QcmComp extends React.Component {

    questions = [];
    response = [];
    output = [];
    index;
    showresult = false;
    constructor(props) {
        super(props);

        this.index = 0;
        this.output.push(<h1 className="textC">Result of the Quiz</h1>);
        this.state = { position: 0, props: props, next: 'Next' };
    }

    componentWillMount() {
        if (this.props.quiz) {
            let temp = this.props.quiz;
            if('string' === typeof temp) {
                temp = JSON.parse(temp);
            }
            temp.map((q) => {this.questions.push(q); })
        }
    }

    async componentWillReceiveProps( props ) {
        this.props = props;
        this.setState({props: props});
        this.questions = [];
        if (props.quiz) {
            let temp = props.quiz;
            if('string' === typeof temp) {
                temp = JSON.parse(temp);
            }
            temp.map((q) => {this.questions.push(q); })
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
                    <h4 className="textC">Ergebnis</h4>
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
            <Style>
                {`
                #qcmcomp {
                width: 500px;
                }
                form {
                text-align: justify;
                padding-left: 2rem;
                }
                li {
                list-style: none;
                }
                div.count {
                text-align: right;
                }
                .textC {
                    color: ${this.state.props.textColor};
                }
                div.button {
                text-align: right;
                }
                div.slide {
                margin-bottom: 1rem;
                }
                div#responce {
                padding-left: 2rem;
                padding-top: 2rem;
                }
                div#percent {
                text-align: right;
                }
                span.correct {
                font-weight: bold;
                color: lightgreen;
                }
                span.notcorrect {
                font-weight: bold;
                color: red;
                }

                label {
                margin-left: 0.5rem;
                }

                button {
                margin-right: 0.5rem;
                margin-bottom: 0.5rem;
                }
            `}
            <div id="qcmcomp" style={{backgroundColor: this.state.props.bgColor}}>
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
                            <span className="textC"> {this.state.position + 1} / {this.questions.length} </span>
                        </div>
                        <form>
                            <h4 className="textC">{this.questions[this.state.position].frage}</h4>
                            {this.questions[this.state.position].ergebnisse.map(ergebnis => (
                                <div>
                                    <input className="textC" type="radio" id={ergebnis.text} name="answer" value={ergebnis.text} />
                                    <label className="textC">{ergebnis.text}</label>
                                </div>
                            )
                            )}
                            <br />
                            <div class="button">
                            <button type="button" className="btn btn-success" onClick={this.next.bind(this)}>{!this.state.props.next && this.state.next} {this.state.props.next && this.state.props.next}</button>
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
            </Style>
        );
    }
}
export default QcmComp;