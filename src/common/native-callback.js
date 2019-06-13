export default class NativeCallback {

    static PageCreated () {
      console.log('----PageCreated----');
      if (window['webkit'] && window['webkit'].messageHandlers) {
        window['webkit'].messageHandlers.callbackObj.postMessage('PageCreated');
      } else {
        if (window['callbackObj'] && window['callbackObj'].PageCreated) {
          window['callbackObj'].PageCreated();
        }
      }
    }

    static joinConf(number) {
        if (window['webkit'] && window['webkit'].messageHandlers) {
            window['webkit'].messageHandlers.callbackObj.postMessage('joinConf$' + number);
        } else {
          if (window['callbackObj'] && window['callbackObj'].joinConf) {
            window['callbackObj'].joinConf(number);
          }
        }
    }

    static gotoSetting(type) {
      if (window['webkit'] && window['webkit'].messageHandlers) {
          window['webkit'].messageHandlers.callbackObj.postMessage('gotoSetting$' + type);
      } else {
        if (window['callbackObj'] && window['callbackObj'].gotoSetting) {
          window['callbackObj'].gotoSetting(type);
        }
      }
  }
}
