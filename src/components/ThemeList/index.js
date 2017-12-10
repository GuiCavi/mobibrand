import React, { Component } from 'react'

import classNames from 'classnames';

import style from './styles.css';

import {
    
} from '../../components';

class ThemeList extends Component {
    render() {
        const themeListClass = classNames({
            'theme-list': true
        });

        const themes = this.props.themes.map((theme, index) => {
            const items = theme.items.map((item, index) => {
                return (
                    <div style={{ textAlign: 'center' }} key={index}>
                        <div>{item.name}</div>
                        <img src={require(`../../assets/img/themes/${item.theme}/${item.filename}`)} style={{ width: '70%', border: '1px solid #95989a', marginTop: 10 }} />
                    </div>
                );
            });

            return (
                <div
                    key={index}
                    className={`theme ${index == 0 ? 'active' : ''}`}
                    onClick={() => {
                        if (this.props.selectTheme)
                            this.props.selectTheme(theme.name);
                    }}
                >
                    <div className="theme-name">
                        {theme.name}
                    </div>
                
                    <div style={{ flex: 1, margin: '10px 0', marginLeft: 10, display: 'flex', justifyContent: 'space-between', padding: 20 }}>
                        {items}
                    </div>
                </div>
            );
        });

        return (
            <div className={themeListClass}>
                {themes}
            </div>
        );
    }
}

export default ThemeList;