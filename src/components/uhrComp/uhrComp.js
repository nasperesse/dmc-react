import React from 'react';
import Intl from 'intl'
import 'intl/locale-data/jsonp/de-DE'
import  './UhrComp.css'

export default class UhrComp extends React.Component {
    showSecond = true;
    onlyClock = true;
    onlyDate = true;

    constructor() {
        super();
        this.state = {}
    }
    componentDidMount() {
        if(this.props.clockColor) {
            document.querySelector("div#uhrcomp > div.highlight-card > span.the_clock").style.color = this.props.clockColor;
        }
        if(this.props.dateColor) {
            document.querySelector("div#uhrcomp > div.highlight-card > span.the_date").style.color = this.props.dateColor;
        }
        if(this.props.bgColor) {
            document.querySelector("div#uhrcomp").style.backgroundColor  = this.props.bgColor;
        }
        if(this.props.showSecond === false) {
            this.showSecond = false;
        } else {
            this.showSecond = true;
        }
        if(this.props.whatshow === 'only_clock') {
            this.onlyDate = false;
        } else if (this.props.whatshow === 'only_date') {
            this.onlyClock = false;
        } else {
            this.onlyClock = true;
            this.onlyDate = true;
        }
        this.intervalID = setInterval(() => this.tick(), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.intervaId);
      }
    tick() {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
        const dateFormat = {weekday: "long", month: "long", day: "numeric", year: "numeric"};
        const hourFormat = {hour: "numeric", hour12: false};
        const minuteFormat = {minute: "numeric"};
        const secondFormat = {second: "numeric"};
        const date = new Date();
        const formatedDate = new Intl.DateTimeFormat("de-DE", dateFormat).format(date)
        this.setState({
            hour: new Intl.DateTimeFormat("de-DE", hourFormat).format(date),
            minute: new Intl.DateTimeFormat("de-DE", minuteFormat).format(date),
            second: new Intl.DateTimeFormat("de-DE", secondFormat).format(date),
            date: formatedDate
        });
      }

    render() {
        return (
            <div className="uhrcard" id ="uhrcomp" target="_blank" rel="noopener">
            <div className="highlight-uhrcard">
            {
                this.onlyClock &&
                <span className="the_clock">
                    <span className="clock_u">{this.state.hour}</span>
                    <span className="clock_u">:{this.state.minute}</span>
                    {
                        this.showSecond &&
                        <span className="clock_u">:{this.state.second}</span>
                    }
                </span>
            }
                <br/>
            {
                this.onlyDate &&
                <span className="the_date" >
                    <span className="date_u">{this.state.date}</span>
                </span>
            }
            </div>
        </div>
        )
    }
}
