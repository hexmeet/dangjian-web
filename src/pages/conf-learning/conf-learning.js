import React from 'react';
import { Link } from 'react-router-dom';
import './conf-learning.css';
import NativeCallback from './../../common/native-callback';
import HjtCordova from './../../common/hjt-cordova';
import Header from './../../components/header/header';

export default class ConfLearning extends React.Component {
    constructor(props) {
        super(props);
        this.joinConf = this.joinConf.bind(this);
    }

    confList = [{
        title: '某某某校党支部换届选举大会',
        time: '5月27日 09:30-11:30',
        number: '78900001004',
        username: '钟闯'
    }, {
        title: '某某某校团委会议',
        time: '5月26日 13:30-14:30',
        number: '78900001005',
        username: '钟闯'
    }, {
        title: '“不忘初心，牢记使命”主题教育专题报告会',
        time: '5月26日 09:30-11:30',
        number: '78900001007',
        username: '钟闯'
    }, {
        title: '2019年职工代表大会',
        time: '5月25日 11:30-13:30',
        number: '78900001011',
        username: '钟闯'
    }];

    joinConf(number, username) {
        console.log('-----onJoinConf-------', number);
        if(!window.cordova) {
            NativeCallback.joinConf(number);
        } else {
            HjtCordova.anonymousCall(number, username);
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className='confList'>
                    <ul>
                        {
                            this.confList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href="###" tabIndex={index + 20} className="conf-item" onClick={this.joinConf.bind(this, item.number, item.username)}>
                                            <div className="conf">
                                                <h2 className="name">{item.title}</h2>
                                                <div className="desc">
                                                    <span>学习时间：{item.time}</span>
                                                    <span>会议号码：{item.number}</span>
                                                    <span>发起者：{item.username}</span>
                                                </div>
                                            </div>
                                            <div className="joinConf">加入会议</div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Link to="/join-conf" tabIndex={this.confList.length + 20} className="enterDialing">
                        进入拨号
                        <img className="dial" src={require('../../assets/images/arrow_dial.png')} alt="" />
                    </Link>
                </div>
            </div>
        )
    }
}