import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import NativeCallback from './common/native-callback';
import HjtCordova from './common/hjt-cordova';

import Home from './pages/home/home';
import ConfLearning from './pages/conf-learning/conf-learning';
import Detail from './pages/detail/detail';
import VideoDetail from './pages/video-detail/video-detail';
import JoinConf from './pages/join-conf/join-conf';
import Setting from './pages/setting/setting';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
      isCordova: false
    }
}
  componentDidMount() {
    let isCordova = false;
    if(!window.cordova) {
      NativeCallback.PageCreated();
      isCordova = false;
    } else {
      alert('cordova: ' + JSON.stringify(window.cordova.file))
      isCordova = true;
      HjtCordova.initHjtCordova();
      this.detectOrient();
    }
    this.setState({
      isCordova: isCordova
    })
  }

  detectOrient() {
    let orientationchange = "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(orientationchange, () => {
      this.reset();
    })
    this.reset();
  }

  reset() {
    let width = document.documentElement.clientWidth,
      height = document.documentElement.clientHeight,
      style;
    if(window.orientation === 180 || window.orientation === 0) { // 横屏
      style = {
        width: height,
        height: width,
        transform: "rotate(90deg)",
        transformOrigin: width / 2 + "px " + width / 2 + "px"
      }
    } else if(window.orientation === 90 || window.orientation === -90) { // 竖屏
      style = {
        width: width,
        height: height,
        transform: "rotate(0)",
        transformOrigin: "0 0"
      }
    }
    this.setState({
      style: style
    })
  }

  render() {
    const isBase = process.env.NODE_ENV === 'production' && !this.state.isCordova;
    return (
      <Router basename={isBase ? '/web/dangjian' : ''}>
        <div className={`App ${this.state.isCordova ? 'cordova' : ''}`} style={this.state.style}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/conf-learning" component={ConfLearning} />
            <Route path="/detail" component={Detail} />
            <Route path="/video-detail" component={VideoDetail} />
            <Route path="/join-conf" component={JoinConf} />
            {
              !this.state.isCordova && <Route path="/setting" component={Setting} />
            }
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    )
  }
}