// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
console.log(name.toLocaleUpperCase());


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var result=sentence.replace("g","G");
var result=result.replace("a","A");
var result=result.replace("m","M");
var result=result.replace("m","M");
console.log(result);

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
console.log(money.substr(1));

//TODO write your code here...
