import React from 'react';
import './join-conf.css';
import Util from './../../common/util';
import NativeCallback from './../../common/native-callback';
import HjtCordova from './../../common/hjt-cordova';

export default class JoinConf extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: '',
            error: ''
        };

        this.handleFocus = this.handleFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFocus() {

    }

    handleChange(event) {
        this.setState({
            number: event.target.value,
            error: ''
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if(Util.isNullOrEmpty(this.state.number)) {
            this.setState({
                error: '会议号码不能为空！'
            })
            return ;
        }
        console.log('会议号码: ', this.state.number);
        if(!window.cordova) {
          NativeCallback.joinConf(this.state.number);
        } else {
          HjtCordova.anonymousCall(this.state.number);
        }
        this.setState({
            number: ''
        })
    }

    render() {
        return (
            <div className='joinConfPage'>
                <form onSubmit={this.handleSubmit}>
                    <input className="number"
                        type="text" placeholder="请输入会议号码" value={this.state.number}
                        onChange={this.handleChange}  onFocus={this.handleFocus.bind(this)} />
                    <div className="errorInfo">{this.state.error}</div>
                    <input className="joinConfBtn" type="submit" value="加入会议" onFocus={this.handleFocus.bind(this)} />
                </form>
            </div>
        )
    }
}