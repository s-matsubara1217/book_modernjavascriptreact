/*************************************
 * DOMアクセス
 *************************************/
/*
const title1 = document.getElementById("title");
console.log(title1);

const title2 = document.querySelector("#title");
console.log(title2);

const containers = document.querySelectorAll(".container");
console.log(containers);

const container = document.querySelector(".container");
console.log(container);
*/



/*************************************
 * DOMの作成、追加、削除
 *************************************/
/**********************
 * DOMの作成
 **********************/
/*
const divEl = document.createElement("div");
console.log(divEl);
*/

/**********************
 * DOMの追加
 **********************/
/*
const divEl = document.createElement("div");
const pEl = document.createElement("p");
const h2El = document.createElement("h2");
divEl.appendChild(pEl);
divEl.prepend(h2El);
console.log(divEl);
*/
/*
const buttonEl = document.createElement("button");
buttonEl.textContent = "ボタン";
const div1El = document.querySelector(".container");
div1El.appendChild(buttonEl);
*/

/**********************
 * DOMの削除
 **********************/
/*
const h1El = document.getElementById("title");
const bodyEl = document.querySelector("body");
bodyEl.textContent = null;
*/



/*************************************
 * DOM操作 実践
 *************************************/

// 追加ボタン
const addBtn = document.getElementById("addBtn");
// 追加ボタン押した時の処理
addBtn.addEventListener("click", () => {

  // inputの内容を取得
  const inputText = document.getElementById("inputText").value;
  // ul(memoList)を取得
  const memoList = document.getElementById("memoList");

  if (inputText !== "") {
    // リスト要素を生成
    // li
    const memoListItem = document.createElement("li");
    memoListItem.className = "memoList__item";
    // div
    const memoListItemInner = document.createElement("div");
    memoListItemInner.className = "memoList__item__inner";
    // p
    const memoListItemText = document.createElement("p");
    memoListItemText.className = "memoList__item__text";
    memoListItemText.innerText = inputText;
    // button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "削除"
    // 結合
    memoListItemInner.appendChild(memoListItemText);
    memoListItemInner.appendChild(deleteBtn);
    memoListItem.appendChild(memoListItemInner)
    memoList.appendChild(memoListItem);

    document.getElementById("inputText").value = "";
  }

  pushDeleteBtn();
})

// 削除ボタン押した時の処理
const pushDeleteBtn = () => {
  const deleteBtns = document.querySelectorAll(".deleteBtn");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      const deleteList = deleteBtn.closest(".memoList__item");
      deleteList.remove();
    })
  })
}
pushDeleteBtn();
