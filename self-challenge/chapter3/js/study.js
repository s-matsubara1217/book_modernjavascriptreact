/*************************************
 * 分割代入
 *************************************/
/**********************
 * オブジェクトの分割代入
 **********************/
// 分割代入を使用しない文字列
/*
const myProfile = {
  name: "松原",
  age: 27,
};
const message = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message);
*/

// 分割代入を使用
/*
const myProfile = {
  name: "松原",
  age: 27,
};
const { name, age } = myProfile;
const message = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message);
*/

// 抽出したプロパティに別名をつける
/*
const myProfile = {
  name: "松原",
  age: 27,
};
const { name: newName, age: newAge } = myProfile;
const message = `私の名前は${newName}です。年齢は${newAge}歳です。`
console.log(message);
*/


/**********************
 * 配列の分割代入
 **********************/
// 配列のインデックスを指定して代入を行う
/*
const myProfile = ["松原", 27];
const message = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message);
*/
// 分割代入を使用
/*
const myProfile = ["松原", 27];
const [name, age] = myProfile;
const message = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message);
*/


/*************************************
 * デフォルト値 =
 *************************************/
/**********************
 * 引数のデフォルト値
 **********************/
// メッセージを出力する関数
/*
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello();
sayHello("松原");
*/

/**********************
 * オブジェクト分割代入のデフォルト値
 **********************/
/*
const myProfile = {
  age: 27,
}
const { name="ゲスト" } = myProfile;
const message = `こんにちは${name}さん`;
console.log(message);
*/


/*************************************
 * スプレッド構文 ...
 *************************************/
/**********************
 * 要素を展開
 **********************/
/*
const arr1 = [1, 2];
const summaryFunc = (num1, num2) => console.log(num1 + num2);
// 普通の配列
summaryFunc(arr1[0], arr1[1]);
// スプレッド構文
summaryFunc(...arr1);
*/

/**********************
 * 要素をまとめる
 **********************/
/*
const arr2 = [1, 2, 3, 4, 5];
// 分割代入時に残りをまとめる
const [num1, num2, ...nums] = arr2;
console.log(num1);
console.log(num2);
console.log(...nums);
*/

/**********************
 * 要素のコピー、結合
 **********************/
/*
const arr4 = [10, 20];
const arr5 = [30, 40];
// スプレッド構文でコピー
const arr6 = [...arr4];
console.log(arr4);
console.log(arr6);
// スプレッド構文で結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);

const obj4 = { val: 10, val2: 20 }
const obj5 = { val3: 30, val4: 40 }
// スプレッド構文でコピー
const obj6 = { ...obj4 }
console.log(obj6);
// スプレッド構文で結合
const obj7 = { ...obj4, ...obj5 };
console.log(obj7);
*/



/*************************************
 * オブジェクトの省略記法
 *************************************/
// プロパティ名と変数名が同一の場合
/*
const name = "松原";
const age = 27;
const user = { name, age };
console.log(user);
*/



/*************************************
 * map、filter
 *************************************/
/**********************
 * 従来のfor文
 **********************/
/*
const nameArr = ["松尾", "三好", "松原"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}
*/

/**********************
 * map関数
 **********************/
/*
const nameArr = ["松尾", "三好", "松原"];
nameArr.map(name => console.log(name))
*/

/**********************
 * filter関数
 **********************/
// 奇数のみ取り出す
/*
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
})
console.log(newNumArr);
*/

/**********************
 * indexの扱い
 **********************/
// for文のindexで配列の要素順を取り出す
// （○番目は○○です）
/*
const nameArr = ["松尾", "三好", "松原"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}
*/
// map関数の引数で要素順を取り出す
// （○番目は○○です）
/*
const nameArr = ["松尾", "三好", "松原"];
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`))
*/

/**********************
 * mapを用いたサンプル
 **********************/
/*
const nameArr = ["主田", "先岡", "後藤"];
const newNameArr = nameArr.map((name) => {
  if (name === "主田") {
    return name;
  } else {
    return `${name}さん`
  }
})
console.log(newNameArr);
*/



/*************************************
 * 三項演算子
 *************************************/
// 構文
// ある条件 ? trueの処理 : falseの処理;

// 入力値が数値の場合は3桁カンマ区切りの表記に変換、数値以外の場合はメッセージを表示して注意する
/*
const numCheck = (num) => console.log(typeof num === "number" ? num.toLocaleString() : "数値ではありません");
numCheck("3000");
*/

// 2つの引数の合計が100を超えているか判定する関数
/*
const checkSumNum = (num1, num2) => {
  return num1 + num2 > 100 ? "超えている" : "超えていない";
}
console.log(checkSumNum(10,20));
*/



/*************************************
 * 論理演算子の本当の意味 && ||
 *************************************/
// 論理演算子を使用した条件分岐
/*
const flag1 = true;
const flag2 = false;

if (flag1 && flag2) {
  console.log("フラグは両方trueです");
}
*/
/*
const num2 = 100;
const fee2 = num2 && [];
console.log(fee2);
*/

// 「||」はその左側がfalse判定なら右側を返す
// 「&&」はその左側がtrue判定なら右側を返す
