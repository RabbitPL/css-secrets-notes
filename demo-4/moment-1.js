// moment源码阅读笔记

// 常用工具类
/**
 * 判断一个值是否为数组
 */
var toString = Object.prototype.toString;
function isArray(input) {
    return Array.isArray && Array.isArray(input) || input instanceof Array || toString.call(input) === '[object Array]';
}

/**
 * 判断一个值是否为对象
 */
function isObject(input) {
    return input !== null && toString.call(input) === '[object Object]';
}

/**
 * 判断一个值是否为空对象
 */
function isEmptyObject(obj) {
    if(Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
    } else {
        var o;
        // for...in或遍历对象所有属性(包含原型链)
        for(o in obj) {
            if(obj.hasOwnProperty(o)) {
                return true;
            }
        }
        return false;
    }
}

/**
 * 判断一个值是否为undefined
 */
function  isUndefined(input) {
    return input === undefined;
} 


/**
 * 判断一个值是否为number
 */
function isNumber(input) {
    return typeof input === 'number' || toString.call(input) === '[object Number]';
}

/**
 * 判断一个值是否为Date
 */
function isDate(input) {
    return input instanceof Date || toString.call(input) === '[object Date]';
}