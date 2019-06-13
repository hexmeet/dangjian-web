import React from 'react';
import './video-detail.css';

export default class VideoDetail extends React.Component {

    componentDidMount() {
        this.playVideo();
    }

    playVideo(str) {
        const myVideo = document.getElementById('my-video');
        if(myVideo.paused) {
            myVideo.play();
        }
    }

    videoSrc = 'http://webcontents.hexmeet.com/demo/dangjian-demo-video.mp4';

    render() {
        return (
            <div className="video-detail">
                    <video
                        id="my-video"
                        src={this.videoSrc}
                        autoPlay="autoplay"
                        controls="controls"
                        preload="auto"
                        poster={require('./../../assets/images/home/image02.png')}
                        playsInline={true}
                        webkitplaysinline="true"
                        >
                    </video>
            </div>
        )
    }
}