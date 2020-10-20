import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UhrComp from './components/uhrcomp/UhrComp.js';
import QcmComp from './components/qcmcomp/QcmComp';
import retargetEvents from 'react-shadow-dom-retarget-events';

ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

class QuizzCustom extends HTMLElement {
    div;
    componentAttributes = {};
    componentProperties = {};

    createdCallback() {
        this.mountReactApp();
    }

    disconnectedCallback() {
        ReactDOM.unmountComponentAtNode(this.div);
    }

    initProps() {
        this.componentAttributes['bgColor'] = this.getAttribute('bgColor');
        this.componentAttributes['textColor'] = this.getAttribute('textColor');
        this.componentAttributes['next'] = this.getAttribute('next');
        this.componentAttributes['quiz'] = this.getAttribute('quiz');
    }

    static get observedAttributes() {
        return ['bgColor', 'textColor', 'next', 'quiz'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.componentAttributes[name] = newVal;

        this.mountReactApp();
    }
    reactProps() {
        return {...this.componentAttributes };
    }

    mountReactApp() {
        this.initProps()
        if (!this.mountEl) {
            this.mountEl = document.createElement('div');
            this.mountEl.style.width = 'max-content';
            this.mountEl.style.height = 'max-content';
            this.el = this.attachShadow({ mode: 'open' });
            this.el.appendChild(this.mountEl);
        }
        (document.onreadystatechange = () => {
                if (document.readyState === "complete") {
                    ReactDOM.render( < QcmComp {...this.reactProps() }
                        / > , this.mountEl);

                        retargetEvents(this.el);
                    }
                })();
        }
    }

    class UhrCustom extends HTMLElement {

        div;
        componentAttributes = {};
        componentProperties = {};

        connectedCallback() {
            this.mountReactApp();
        }

        disconnectedCallback() {
            ReactDOM.unmountComponentAtNode(this.div);
        }


        initProps() {
            this.componentAttributes['bgColor'] = this.getAttribute('bgColor');
            this.componentAttributes['clockColor'] = this.getAttribute('clockColor');
            this.componentAttributes['dateColor'] = this.getAttribute('dateColor');
            this.componentAttributes['showSecond'] = this.getAttribute('showSecond');
            this.componentAttributes['whatshow'] = this.getAttribute('whatshow');
            this.componentAttributes['dateFormat'] = this.getAttribute('dateFormat');
        }

        static get observedAttributes() {
            return ['bgColor', 'clockColor', 'dateColor', 'showSecond', 'whatshow', 'dateFormat'];
        }

        attributeChangedCallback(name, oldVal, newVal) {
            this.componentAttributes[name] = newVal;

            this.mountReactApp();
        }
        reactProps() {
            return {...this.componentAttributes };
        }

        mountReactApp() {
            this.initProps()
            if (!this.div) {
                this.div = document.createElement('div');
                this.div.setAttribute('id', 'root');
                this.div.style.width = 'max-content';
                this.div.style.height = 'max-content';
                this.attachShadow({ mode: 'open' }).appendChild(this.div);
            }
            ReactDOM.render( < UhrComp {...this.reactProps() }
                / > , this.div);
            }

        }

        customElements.define('react-uhr-comp', UhrCustom)
        customElements.define('react-quizz-comp', QuizzCustom)