import React from 'react';
import  Styles from './UhrComp.css'
import Style from 'style-it';
import moment from 'moment'
import 'moment/locale/de'


export default class UhrComp extends React.Component {
    showSecond = true;
    onlyClock = true;
    onlyDate = true;

    constructor(props) {
        super(props);
        this.state = {props: this.props}
    }

    componentDidMount() {
        this.test();
    }
    test() {
        if(this.props.whatshow === 'only_clock') {
            this.onlyDate = false;
            this.onlyClock = true;
        } else if (this.props.whatshow === 'only_date') {
            this.onlyClock = false;
            this.onlyDate = true;
        } else {
            this.onlyClock = true;
            this.onlyDate = true;
        }
        if(this.props.showSecond === false || this.props.showSecond === 'false') {
            this.showSecond = false;
        } else {
            this.showSecond = true;
        }
        this.intervalID = setInterval(() => this.tick(), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.intervaId);
      }
      async componentWillReceiveProps( props ) {
          this.props = props;
          this.setState({props: props});
          this.test()
        }
    tick() {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
        var format='MMM YYYY'
        if(this.props.dateFormat) {
            format = this.props.dateFormat
        }
        this.setState({
            hour: moment().format('hh'),//new Intl.DateTimeFormat("de-DE", hourFormat).format(date)
            minute: moment().format('mm'),//new Intl.DateTimeFormat("de-DE", minuteFormat).format(date)
            second: moment().format('ss'),//new Intl.DateTimeFormat("de-DE", secondFormat).format(date)
            date: moment().format(format)
        });
      }

    render() {
        return (
            <Style>
            {
                `:host {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                    font-size: 14px;
                    color: #333;
                    box-sizing: border-box;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    }

                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                    margin: 8px 0;
                    }

                    p {
                    margin: 0;
                    }

                    .spacer {
                    flex: 1;
                    }

                    .toolbar {
                    height: 60px;
                    margin: -8px;
                    display: flex;
                    align-items: center;
                    background-color: #1976d2;
                    color: white;
                    font-weight: 600;
                    }

                    .toolbar img {
                    margin: 0 16px;
                    }

                    .toolbar #twitter-logo {
                    height: 40px;
                    margin: 0 16px;
                    }

                    .toolbar #twitter-logo:hover {
                    opacity: 0.8;
                    }

                    .content {
                    display: flex;
                    margin: 32px auto;
                    padding: 0 16px;
                    max-width: 960px;
                    flex-direction: column;
                    align-items: center;
                    }

                    svg.material-icons {
                    height: 24px;
                    width: auto;
                    }

                    svg.material-icons:not(:last-child) {
                    margin-right: 8px;
                    }

                    .uhrcard svg.material-icons path {
                    fill: #888;
                    }

                    .uhrcard-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-top: 16px;
                    }

                    .uhrcard {
                    border-radius: 4px;
                    border: 1px solid #eee;
                    background-color: #fafafa;
                    height: 40px;
                    width: 200px;
                    margin: 0 8px 16px;
                    padding: 16px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    transition: all 0.2s ease-in-out;
                    line-height: 24px;
                    box-sizing: unset;
                    }

                    .uhrcard-container .uhrcard:not(:last-child) {
                    margin-right: 0;
                    }

                    .uhrcard.uhrcard-small {
                    height: 16px;
                    width: 168px;
                    }

                    .uhrcard-container .uhrcard:not(.highlight-uhrcard) {
                    cursor: pointer;
                    }

                    .uhrcard-container .uhrcard:not(.highlight-uhrcard):hover {
                    transform: translateY(-3px);
                    box-shadow: 0 4px 17px rgba(black, 0.35);
                    }

                    .uhrcard-container .uhrcard:not(.highlight-uhrcard):hover .material-icons path {
                    fill: rgb(105, 103, 103);
                    }

                    div.highlight-uhrcard {
                        text-align: center;
                        box-sizing: unset;
                    }

                    .uhrcard.highlight-uhrcard {
                    background-color: #1976d2;
                    color: white;
                    font-weight: 600;
                    border: none;
                    width: auto;
                    min-width: 30%;
                    position: relative;
                    }

                    .uhrcard.uhrcard.highlight-uhrcard span {
                    margin-left: 60px;
                    }

                    .the_clock {
                    font-size: 33px;
                    line-height: 33px;
                    display: inline;
                    color: red;
                    }
                    .clock_u {
                    font-size: 33px;
                    line-height: 33px;
                    }

                    .the_date {
                    display: block;
                    font-size: 16.5px;
                    line-height: 16.5px;
                    color: red;
                    }

                    .date_u {
                    font-size: 16.5px;
                    line-height: 16.5px;
                    }



                    /* Responsive Styles */
                    @media screen and (max-width: 767px) {

                    .uhrcard-container>*:not(.circle-link),
                    .terminal {
                        width: 100%;
                    }

                    .uhrcard:not(.highlight-uhrcard) {
                        height: 16px;
                        margin: 8px 0;
                    }

                    .uhrcard.highlight-uhrcard span {
                        margin-left: 72px;
                    }
                    }`
            }
            <div className="uhrcard" id ="uhrcomp" target="_blank" rel="noopener" style={{backgroundColor: this.state.props.bgColor}}>
            <div className="highlight-uhrcard">
            {
                this.onlyClock &&
                <span className="the_clock" style={{color: this.state.props.clockColor}}>
                    <span className="clock_u" style={{fontFamily: this.state.props.fontFamilies}}>{this.state.hour}</span>
                    <span className="clock_u" style={{fontFamily: this.state.props.fontFamilies}}>:{this.state.minute}</span>
                    {
                        this.showSecond &&
                        <span className="clock_u" style={{fontFamily: this.state.props.fontFamilies}}>:{this.state.second}</span>
                    }
                </span>
            }
                <br/>
            {
                this.onlyDate &&
                <span className="the_date" style={{color: this.state.props.dateColor}}>
                    <span className="date_u" style={{fontSize: this.state.props.dateSize + 'px', fontFamily: this.state.props.fontFamilies}}>{this.state.date}</span>
                </span>
            }
            </div>
        </div>
        </Style>

        )

    }
}
