# 越來越好玩

繁體中文越南旅遊介紹網站，已完成首頁與六個目的地：河內、下龍灣、峴港、會安、胡志明市、富國島。使用純 HTML、CSS、JavaScript，不需後端、資料庫、安裝套件或建置。

## 內容與檔案

```text
AGENTS.md                     協作規則、設計與內容格式、擴充流程
index.html                    六地地圖、北中南目的地、旅行口袋指南
credits.html                  按目的地分組的簡潔圖片來源清單
places/
  ha-noi.html                 河內：還劍湖、古街、水上木偶戲
  ha-long.html                下龍灣：遊船、驚訝洞、獨木舟或竹筏
  da-nang.html                峴港：美溪海灘、巴拿山、漢市場
  hoi-an.html                 會安：古鎮、燈籠、錦清竹籃船
  ho-chi-minh-city.html        胡志明市：中央郵局、濱城市場、阮惠步行街
  phu-quoc.html               富國島：星灘、度假住宿、香島纜車
assets/
  css/style.css               全站共用樣式
  js/main.js                  首頁區域導覽提示
  images/                     本地實景照片與 SVG 地圖
    credits.md                作者、來源、授權、使用者素材安排
  data/
    travel-facts.md           航程、匯率、預算與地圖的查核依據
    destinations.json         六地編輯資料，供維護參考，網站不需載入
    new-photo-sources.json    本次搜尋下載照片的來源資料
    vietnam-outline.geojson   Natural Earth 越南輪廓
check-browser.ps1             開發時的可選瀏覽器驗證，不是網站依賴
```

每個目的地頁都有三項完整體驗、簡單行程、交通與家庭提醒、資料來源及前往其餘五地的連結。封面與該頁內文使用不同照片，首頁卡片沿用目的地封面。市場、龜塔、泳池與竹籃船屬內文題材；使用者低解析素材保留，不強行放大。

## 本機預覽

在檔案總管雙擊 `index.html`，以 Chrome、Edge 或 Firefox 開啟。六個地圖標記與卡片均能直接進入目的地頁，頁末可切換其他目的地。照片與主要內容不需網路；外部來源連結需連網。

也可在 VS Code 使用 Live Server 對 `index.html` 選擇「Open with Live Server」，這是可選工具。網站本身無套件與建置流程。

以開發者工具切換手機寬度（例如 375px），檢查卡片單欄與圖片裁切。用 Tab 巡覽，確認焦點清楚，再用 Enter 啟用連結；第一個 Tab 可跳至主要內容。

## GitHub Pages

目前未部署。日後將資料夾內容推送至 GitHub 儲存庫，保留 `index.html` 在根目錄。到 Settings → Pages，選擇 Deploy from a branch，指定實際分支與 `/ (root)`。所有頁面與資源使用相對路徑，可放在專案子路徑下。`.gitignore` 已排除本機瀏覽器資料與預覽截圖。

## 內容維護

先閱讀 `AGENTS.md`。新增目的地沿用流程 A，更新首頁、地圖與所有目的地導覽；增加景點沿用流程 B，每頁維持 3～5 項。不複製獨立 CSS。

查核日期：2026-11-15。來源列於各頁末。票價、場次、班次與開放狀況不使用未確認數字；匯率與預算標明快照時間與估算條件。照片作者集中於頁末可展開區，完整紀錄見 `assets/images/credits.md`。
