import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Header from './../../components/header/header';
import { FILE_PATH } from './../../common/cordova-global.js';
export default class Home extends React.Component {

    newsList = [{
        text: '习近平视察陆军步兵学院',
        imgSrc: require('./../../assets/images/home/image01.png'),
        src: '/detail'
    }, {
        text: '习近平在江西考察调研',
        imgSrc: require('./../../assets/images/home/image02.png'),
        src: '/video-detail'
    }, {
        text: '习近平会见第六次全国自强模范暨自残先进表彰',
        imgSrc: require('./../../assets/images/home/image03.png'),
        src: '/detail'
    }, {
        text: '习近平和彭丽媛同出席亚洲文明对话大会的外方',
        imgSrc: require('./../../assets/images/home/image04.png'),
        src: '/detail'
    }, {
        text: '习近平出席亚洲文明对话大会开幕式并发表主旨',
        imgSrc: require('./../../assets/images/home/image05.png'),
        src: '/detail'
    }, {
        text: '习近平会见亚美尼亚总理帕希尼杨',
        imgSrc: require('./../../assets/images/home/image06.png'),
        src: '/detail'
    }];

    handleFocus() {

    }

    render() {
        return (
            <div>
                <Header />
                <div className="newsList">
                    <ul>
                        {
                            this.newsList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.src} tabIndex={index + 10} className="newsItem" onFocus={this.handleFocus.bind(this)}>
                                        <img className="picture" src={`${FILE_PATH}${item.imgSrc}`} alt={item.text}/>
                                        <div className="desc">
                                            <span>{item.text}</span>
                                            <img className="arrow" src={require('./../../assets/images/arrow.png')} alt=""/>
                                        </div>
                                        </Link>
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