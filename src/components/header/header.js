import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default class Header extends React.Component {
    constructor(props){
        super(props);
       
        this.handleFocus = this.handleFocus.bind(this);
    }

    navList = [{
        text: '要闻',
        url: '/'
    }, {
        text: '会议学习',
        url: '/conf-learning'
    }, {
        text: '三会一课',
        url: '/other'
    }, {
        text: '书记面对面',
        url: '/other'
    }, {
        text: '党务管理',
        url: '/other'
    }, {
        text: '会议留痕',
        url: '/other'
    }, {
        text: '视频点播',
        url: '/other'
    }, {
        text: '设备设置',
        url: '/setting'
    }];

    handleFocus() {

    }

    render() {
        return (
            <header>
                <ul className="header">
                    {
                        this.navList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink tabIndex={index + 1} className="url" exact={item.url === '/'}
                                        activeClassName="active" to={item.url} onFocus={this.handleFocus.bind(this)}>
                                        {item.text}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </header>
        )
    }
}