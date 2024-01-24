/*************************************
 * DOM操作 実践
 *************************************/
// 追加ボタン押下時に実行する関数
const onClickAdd = () => {
  const textEl = document.getElementById("add-text");
  const text = textEl.value;
  textEl.value = "";

  if (text !== "") {
    // 要素生成
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = text;
    const button = document.createElement("button");
    button.textContent = "削除";

    // 削除ボタン押下時に行を削除する処理
    button.addEventListener("click", () => {
      const deleteTarget = button.closest("li");
      document.getElementById("memo-list").removeChild(deleteTarget);
    })

    div.appendChild(p);
    div.appendChild(button);
    li.appendChild(div);

    document.getElementById("memo-list").appendChild(li);
  }

}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
