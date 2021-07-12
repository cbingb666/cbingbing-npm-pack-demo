(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Dry = factory());
}(this, (function () { 'use strict';

    var regPhone = /^\d{11}$/;

    function validPhone(val) {
        return regPhone.test(val);
    }

    function delay(ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    }

    var index = {
        validPhone: validPhone,
        delay: delay,
    };

    return index;

})));

if(typeof window !== 'undefined') {
  window._Dry_VERSION_ = '1.0.0'
}
