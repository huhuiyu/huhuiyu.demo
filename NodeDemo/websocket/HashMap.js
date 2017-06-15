var HASH_KEY_PREFIX = "_#HashMap#_";
function HashMap() {
    this.size = 0;
}
/**
 * 放置数据到Map中
 */
HashMap.prototype.put = function (key, value) {
    if (this.contains(key)) { //存在就替换，并返回旧的值
        var oldvalue = this.get(key);
        this[HASH_KEY_PREFIX + key] = value;
        return oldvalue;
    }
    this[HASH_KEY_PREFIX + key] = value;
    this.size += 1;
    return null;
};
/**
 * 获取key指定的数据
 */
HashMap.prototype.get = function (key) {
    return this[HASH_KEY_PREFIX + key];
};
/**
 * 查看是否存在key
 */
HashMap.prototype.contains = function (key) {
    return (this.hasOwnProperty(HASH_KEY_PREFIX + key));
};
/**
 * 获取key集合
 */
HashMap.prototype.keys = function () {
    var hashKeys = [];
    for (var p in this) {
        if (p.indexOf(HASH_KEY_PREFIX) === 0) {
            hashKeys.push(p.substring(HASH_KEY_PREFIX.length));
        }
    }
    return hashKeys;
};
/**
 * 获取值集合
 */
HashMap.prototype.values = function () {
    var hashValues = [];
    for (var p in this) {
        if (p.indexOf(HASH_KEY_PREFIX) === 0) {
            hashValues.push(this[p]);
        }
    }
    return hashValues;
};
/**
 * 转换成数组,格式为[{"key";keyInfo,"value":valueInfo}]
 */
HashMap.prototype.toList = function () {
    var list = [];
    var keys = this.keys();
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var info = {"key": key, "value": this.get(key)};
        list.push(info);
    }
    return list;
};
/**
 * 数组转换成map格式为[{"key";keyInfo,"value":valueInfo}](toList的反转方法)
 */
HashMap.prototype.fromList = function (list) {
    for (var i = 0; i < list.length; i++) {
        var info = list[i];
        this.put(info.key, info.value);
    }
};
/**
 * 删除Map中的key
 */
HashMap.prototype.remove = function (key) {
    if (this.contains(key)) { //存在删除，并返回被删除的值
        var value = this[HASH_KEY_PREFIX + key];
        delete this[HASH_KEY_PREFIX + key];
        this.size -= 1;
        return value;
    }
    return null; //否则返回null
};
/**
 * 获取Map的大小
 */
HashMap.prototype.count = function () {
    return this.size;
};
/**
 * 转换json数组为map 
 */
HashMap.jsonListToMap = function (jsonList, keyPropert) {
    var map = new HashMap();
    for (var i = 0; i <= jsonList.length; i++) {
        var json = jsonList[i];
        if (json && json.hasOwnProperty(keyPropert)) {
            map.put(json[keyPropert], json);
        }
    }
    return map;
};

module.exports = HashMap;