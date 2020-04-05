import React from 'react';
import './ModifyUhr.css'
import UhrComp from './../uhrcomp/UhrComp';
class ModifyUhr extends React.Component {


    render() {
        return (
            <div id="modifyuhr" className="container">
                <h4 className="text-center">Generate your digital Uhr</h4>

                <div className="row">
                    <div className="col-md-9 settings">
                        <h6> set your Uhr </h6>

                    </div>
                    <div className="col-md-3">
                        <UhrComp />
                    </div>
                </div>
            </div>
        );
    }
}
export default ModifyUhr;