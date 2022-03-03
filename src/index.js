// const, letの変数宣言
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは上書き不可
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// cosnt変数は上書き不可
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// テンプレート文字列
// const name = "じゃけえ";
// const age = 28;

// // 私の名前はじゃけえです。年齢は28歳です。
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数
// 従来の関数
// function func1(str){
//   return str;
// }

// 関数を変数に入れて書くこともできる.
// const func1 = function(str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// // 引数が一つの時は()なしでもかける
// const func2 = (str) =>{
//   return str;
// };
// console.log(func2("func2です"));

// // 今回のような関数が１行の処理しかない場合は下記のようにも書ける
// const func3 = (str) => str;
// console.log(func3("func3です"))

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(10, 20));

// const func5 = (num1, num2) => num1 + num2;
// console.log(func5(20, 30));

// 分割代入
// const myProfile = {
//   name: "じゃけえ",
//   age: 28,
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`
// console.log(message2)

// 配列
//  const myProfile = ['じゃけえ', 28];

// // const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`
// // console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// デフォルト値, 引数など
// 引数にイコールで書いてあげると、デフォルト値（引数を指定していないときの値）を設定できる
const sayHello = (name = "ゲスト") => console.log(`こんにちは,${name}さん!`);
sayHello();

// スプレッド構文
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // // ドット三つで配列の内部を順番に展開してくれる
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);

// // スプレッド構文
// sumFunc(...arr1);

// 配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// mapやfilterを使った配列の処理
const nameArr = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index+1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === 'じゃけえ'){
//     return name
//   }else{
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

// 三項演算子
// ある条件 ? 条件がTrueの時 : 条件がFalseの時
// const val1 = 1 < 0 ? 'Trueです' : 'Falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力して下さい';
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
};

console.log(checkSum(50, 0));
