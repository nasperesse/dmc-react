import React from 'react';
import './ModifyQcm.css'
import QcmComp from './../qcmcomp/QcmComp';

class ModifyQcm extends React.Component {

    fragen = [];
    questions = [];
    constructor(props) {
        super(props);
        this.qcmPersonalisation = {
            bgColor: '#a26d71',
            next: 'Next',
            textColor: '#000000	'
        };

        const initialFragen = [{
            frage: "what is 3+4+5 (Test-Fragen)",
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
            frage: "what is the name of first opposant in cameroon (Test-Fragen)",
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
            frage: "what is the name of the President of Cameroun (Test-Fragen)",
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

            this.state = {properties: this.qcmPersonalisation, quizz: initialFragen}
    }

    saveQuestion(e) {
        let alternatives = [];
        let button = e.target
        let form = button.parentElement.parentElement;
        let div = form.parentElement.parentElement.parentElement;
        const question = form.frage;
        var responses = [];

        for(var i=1; i < 5; i++) {
            let antwort = "antwort"+i
            let isCorrect = "checkbox"+i
            const input = form.querySelector(`input[name = ${antwort}]`);
            const check = form.querySelector(`input[name = ${isCorrect}]`);
            const jsonText = input.value;
            const jsonIsCorrect = check.checked;

            let json = {
                text: jsonText,
                isCorrect: jsonIsCorrect
            }
            alternatives.push(json);
            responses.push(<div className="form-check" key={antwort} style={{marginBottom: 0.9 + 'rem'}}>
            <input type="text" class="form-control" name={antwort} value={jsonText} />
            <input class="mg form-check-input position-static" type="checkbox" name={isCorrect} checked={jsonIsCorrect}/> isCorrect
        </div>)
            input.value = ''
            check.checked = ''
        }

        const frageText = question.value
        const quizz = {
            frage: frageText,
            ergebnisse: alternatives
        }
        this.fragen.push(quizz)

        this.questions.push(
        <div class="card" key={this.fragen.length}>
            <div class="card-header" id={"heading"+this.fragen.length}>
                <h5 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse"+this.fragen.length} aria-expanded="true" aria-controls={"collapse"+this.fragen.length}>
                    {frageText}
                    </button>
                </h5>
            </div>
            <div id={"collapse"+this.fragen.length} class="collapse" aria-labelledby={"heading"+this.fragen.length} data-parent="#accordionExample">
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Frage</label>
                            <input type="text" class="form-control"  name="frage" value={frageText}/>
                        </div>
                        <div class="form-group">
                            <label>Anworten</label>
                            {responses}
                        </div>
                    </form>
                </div>
            </div>
        </div>);
        this.setState({questions: this.questions})
        this.setState({quizz: this.fragen})

        console.log(JSON.stringify(this.questions))
        question.value = '';
        div.querySelector("button[data-target='#collapseOne']").click()
    }

    handleChange(e) {
        const target = e.target;
        const attribute = target.name;
        var properties = {...this.state.properties};

        if(e.target.getAttribute('type') === 'checkbox') {
            properties[`${attribute}`] = target.checked;
        } else {
            properties[`${attribute}`] = target.value;
        }
        this.setState({properties})
    }

    render() {
        console.log("render  ### "+ this.state.questions)
        return (
            <div id="modifyqcm" className="container">
                <h4 className="text-center">Generate your own Quiz</h4>
                <div className="row">
                    <div className="col-md-6 settings">
                    <div class="r-50">
                         <h4 className="text-center"> Layout Einstellung </h4>
                         <div style={{marginTop: 0.8 + 'rem'}}>
                         Quiz: Hintergrundfarbe <input type="color" name="bgColor" onChange={this.handleChange.bind(this)} value={this.state.properties.bgColor}/>
                        </div>
                        <div style={{marginTop: 0.8 + 'rem'}}>
                        Bescriftung der Next-Button <input type="text" name="next" onChange={this.handleChange.bind(this)} value={this.state.properties.next}/>
                        </div>
                        <div style={{marginTop: 0.8 + 'rem'}}>
                         Content: Farbe <input type="color" name="textColor" onChange={this.handleChange.bind(this)} value={this.state.properties.textColor}/>
                        </div>
                    </div>
                    <div class="r-50">
                         <h4 className="text-center"> Fragen </h4>

<div class="accordion" id="accordionExample">
    <div>
        {this.state.questions}
    </div>
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Neu Frage +
        </button>
      </h5>
    </div>
    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      <form>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Frage</label>
                            <input type="text" class="form-control"  name="frage" placeholder="gibt die Frage ein"/>
                        </div>
                        <div class="form-group">
                            <label>Anworten (4)</label>
                            <div className="form-check" style={{marginBottom: 0.9 + 'rem'}}>
                                <input type="text" class="form-control" name="antwort1" placeholder="gibt eine Antwort ein" />
                                <input class="mg form-check-input position-static" type="checkbox" name="checkbox1" /> isCorrect
                            </div>
                            <div className="form-check" style={{marginBottom: 0.9 + 'rem'}}>
                                <input type="text" class="form-control" name="antwort2" placeholder="gibt eine Antwort ein" />
                                <input class="mg form-check-input position-static" type="checkbox" name="checkbox2" /> isCorrect
                            </div>
                            <div className="form-check" style={{marginBottom: 0.9 + 'rem'}}>
                                <input type="text" class="form-control" name="antwort3" placeholder="gibt eine Antwort ein" />
                                <input class="mg form-check-input position-static" type="checkbox" name="checkbox3" /> isCorrect
                            </div>
                            <div className="form-check" style={{marginBottom: 0.9 + 'rem'}}>
                                <input type="text" class="form-control" name="antwort4" placeholder="gibt eine Antwort ein" />
                                <input class="mg form-check-input position-static" name="checkbox4" type="checkbox" /> isCorrect
                            </div>
                            <button type="button" className="btn btn-warning" onClick={this.saveQuestion.bind(this)}>save</button>
                        </div>
                        </form>
      </div>
    </div>
  </div>
  </div>
                    </div>
                    <div style={{textAlign: 'right', margin: 0.5 +'rem'}}>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        generate your Quiz
                        </button>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Vorschau</h3>
                        <QcmComp textColor={this.state.properties.textColor} bgColor={this.state.properties.bgColor} next={this.state.properties.next} quiz={this.state.quizz} />
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Paste this Code in your Page</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {`<react-quizz-comp textColor="${this.state.properties.textColor}" bgColor="${this.state.properties.bgColor}" next="${this.state.properties.next}" quiz="${JSON.stringify(this.state.quizz)}"></react-quizz-comp>
          <script src="/dmc-react/build/static/js/test.js"></script>
          <script src="/index.js"></script>`}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            </div>
        );
    }
}

export default ModifyQcm;