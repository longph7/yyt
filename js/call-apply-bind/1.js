// 定义一个基础对象（后续会让函数的 this 指向这个对象）
const person = {
  name: "张三",
  age: 28
};

// 定义一个独立函数（未绑定任何对象，默认调用 this 指向 window/global）
function sayHello(greet, hobby) {
  // this 指向我们后续手动绑定的对象
  console.log(`${greet}，我是${this.name}，今年${this.age}岁，我喜欢${hobby}`);
  // 补充：返回 this 方便我们查看绑定结果（可选）
  return this;
}

const defaultResult = sayHello.bind(person, "hello", "看6电影");
console.log("默认调用的 this 指向：", defaultResult);
defaultResult();