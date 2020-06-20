import React from 'react';
import './ModifyUhr.css'
import UhrComp from './../uhrcomp/UhrComp';
import moment from 'moment';
import 'moment/locale/de'
class ModifyUhr extends React.Component {

    uhrPersonalisation;
    constructor(props) {
        super(props);
        this.uhrPersonalisation = {
            bgColor: '#a26849',
            clockColor: '#2a56ec',
            dateColor: '#aeec70',
            dateSize: '13',
            showSecond: true,
            whatshow: 'clock_and_date',
            dateFormat: 'MMM YYYY',
            fontFamilies: 'none'

        };
        this.state = { properties: this.uhrPersonalisation };
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
        return (
            <div id="modifyuhr" className="container">
                <h5 className="text-center">Generate your digital Uhr</h5>

                <div className="row">
                    <div className="col-md-9 settings">
                        <div class="r-50">
                            <h3 class="text-center">Deine eigene Uhr generieren</h3>
                            <div>
                                <h4 class="optiontitle">Grundeinstellung</h4>
                                <div class="optiondiv">
                                    <input type="radio" value="clock_and_date" name="whatshow" onChange={this.handleChange.bind(this)} checked={this.state.properties.whatshow === "clock_and_date"}/> Datum und Uhrzeit
                                    <input type="radio" value="only_date" name="whatshow" onChange={this.handleChange.bind(this)} checked={this.state.properties.whatshow === "only_date"}/> Nur Datum
                                    <input type="radio" value="only_clock" name="whatshow" onChange={this.handleChange.bind(this)} checked={this.state.properties.whatshow === "only_clock"}/> Nur Uhrzeit
                                </div>
                            </div>
                            <div>
                                <h4 class="optiontitle">Uhr: Einstellung</h4>
                                <div class="optiondiv">
                                    <input type="checkbox" name="showSecond" onChange={this.handleChange.bind(this)} checked={this.state.properties.showSecond}/>Sekunden
                                </div>
                            </div>
                            <div id="date_options">
                                <h3 class="optiontitle">Datum: Format</h3>
                                <div class="optiondiv">
                                    <select id="dateFormat" name="dateFormat" onChange={this.handleChange.bind(this)} checked={this.state.properties.dateFormat}>
        <option value="DoMM.YYYY">{moment().format('DoMM.YYYY')}</option>
                                        <option value="DoMM.YY" selected={this.state.properties.dateFormat==="DoMM.YY"}>{moment().format('DoMM.YY')}</option>
                                        <option value="Do MMMM YYYY" selected={this.state.properties.dateFormat==="Do MMMM YYYY"}>{moment().format('Do MMMM YYYY')}</option>
                                        <option value="DoMMM YYYY" selected={this.state.properties.dateFormat==="DoMMM YYYY"}>{moment().format('DoMMM YYYY')}</option>
                                        <option value="MMMM YYYY" selected={this.state.properties.dateFormat==="MMMM YYYY"}>{moment().format('MMMM YYYY')}</option>
                                        <option value="MMM YYYY" selected={this.state.properties.dateFormat==="MMM YYYY"}>{moment().format('MMM YYYY')}</option>
                                        <option value="DoMMM" selected={this.state.properties.dateFormat==="DoMMM"}>{moment().format('DoMMM')}</option>
                                        <option value="Do MMMM" selected={this.state.properties.dateFormat==="Do MMMM"}>{moment().format('Do MMMM')}</option>
                                        <option value="DoMM." selected={this.state.properties.dateFormat==="DoMM."}>{moment().format('DoMM.')}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                            <h3 for="formControlRange">Datum: Font-Size</h3>
                            <input type="range" min="13" max="30" step="0.1" class="form-control-range" name="dateSize" onChange={this.handleChange.bind(this)} value={this.state.properties.dateSize}/>
                        </div>
                            <div>
                                <h3 class="optiontitle">Schriftfarbe</h3>
                                <div class="optiondiv">
                                    <input type="color" name="clockColor" onChange={this.handleChange.bind(this)} value={this.state.properties.clockColor}/> Uhr-Farbe
                                    <input style={{marginLeft: .8 + 'rem'}} type="color" name="dateColor" onChange={this.handleChange.bind(this)} value={this.state.properties.dateColor}/> Datum-Farbe
                                </div>
                            </div>
                            <div>
                                <h3 class="optiontitle">Hintergrundfarbe</h3>
                                <div class="optiondiv">
                                    <input type="color" name="bgColor" onChange={this.handleChange.bind(this)} value={this.state.properties.bgColor}/>
                                </div>
                            </div>
                        </div>



                        <div>
                            <h3 class="optiontitle">Schriftart</h3>
                            <div class="optiondiv">
                                <select name="fontFamilies" onChange={this.handleChange.bind(this)} checked={this.state.properties.fontFamilies}>
                                    <option value='Monospace' selected={this.state.properties.fontFamilies==="monospace"}>monospace </option>
                                    <option value='sans-serif' selected={this.state.properties.fontFamilies==="sans-serif"}>sans-serif </option>
                                    <option value='none' selected={this.state.properties.fontFamilies==="none"}>none </option>
                                    <option value='fantasy' selected={this.state.properties.fontFamilies==="fantasy"}>fantasy </option>
                                    <option value='cursive' selected={this.state.properties.fontFamilies==="cursive"}>cursive</option>
                                    <option value='serif' selected={this.state.properties.fontFamilies==="serif"}>serif </option>
                                </select>
                            </div>
                        </div>
                        <div style={{textAlign: 'right', margin: 0.5 +'rem'}}>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        generate your Clock
                        </button>

                        </div>
                    </div>
                    <div className="col-md-3" style={{ margin: 'auto'}}>
                    <h3 class="text-center">Vorschau</h3>
                    {
                        this.state.properties &&
                        <UhrComp fontFamilies={this.state.properties.fontFamilies} dateSize={this.state.properties.dateSize} dateFormat={this.state.properties.dateFormat} bgColor={this.state.properties.bgColor} clockColor={this.state.properties.clockColor} dateColor={this.state.properties.dateColor} showSecond={this.state.properties.showSecond} whatshow={this.state.properties.whatshow}/>
                    }
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
        {`<react-uhr-comp fontFamilies="${this.state.properties.fontFamilies}" dateSize="${this.state.properties.dateSize}" dateFormat="${this.state.properties.dateFormat}" bgColor="${this.state.properties.bgColor}" clockColor="${this.state.properties.clockColor}" dateColor="${this.state.properties.dateColor}" showSecond="${this.state.properties.showSecond}" whatshow="${this.state.properties.whatshow}"></react-uhr-comp>
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
export default ModifyUhr;