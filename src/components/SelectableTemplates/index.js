import React, { Component } from 'react';

import classNames from 'classnames';

import styles from './styles.css';

import {
    RadioButton
} from '../../components';

class SelectableTemplates extends Component {
    componentWillMount() {
        console.log(this.props);
    }
    render() {
        const wrapperClass = classNames({
            'selectable-templates-wrapper': true
        });

        const templatesClass = classNames({
            'selectable-templates': true,
            'active': this.props.active
        });

        const itemClass = classNames({
            'selectable-templates-item': true,
            'card': this.props.type == 'card',
            'banner': this.props.type == 'banner',
            'stripe': this.props.type == 'stripe',
            'board': this.props.type == 'board',
            // 'rent-board': this.props.type == 'rent-board',
            // 'sale-board': this.props.type == 'sale-board',
        })

        return (
            <div className={wrapperClass}>
                <div className={templatesClass} onClick={() => {
                    if (this.props.selectTemplate)
                        this.props.selectTemplate(this.props.type);
                }}>
                    <h3>{this.props.name}</h3>
                    <div className={itemClass}>
                        {this.props.size}
                    </div>
                    {
                        this.props.selectTemplate &&
                        <RadioButton active={this.props.active} />
                    }
                </div>
            </div>
        );
    }
}

export default SelectableTemplates;