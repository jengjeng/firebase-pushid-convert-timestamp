;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.firebasePushIDConvertTimestamp = factory()
}(this, (function () { 'use strict'

  function decodeFirebasePushID (x) {
    return { 
      timestamp: decodeFirebaseHash(x.slice(0, 8)), 
      randomness: decodeFirebaseHash(x.slice(8))
    }
  }

  function decodeFirebaseHash (x) {
    var PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz'
    var n = 0, length = x.length - 1
    for (var i = length; i >= 0; i--) {
      n += PUSH_CHARS.indexOf(x[i]) * Math.pow(64, length - i)
    }
    return n
  }

  return decodeFirebasePushID

})));