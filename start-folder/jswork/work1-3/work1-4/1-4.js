// 1_4.js

let wantApple = 4;    // 買いたい数
let stockApple = 3;   // 在庫数

// 在庫確認
if (wantApple <= stockApple) {
  console.log("希望通りカートに入れます。");
} else {
  console.log("在庫が足りません。在庫分だけカートに入れます。");
}

// 在庫分だけカートに追加（while）
let i = 0;
while (i < stockApple) {
  console.log("りんごをカートに追加しました");
  i++;
}

// 1〜在庫数までカウント（for）
for (let j = 1; j <= stockApple; j++) {
  console.log(`リンゴを買うのは${j}回目の処理です`);
}
