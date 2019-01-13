## 3 methods

`A.prototype = new B();`可以理解为A将B中的方法和属性全部克隆了一遍，A能使用B的方法和属性，可能出现A的prototype是B的实例，同时B的prototype也是A的实例。
```js
function baseClass()
{
  this.showMsg = function()
  {
     alert("baseClass::showMsg");
  }
}

function extendClass()
{
}

extendClass.prototype = new baseClass();
var instance = new extendClass();
instance.showMsg(); // 显示baseClass::showMsg
```
extendClass.prototype = new baseClass()就可以阅读为：extendClass是以baseClass的一个实例为原型克隆创建的。

如果我想使用extendClass的一个实例instance调用baseClass的对象方法showMsg怎么办？
```js
extendClass.prototype = new baseClass();
var instance = new extendClass();


var baseinstance = new baseClass();
baseinstance.showMsg.call(instance);//显示baseClass::showMsg
```
