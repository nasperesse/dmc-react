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
            showSecond: true,
            whatshow: 'clock_and_date',
            dateFormat: 'MMM YYYY'

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
            console.log(attribute +" #### + "+ target.value)
            properties[`${attribute}`] = target.value;
        }

        this.setState({properties})
        console.log(this.state.properties.whatshow)
    }

    render() {
        console.log(this.state.properties.showSecond)
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
                                <select>
                                    <option style={{ fontFamily: 'Verdana' }} id="Verdana">Verdana </option>
                                    <option style={{ fontFamily: 'Georgia' }} id="Georgia">Georgia </option>
                                    <option style={{ fontFamily: 'Arial' }} id="Arial">Arial </option>
                                    <option style={{ fontFamily: 'Lemon' }} id="Lemon">Lemon </option>
                                    <option style={{ fontFamily: 'Times' }} id="Nosifer Caps">Times </option>
                                    <option style={{ fontFamily: 'Roman' }} id="Knewave">new Roman </option>
                                    <option style={{ fontFamily: 'fantasy' }} id="Fascinate">fantasy </option>
                                    <option style={{ fontFamily: 'Engagement' }} id="Engagement">Engagement </option>
                                    <option style={{ fontFamily: 'Fresca' }} id="Fresca">Fresca </option>
                                    <option style={{ fontFamily: 'cursive' }}>cursive</option>
                                    <option style={{ fontFamily: 'Geostar Fill' }} id="Geostar Fill">Geostar Fill </option>
                                    <option style={{ fontFamily: 'Cambria' }} id="Poller One">Cambria </option>
                                    <option style={{ fontFamily: 'serif' }} id="League Script">serif </option>
                                </select>
                                <select name="boderstyle" id="borderstyle">
                                    <option value="rounded" id="cl_rounded">Runde Ecken</option>
                                    <option value="box" id="cl_box">Box</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" style={{ margin: 'auto'}}>
                    <h3 class="text-center">Vorschau</h3>
                    {
                        this.state.properties &&
                        <UhrComp dateFormat={this.state.properties.dateFormat} bgColor={this.state.properties.bgColor} clockColor={this.state.properties.clockColor} dateColor={this.state.properties.dateColor} showSecond={this.state.properties.showSecond} whatshow={this.state.properties.whatshow}/>
                    }
                    </div>
                </div>
            </div>
        );
    }
}
export default ModifyUhr;