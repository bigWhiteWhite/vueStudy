
/* 
相当Vue的构造函数
 */
function MVVM(options) {
	//将配置对象保存在vm
    this.$options = options || {};
	//将data对象保存到vm和变量data中
    var data = this._data = this.$options.data;
	//保存vm到变量me
    var me = this;

    // 数据代理
    // 实现 vm.xxx -> vm._data.xxx
	//遍历data中所有的属性
    Object.keys(data).forEach(function(key) {//key是data的某个属性名：name
		//对指定的属性实现代理
        me._proxyData(key);
    });

    this._initComputed();

    observe(data, this);

    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    constructor: MVVM,
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },
/* 
实现指定属性代理的方法
 */

    _proxyData: function(key, setter, getter) {
        var me = this;
        setter = setter || 
		//给vm添加指定属性名的属性(使用属性描述符)
        Object.defineProperty(me, key, {
            configurable: false,//不能重新定义
            enumerable: true,//可以枚举遍历
			//当通过vm.xxx读取属性值时调用，从data中获取对应的属性值返回  代理读操作
            get: function proxyGetter() {
                return me._data[key];
            },
			//当通过vm.xxx=value时，value被保存在data对应的属性上  代理读操作
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    },

    _initComputed: function() {
        var me = this;
        var computed = this.$options.computed;
        if (typeof computed === 'object') {
            Object.keys(computed).forEach(function(key) {
                Object.defineProperty(me, key, {
                    get: typeof computed[key] === 'function' 
                            ? computed[key] 
                            : computed[key].get,
                    set: function() {}
                });
            });
        }
    }
};