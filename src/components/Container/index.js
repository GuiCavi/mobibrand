import React, { Component } from 'react';

//import classNames from 'classnames';

import styles from './styles.css';

class Container extends Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

export default Container;