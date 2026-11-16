/* ============================================================
   走讀測試網站 內容資料檔（由「網站內容準備表」轉出的測試版）
   ------------------------------------------------------------
   之後要新增、修改內容，只要改這個檔案，不用動 index.html。
   ・文字用 "雙引號" 包起來，每一項後面記得加逗號。
   ・標註【暫時】的文字是表格裡還沒填（或填了數字佔位）的地方，請換成正式內容。
   ・地點照片：放進 images 資料夾，檔名用地點代號，例如 images/kongmiao.jpg，就會自動顯示。
   ・status: "draft" 代表內容還沒查證，網頁上會顯示「待查證」標籤；查證完成後改成 "ok"。
   ============================================================ */

window.SITE = {
  title: "走讀測試",
  date: "11/16（一）",   /* 【暫時】表格填的是 20261116，時間請補上，例：11/16（一）13:10–15:45 */
  subtitle: "【暫時】測試版｜一條路線，兩個地點",
  intro:
    "【暫時】這是走讀測試網站的測試版，用來確認路線、地圖、集章和拍照流程是否順利。正式內容之後再補上。",
  homeTag: "【暫時】走讀測試",          /* 首頁「你走的是哪一條路線？」上方的小字 */
  organizer: "【暫時】主辦單位待填",     /* 頁尾 */
  coOrganizer: "",                      /* 頁尾，沒有可留空 */
  /* ---------- 照片上傳設定 ----------
     uploadUrl：Google Apps Script 部署後的網址（設定方法見 README.md）。留空時照片只存在學生自己的手機。
     uploadKey：和 Apps Script 裡的 KEY 填一樣的文字。
     ※ 這個測試版刻意留空，避免把測試資料傳進義起走讀的雲端硬碟。 */
   uploadUrl: "https://script.google.com/macros/s/AKfycbw-Vi9SlfzM9t0mSBrPnzh0uJn3nz7bjwrjOY8Nn6IPkRFICdD7J4hYtjZwtrHkzXoP/exec",
  uploadKey: "bobo2026",
  maxPhotos: 10,
  /* ---------- 定位集章 ----------
     stampRadius：距離地點幾公尺內才能集章。孔廟和台文館只相隔約 90 公尺，建議改成 50。
     leaderCode：帶隊口令，請改成你們自己的數字，只告訴帶隊人員。 */
  stampRadius: 100,
  leaderCode: "0000",
  liveRefresh: 30,
  reward: "回到集合點，把這個畫面給工作人員看，就能領取小禮物！",
  meetingPoint: {
    name: "【暫時】集合點（名稱待填）",
    lat: 22.985940857833054, lng: 120.20791592563546,
    note: "出發前在這裡分組，走完回到這裡分享。"
  },
  /* 地圖上的地名標字：[地名, 緯度, 經度] */
  mapLabels: [
    ["台南孔廟", 22.991394368572866, 120.20400972718004],
    ["國立台灣文學館", 22.99211707776226, 120.20451389734575]
  ],
  /* 四種角色屬性（沿用義起走讀） */
  types: {
    wind:   { name: "風土系", color: "#3DB7E4", power: "飛行・生長・自然", items: "風、河流、田野、農作物" },
    food:   { name: "食光系", color: "#FF6C2F", power: "補充能量・變身",   items: "地方小吃、傳統料理、農產加工" },
    guard:  { name: "守護系", color: "#FF48B0", power: "防禦・守護・記憶", items: "老屋、廟宇、教堂、聚落建築" },
    story:  { name: "故事系", color: "#0078BF", power: "時間旅行・召喚故事", items: "長輩、職人、地方傳說" }
  }
};

window.ROUTES = [
  {
    id: "route-1",
    name: "路線一　老街記憶拼圖",
    color: "#FF48B0",
    summary: "範例：從百年老屋到巷弄小吃，一路觀察老街怎麼一層一層長成今天的樣子。",
    stops: ["kongmiao", "nmtl"]
  }
];

window.SPOTS = {
  "kongmiao": {
    name: "孔廟",
    fullName: "台南孔廟",
    lat: 22.9913943685728, lng: 120.20400972718, label: "left", icon: "gate",
    type: "guard",
    image: "",
    imageCredit: "攝影：王小明",
    card: "",
    status: "draft",
    intro: "這座古厝建於……",
    facts: ["範例小知識一", "範例小知識二"],
    mission: "找找看：門口有什麼特別的裝飾？畫下來。",
    elder: "",
    sources: []   /* 表格裡的網址還是 https://…，補上正式網址後填：{ title: "標題", url: "https://..." } */
  },
  "nmtl": {
    name: "台文館",
    fullName: "國立台灣文學館",
    lat: 22.9921170777622, lng: 120.204513897345, label: "right", icon: "house",
    type: "guard",
    image: "",
    imageCredit: "",
    card: "",
    status: "draft",
    intro: "這座古厝建於……",
    facts: [],
    mission: "【暫時】走讀任務待填",
    elder: "",
    sources: []
  }
};
