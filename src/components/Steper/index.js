import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

import {actionCreators} from "../../reducers/step";
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (store) => ({
    name: store.stepReducer.name
});

class Steper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 0
        };

        this._setStep = this._setStep.bind(this);
    }

    _setStep(step) {
        const {dispatch} = this.props;

        this.setState({
            currentStep: step
        });

        dispatch(actionCreators.changeStep(step));
    }

    render() {
        const steperClass = classNames({
            'steper': true
        });

        let steps = [];
        let Step = null;
        let i = 0;
        
        for (let step in this.props.steps) {
            Step = this.props.steps[step];
            steps.push(
                <Step
                    {...this.props.toSendToSteps}
                    key={i}
                    index={i}
                    active={this.state.currentStep == i}
                    bulletCount={Object.keys(this.props.steps).length}
                    setStep={this._setStep}
                />
            );
            i++;
        }

        return (
            <div className={steperClass}>
                {steps}
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Steper));