const isFunction = fn => fn && {}.toString.call(fn) === '[object Function]';

module.exports = isFunction;