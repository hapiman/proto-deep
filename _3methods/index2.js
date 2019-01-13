function baseClass() {
  this.showMsg = function () {
    console.log("baseClass::showMsg");
  }

  this.baseShowMsg = function () {
    console.log("baseClass::baseShowMsg");
  }
}
// 类方法
baseClass.showMsg = function () {
  console.log("baseClass::showMsg static");
}

baseClass.prototype.showMsg = function () {
  console.log("baseClass::prototype::showMsg static");
}

function extendClass() {
  this.showMsg = function () {
    console.log("extendClass::showMsg");
  }
}
extendClass.showMsg = function () {
  console.log("extendClass::showMsg static")
}

extendClass.prototype = new baseClass();
var instance = new extendClass();

instance.showMsg(); //显示extendClass::showMsg
instance.baseShowMsg(); //显示baseClass::baseShowMsg
instance.showMsg(); //显示extendClass::showMsg

// 调用类上方法
baseClass.showMsg.call(instance);//显示baseClass::showMsg static, baseClass没有实例化，所以直接调用类上的方法
// 调用原型链上方法
baseClass.prototype.showMsg.call(instance);//显示baseClass::prototype::showMsg static, baseClass没有实例化，所以直接调用类上的方法

var baseinstance = new baseClass();
baseinstance.showMsg.call(instance);//显示baseClass::showMsg
