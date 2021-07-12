(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Dry = {}));
}(this, (function (exports) { 'use strict';

    function delay(ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    }

    var index$1 = {
        delay: delay
    };

    var regPhone = /^\d{11}$/;

    function validPhone(val) {
        return regPhone.test(val);
    }

    var index = {
        validPhone: validPhone
    };

    exports.time = index$1;
    exports.validate = index;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

if(typeof window !== 'undefined') {
  window._Dry_VERSION_ = '1.0.0'
}
