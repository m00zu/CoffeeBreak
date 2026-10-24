# 上線步驟

## 1. 建立收單後端（Google 試算表 + Apps Script，約 5 分鐘）
1. 開一份新的 Google 試算表（例如命名「口委點餐」）。
2. 選單「擴充功能 → Apps Script」，把 `apps-script/Code.gs` 的內容整份貼上，儲存。
3. 右上「部署 → 新增部署作業」→ 類型選「網頁應用程式」
   - 執行身分：**我**
   - 誰可以存取：**所有人**
4. 授權後複製「網頁應用程式網址」（`https://script.google.com/macros/s/.../exec`）。
5. 貼到 `config.js` 的 `window.ENDPOINT = '...'`。

之後每位老師送出的選擇會出現在試算表「選擇」分頁，同名重送會覆蓋。
修改 Code.gs 後要「部署 → 管理部署作業 → 編輯 → 新版本」才會生效。

## 2. 放上網路（GitHub Pages，免費）
1. 在 GitHub 建一個 repository，上傳 `index.html`、`config.js`、`menu-data.js`（`mocks/`、`apps-script/` 不必上傳）。
2. Settings → Pages → Source 選 `main` 分支、根目錄 → Save。
3. 約一分鐘後會得到網址 `https://<帳號>.github.io/<repo>/`，傳給口委即可。

## 本機預覽
```
cd MenuWeb && python3 -m http.server 8765
```
開啟 http://127.0.0.1:8765/ 。`ENDPOINT` 留空時為示範模式，資料只存在自己的瀏覽器。
