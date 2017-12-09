import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

class Steper extends Component {
    constructor() {
        super();

        this.state = {
            currentStep: 0
        }
    }

    render() {
        const steperClass = classNames({
            'steper': true
        })

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

export default Steper;