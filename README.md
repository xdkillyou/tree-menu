# Tree-munu

## Demo

[Link](https://xdkillyou.github.io/)

## 規格

- Vue 3.3.11
- Vite 5.0.10
- TypeScript
- UnoCSS
- PNPM
- VueUse

## 基本需求

- 側邊選單

  - 有按鈕可以收合、展開選單
  - 展開時，點擊空白處需收合選單
  - 點擊選單內內容，可以highlight並展開子元素
  - 一次只會有一個展開

- 主頁面
  - 畫面正中心(撇除header)有個九宮格，有指定的樣式
  - 指定九宮格部分格子會有閃爍動畫，有指定的樣式
  - 指定九宮格部分格子會有移動小球，有指定的樣式，並且格子內的動畫不會影響到小球

## 額外需求

- 側邊選單

  - 實作下拉選單，須包含所有種類，選擇後自動展開該項目 - Done
  - 實作記憶功能，關閉分頁後開啟可以記憶項目 - Done
  - 在效能考量下設計可收合、展開超過一百層的選單

- 主頁面
  - 使用不同動畫執行方式繪製動畫
  - 四顆球往同一座標移動
  - 在效能考量下，設計可同時存在一百顆球，且指定飛行起點、終點

## 遇到的問題

- UnoCSS自定義keyframs & animation設定，[參考](https://juejin.cn/post/7116730180252467236)
- 動畫Index issue，[參考](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)
