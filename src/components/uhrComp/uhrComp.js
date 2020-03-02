import React, {Component} from 'react';
import './uhrComp.css'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as uhrCompActions from "../../store/uhrComp/actions";
export default class uhrComp extends Component {
     constructor(props) {
         super(props);
         this.state = {};
     }

    render() {
      return (<div className="component-uhr-comp">Hello! component uhrComp</div>);
    }
  }
// export default connect(
//     ({ uhrComp }) => ({ ...uhrComp }),
//     dispatch => bindActionCreators({ ...uhrCompActions }, dispatch)
//   )( uhrComp );