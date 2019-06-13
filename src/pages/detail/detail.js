import React from 'react';
import './detail.css';
// import detailImg from './../../assets/images/detail/image.png'
export default class Detail extends React.Component {
    detail = {
        url: 'assets/images/detail/image.png',
        title: '习近平：全面提高办学育人水平为强军事业提供有力人才支持',
        date: '2019-05-21',
        reporter: '李刚',
        content: '5月21日，中共中央总书记、国家主席、中央军委主席习近平到陆军步兵学院视察。这是习近平亲切接见驻江西部队副师职称以上领导干部和建制团级单位主官、陆军步兵学院本部正团职以上干部和石家庄校区主官、专家教授代表。'
    };

    render() {
        return (
            <div className="detail-container">
                <div className="detail">
                    <img className="picture" src={require('./../../assets/images/detail/image.png')} alt="" />
                    {/* <img className="picture" src={detailImg} alt="" /> */}
                    <div className="message">
                        <h2 className="title">{this.detail.title}</h2>
                        <div className="date-reporter">
                            <span>{this.detail.date}</span>
                            <span>记者{this.detail.reporter}</span>
                        </div>
                        <div className="desc">
                            {this.detail.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}