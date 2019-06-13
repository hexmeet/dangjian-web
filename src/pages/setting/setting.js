import React from 'react';
import './setting.css';
import NativeCallback from './../../common/native-callback';
import Header from './../../components/header/header';

export default class Setting extends React.Component {
    constructor(props){
        super(props);
        this.gotoSetting = this.gotoSetting.bind(this);
    }

    settingList = [{
        text: '信息',
        type: 'info',
        url: 'assets/images/icon_info.png'
    }, {
        text: '设置',
        type: 'setting',
        url: 'assets/images/icon_setting.png'
    }];

    gotoSetting(type) {
        console.log('-----setting-----', type);
        NativeCallback.gotoSetting(type);
    }

    render() {
        return (
            <div>
                <Header />
                <div className='setting'>
                    <ul>
                        {
                            this.settingList.map((item, index) => {
                                return (
                                    <li key={index} >
                                        <a href="###" tabIndex={index + 30} className="content" onClick={this.gotoSetting.bind(this, item.type)}>
                                            <span>{item.text}</span>
                                            <img src={require('./../../' + item.url)} alt={item.text}/>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}