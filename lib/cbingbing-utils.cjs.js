'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

if(typeof window !== 'undefined') {
  window._Dry_VERSION_ = '1.0.0'
}
