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

export default index;

if(typeof window !== 'undefined') {
  window._Dry_VERSION_ = '1.0.0'
}
