
/**
 * es6 学习
 * 
 */
/**
 * 数组
 */
{
  /*（...）扩展运算付，他好比rest参数得逆运算，将一个数组转为逗号分隔得参数序列*/
  //console.log(...[123,123]);
  //console.log(1,...[2,3],5);

  function  push(array,...item) {
  	console.log(item);
  	 array.push(...item);
  	 console.log(array);
  }
  push([],[1,2,3]);

/**
 * array.from() 方法用于将两类对象转为真正的数组 类似数组的对象和可便利的对象
 * 
 */
function foo() {
  var args = Array.from(arguments);
 
}
foo(1,2);


/**
 * array.of(); 将一组数转换为数组
 * 
 */ 
  console.log(Array.of(5,"6",7));
  /**
   * copyWithin(); 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置
   * （会覆盖原有成员），返回当前数组
   */
  //Array.prototype.copyWithin(1, start = 0, end = this.length)
  console.log([1, 2, 3, 4, 5].copyWithin(-2, 1));

  /**
   * 数组实例得find() 和 findIndex() 
   * 数组实例得find方法，用于找出数组第一个符合条件得数组成员，他得参数是个回调函数，所有数组成员执行该回调函数，直到找到一个返回值为true得成员，然后返回该成员。如果没有符合条件得成员，则返回undefined。
   * 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
   * 
   */
   console.log([1,2,-5,5].find((n)=>n>2));
   [1, 5, 10, 15].findIndex(function(value, index, arr) {
   	console.log(value);
       return value > 9;
   });
}

