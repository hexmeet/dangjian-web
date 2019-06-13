export default class HjtCordova {
    static initHjtCordova () {
        window.cordova.plugins.HjtCordova.initView((msg)=> {
            alert('initView: ' + msg);
        }, (error) => {
            alert('initView error: ' + error);
        });
    }

    static anonymousCall(number, username) {
        window.cordova.plugins.HjtCordova.anonymousCall('172.25.0.141', number, username, function(msg){
            alert('anonymousCall: ' + msg);
        },function(error){
            alert('anonymousCall error: ' + error);
        });
    }

    static makeCall(number) {
        window.cordova.plugins.HjtCordova.login('172.25.0.141', 'huanying', '1qaz', (msg)=> {
            alert('login: ' + msg);
            window.cordova.plugins.HjtCordova.makeCall(number, (msg) => {
                alert('makeCall: ' + msg);
            }, (error) => {
                alert('makeCall error: ' + error);
            });
        }, (error) => {
            alert('login error: ' + error);
        });
    }
}