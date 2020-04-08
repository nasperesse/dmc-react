import React from 'react';
import Intl from 'intl'
import 'intl/locale-data/jsonp/de-DE'
import  './UhrComp.css'
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
        console.log(this.props.showSecond +"  uhrComp test")
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
        if(this.props.showSecond === false) {
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
          console.log(props.dateFormat +" uhrComp receiveprops")
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
        console.log(this.state.props.dateFormat+ " uhrComp render")
        return (
            <div className="uhrcard" id ="uhrcomp" target="_blank" rel="noopener" style={{backgroundColor: this.state.props.bgColor}}>
            <div className="highlight-uhrcard">
            {
                this.onlyClock &&
                <span className="the_clock" style={{color: this.state.props.clockColor}}>
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
                <span className="the_date" style={{color: this.state.props.dateColor}}>
                    <span className="date_u">{this.state.date}</span>
                </span>
            }
            </div>
        </div>
        )

    }
}
