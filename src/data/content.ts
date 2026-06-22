import {
  Activity,
  Apple,
  Bath,
  Bed,
  Bone,
  Brain,
  ClipboardCheck,
  Clock3,
  Dog,
  HeartPulse,
  Home,
  Map,
  ShieldCheck,
  Siren,
  Sparkles,
  Stethoscope,
  Utensils,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type GuideSection = {
  slug: "prepare" | "care" | "training" | "health";
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  icon: LucideIcon;
  accent: "coral" | "teal" | "sun" | "leaf";
  highlights: string[];
  blocks: {
    title: string;
    icon: LucideIcon;
    points: string[];
  }[];
  reminders: string[];
  related: { label: string; path: string }[];
};

export type DogProfile = {
  id: string;
  name: string;
  size: string;
  activity: string;
  grooming: string;
  difficulty: string;
  tags: string[];
  bestFor: string;
  reminder: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  helper: string;
  options: {
    label: string;
    description: string;
    weights: Record<string, number>;
  }[];
};

export const guideSections: GuideSection[] = [
  {
    slug: "prepare",
    title: "新手準備",
    eyebrow: "Before adoption",
    summary: "先確認時間、空間、預算與照護分工，讓狗狗回家不是一時衝動。",
    intro:
      "第一次養狗最重要的不是買齊所有用品，而是先確認生活能不能穩定接住牠。把準備做在前面，後面的訓練和照護會輕鬆很多。",
    icon: ClipboardCheck,
    accent: "coral",
    highlights: ["生活節奏評估", "居家安全整理", "第一個月預算", "家人分工"],
    blocks: [
      {
        title: "先檢查生活條件",
        icon: Clock3,
        points: [
          "每天至少保留固定陪伴、餵食、散步與清潔時間。",
          "確認工作、上課或出差時，是否有人能協助照看。",
          "租屋或社區規範要先確認能否養狗，避免狗狗到家後才被迫轉手。",
        ],
      },
      {
        title: "打造安全回家路線",
        icon: Home,
        points: [
          "收好電線、藥品、清潔劑、小物件與容易被咬壞的物品。",
          "先規劃睡覺、吃飯、如廁與休息區，讓狗狗有穩定邊界。",
          "準備牽繩、胸背、名牌、外出水壺與外出袋，接回家的第一天就能使用。",
        ],
      },
      {
        title: "預算不要只算飼料",
        icon: Wallet,
        points: [
          "第一個月常見支出包含基本用品、飼料、健康檢查、疫苗與驅蟲。",
          "長期支出還有美容、玩具、訓練、寄宿與突發醫療預備金。",
          "先設定每月固定照護預算，會比事後補洞更穩定。",
        ],
      },
    ],
    reminders: [
      "不要只因外表可愛就決定犬種，活動量與照護需求更關鍵。",
      "領養或購買前都要確認來源透明、健康紀錄清楚。",
      "幼犬、成犬、老犬的準備重點不同，先問清楚年齡與過去生活習慣。",
    ],
    related: [
      { label: "看日常照護", path: "/care" },
      { label: "做適合犬種測驗", path: "/quiz" },
    ],
  },
  {
    slug: "care",
    title: "日常照護",
    eyebrow: "Daily care",
    summary: "從餵食、散步、清潔到陪伴，把每天都會發生的事建立成穩定習慣。",
    intro:
      "狗狗需要的是可預期的生活。固定作息、適量運動、乾淨環境與溫和陪伴，會讓牠更容易放鬆，也更容易學會規矩。",
    icon: HeartPulse,
    accent: "teal",
    highlights: ["餵食規律", "散步安排", "清潔美容", "陪伴與休息"],
    blocks: [
      {
        title: "餵食先求穩定",
        icon: Utensils,
        points: [
          "選擇符合年齡、體型與活動量的主食，換食時循序混合。",
          "固定餵食時間，避免人類食物變成討食習慣。",
          "水碗保持乾淨，炎熱天氣或外出後要特別留意飲水。",
        ],
      },
      {
        title: "散步是身心照護",
        icon: Map,
        points: [
          "散步不只是上廁所，也是在嗅聞、放鬆與消耗精力。",
          "剛開始選安靜路線，讓狗狗慢慢適應車聲、人群與其他狗。",
          "高溫時段避開柏油路，必要時改成清晨或傍晚外出。",
        ],
      },
      {
        title: "清潔要變成小儀式",
        icon: Bath,
        points: [
          "梳毛、擦腳、檢查耳朵與指甲可以短時間、多頻率練習。",
          "洗澡頻率依膚況、毛量與活動環境調整，不必過度清潔。",
          "每次清潔後給予稱讚或小獎勵，讓狗狗把照護和安全感連在一起。",
        ],
      },
    ],
    reminders: [
      "突然大量喝水、食慾明顯變化或活動力下降，都值得記錄並諮詢獸醫。",
      "玩具要定期檢查破損，避免誤吞。",
      "照護不是一次做到完美，而是每天穩穩累積。",
    ],
    related: [
      { label: "看訓練與行為", path: "/training" },
      { label: "看健康觀察", path: "/health" },
    ],
  },
  {
    slug: "training",
    title: "訓練與行為",
    eyebrow: "Training",
    summary: "用清楚規則與正向獎勵，建立狗狗聽得懂、家人也做得到的互動方式。",
    intro:
      "訓練不是控制狗狗，而是讓牠知道怎麼做會被理解、被獎勵。新手最需要的是一致性：全家用同一套規則，狗狗才不會混亂。",
    icon: Brain,
    accent: "sun",
    highlights: ["基本指令", "如廁習慣", "獨處練習", "吠叫與咬咬"],
    blocks: [
      {
        title: "基本指令從短時間開始",
        icon: Bone,
        points: [
          "坐下、等待、過來、放開可以每天練 3 到 5 分鐘。",
          "先在安靜環境成功，再慢慢增加干擾。",
          "獎勵要即時，狗狗才知道剛剛哪個行為是對的。",
        ],
      },
      {
        title: "如廁需要路線和時機",
        icon: Sparkles,
        points: [
          "睡醒、吃飯後、玩耍後是常見如廁時機，先帶到固定位置。",
          "成功後立刻稱讚，失誤時清潔乾淨，不用責罵。",
          "幼犬控制能力有限，初期需要更高頻率帶去如廁。",
        ],
      },
      {
        title: "問題行為先看需求",
        icon: ShieldCheck,
        points: [
          "咬東西可能是換牙、無聊、焦慮或精力沒有出口。",
          "吠叫先觀察觸發點，再用距離、遮蔽、替代行為與獎勵處理。",
          "獨處練習從短時間開始，不要一開始就讓狗狗撐很久。",
        ],
      },
    ],
    reminders: [
      "全家人要用同一個口令和規則，不然狗狗會很難判斷。",
      "懲罰可能讓狗狗害怕或躲避，優先使用正向引導。",
      "若行為嚴重影響生活，可以尋求合格訓練師或獸醫行為諮詢。",
    ],
    related: [
      { label: "先檢查準備", path: "/prepare" },
      { label: "做適合犬種測驗", path: "/quiz" },
    ],
  },
  {
    slug: "health",
    title: "健康觀察",
    eyebrow: "Health watch",
    summary: "學會觀察日常變化與警訊，需要時及早帶給獸醫評估。",
    intro:
      "這裡提供的是日常觀察方向，不是診斷。新手可以先學會記錄食慾、精神、排泄、皮膚與行動變化，帶著資訊和獸醫討論會更有效率。",
    icon: Stethoscope,
    accent: "leaf",
    highlights: ["疫苗與驅蟲概念", "日常紀錄", "常見警訊", "獸醫溝通"],
    blocks: [
      {
        title: "預防照護先問獸醫",
        icon: ShieldCheck,
        points: [
          "疫苗、驅蟲、心絲蟲與結紮規劃，需依年齡、健康狀態與生活環境評估。",
          "剛到家的狗狗建議安排健康檢查，建立基本紀錄。",
          "不要自行使用人類藥物或來路不明的保健品。",
        ],
      },
      {
        title: "每天觀察四件事",
        icon: Activity,
        points: [
          "食慾和喝水量是否和平常差很多。",
          "精神、走路、呼吸與互動狀態是否明顯改變。",
          "便便、尿尿、皮膚、耳朵和眼睛是否出現異常變化。",
        ],
      },
      {
        title: "警訊不要硬撐",
        icon: Siren,
        points: [
          "持續嘔吐、腹瀉、呼吸急促、抽搐、昏沉或疑似中毒，應盡快尋求獸醫協助。",
          "外傷、被咬、誤食異物或巧克力等風險食物，也需要及時處理。",
          "不確定嚴重程度時，先打電話詢問動物醫院會比自行判斷安全。",
        ],
      },
    ],
    reminders: [
      "本頁內容僅供新手建立觀察習慣，不能取代獸醫診療。",
      "記錄發生時間、症狀照片、食物與活動變化，可幫助獸醫判斷。",
      "定期健檢能在問題變嚴重前更早發現。",
    ],
    related: [
      { label: "回日常照護", path: "/care" },
      { label: "看新手準備", path: "/prepare" },
    ],
  },
];

export const dogProfiles: DogProfile[] = [
  {
    id: "mixed",
    name: "米克斯",
    size: "小型到大型都有",
    activity: "依個體而定",
    grooming: "多數中等",
    difficulty: "中等",
    tags: ["個性多元", "適應力佳", "認養友善"],
    bestFor: "願意認識個別狗狗個性、也能接受外型和體型不完全可預測的新手。",
    reminder: "米克斯差異很大，建議多和中途或收容單位聊聊牠的日常習慣。",
  },
  {
    id: "shiba",
    name: "柴犬",
    size: "中小型",
    activity: "中高",
    grooming: "換毛期較明顯",
    difficulty: "中高",
    tags: ["獨立", "乾淨", "有主見"],
    bestFor: "喜歡獨立型狗狗、能穩定訓練並尊重狗狗界線的人。",
    reminder: "柴犬可愛但不一定黏人，召回、牽繩和社會化要早點練。",
  },
  {
    id: "poodle",
    name: "貴賓犬",
    size: "玩具到標準型",
    activity: "中等",
    grooming: "需要固定美容",
    difficulty: "中等",
    tags: ["聰明", "學習快", "低掉毛感"],
    bestFor: "想要互動性高、願意安排美容和腦力遊戲的新手。",
    reminder: "聰明也代表容易無聊，日常要安排嗅聞、訓練和陪伴。",
  },
  {
    id: "maltese",
    name: "馬爾濟斯",
    size: "小型",
    activity: "低到中",
    grooming: "需要梳理美容",
    difficulty: "中等",
    tags: ["親人", "體型小", "陪伴型"],
    bestFor: "居住空間較小、希望狗狗陪伴感強，且能維持毛髮照護的人。",
    reminder: "小型犬也需要散步、社會化和規矩，不建議只抱著不讓牠探索。",
  },
  {
    id: "golden",
    name: "黃金獵犬",
    size: "大型",
    activity: "中高",
    grooming: "掉毛較明顯",
    difficulty: "中等",
    tags: ["友善", "親人", "運動需求高"],
    bestFor: "有足夠空間、時間和體力，喜歡戶外活動的家庭。",
    reminder: "大型犬幼犬期活力很強，牽繩禮儀和跳撲管理要提早做。",
  },
  {
    id: "labrador",
    name: "拉布拉多",
    size: "大型",
    activity: "高",
    grooming: "中等掉毛",
    difficulty: "中等",
    tags: ["熱情", "食慾好", "愛活動"],
    bestFor: "能提供規律運動、訓練和飲食管理的新手家庭。",
    reminder: "拉布拉多常很愛吃，零食訓練要搭配份量控制。",
  },
  {
    id: "corgi",
    name: "柯基",
    size: "中小型",
    activity: "中高",
    grooming: "掉毛明顯",
    difficulty: "中等",
    tags: ["活潑", "聰明", "短腿長身"],
    bestFor: "喜歡活潑狗狗、能安排散步和體重管理的人。",
    reminder: "留意體重與跳上跳下的頻率，避免讓身體負擔過大。",
  },
  {
    id: "frenchie",
    name: "法國鬥牛犬",
    size: "小型到中小型",
    activity: "低到中",
    grooming: "短毛但需皺褶清潔",
    difficulty: "中高",
    tags: ["安靜感", "親人", "怕熱"],
    bestFor: "活動量偏低、能注意環境溫度與呼吸狀況的人。",
    reminder: "短吻犬在炎熱潮濕天氣要格外小心，運動安排應保守。",
  },
  {
    id: "pomeranian",
    name: "博美",
    size: "小型",
    activity: "中等",
    grooming: "毛量高需梳理",
    difficulty: "中等",
    tags: ["警覺", "外向", "小巧"],
    bestFor: "喜歡小型、活潑、存在感強的狗狗，且願意做社會化的人。",
    reminder: "博美容易對聲音有反應，吠叫管理和社會化要溫和持續。",
  },
  {
    id: "border-collie",
    name: "邊境牧羊犬",
    size: "中型",
    activity: "很高",
    grooming: "中等",
    difficulty: "高",
    tags: ["極聰明", "工作慾強", "需要挑戰"],
    bestFor: "生活非常主動、願意投入訓練、運動與腦力遊戲的人。",
    reminder: "牠不只是聰明，也需要大量任務感；忙碌新手通常要非常慎重。",
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: "home",
    question: "你的居住空間比較接近哪一種？",
    helper: "不是大空間才適合養狗，但空間會影響體型和活動安排。",
    options: [
      {
        label: "公寓或套房，附近可散步",
        description: "希望狗狗體型不要太大，日常以規律短散步為主。",
        weights: { maltese: 3, poodle: 2, pomeranian: 2, frenchie: 2, mixed: 1 },
      },
      {
        label: "一般住宅，有穩定活動區",
        description: "可以接受中小型到中型犬，也能安排外出活動。",
        weights: { shiba: 2, corgi: 2, poodle: 2, mixed: 2, frenchie: 1 },
      },
      {
        label: "空間寬敞，很常戶外活動",
        description: "能接住大型犬或高活動量狗狗的生活需求。",
        weights: { golden: 3, labrador: 3, "border-collie": 2, mixed: 1 },
      },
    ],
  },
  {
    id: "time",
    question: "你每天能穩定投入多少陪伴與活動時間？",
    helper: "包含散步、訓練、清潔、陪玩與只是安靜陪牠。",
    options: [
      {
        label: "約 1 小時內",
        description: "希望照護節奏簡單，活動量不要太高。",
        weights: { maltese: 3, frenchie: 3, pomeranian: 1, poodle: 1 },
      },
      {
        label: "約 1 到 2 小時",
        description: "可安排固定散步和短訓練，是多數家庭可行節奏。",
        weights: { poodle: 3, corgi: 2, shiba: 2, mixed: 2, golden: 1 },
      },
      {
        label: "2 小時以上，喜歡訓練和戶外",
        description: "願意把狗狗當成生活夥伴一起活動。",
        weights: { labrador: 3, golden: 3, "border-collie": 3, corgi: 1 },
      },
    ],
  },
  {
    id: "energy",
    question: "你喜歡狗狗的個性比較像？",
    helper: "每隻狗都不同，這裡先抓你偏好的互動模式。",
    options: [
      {
        label: "黏人陪伴型",
        description: "喜歡狗狗常在身邊、有明顯互動感。",
        weights: { maltese: 3, golden: 2, labrador: 2, poodle: 2, frenchie: 1 },
      },
      {
        label: "有主見但穩定",
        description: "可以接受狗狗比較獨立，需要慢慢建立默契。",
        weights: { shiba: 3, mixed: 2, corgi: 1, frenchie: 1 },
      },
      {
        label: "聰明好動，需要任務",
        description: "想一起玩訓練、遊戲或戶外挑戰。",
        weights: { "border-collie": 3, poodle: 2, labrador: 2, corgi: 2 },
      },
    ],
  },
  {
    id: "grooming",
    question: "你能接受多少美容與清潔工作？",
    helper: "掉毛、梳毛、美容費和皮膚照護都要一起考量。",
    options: [
      {
        label: "越簡單越好",
        description: "可以日常擦拭，但不想太頻繁美容。",
        weights: { frenchie: 3, mixed: 2, shiba: 1, labrador: 1 },
      },
      {
        label: "能固定梳毛或美容",
        description: "願意把毛髮照護列入固定行程。",
        weights: { poodle: 3, maltese: 3, pomeranian: 2, golden: 1 },
      },
      {
        label: "掉毛也可以，只要狗狗適合",
        description: "重點是性格和生活型態，清潔可以配合。",
        weights: { golden: 2, corgi: 2, shiba: 2, labrador: 2, mixed: 1 },
      },
    ],
  },
  {
    id: "beginner",
    question: "你希望第一隻狗的挑戰程度是？",
    helper: "沒有零挑戰的狗狗，但可以選擇更適合新手練習的節奏。",
    options: [
      {
        label: "希望盡量好上手",
        description: "想先建立信心，訓練和照護難度不要太高。",
        weights: { poodle: 3, maltese: 2, golden: 2, mixed: 2 },
      },
      {
        label: "可以接受一些個性挑戰",
        description: "願意學習訓練，也能穩定處理小麻煩。",
        weights: { shiba: 2, corgi: 2, pomeranian: 2, frenchie: 2 },
      },
      {
        label: "願意大量投入訓練",
        description: "可以把訓練、運動和腦力活動當成日常重點。",
        weights: { "border-collie": 3, labrador: 2, golden: 1, corgi: 1 },
      },
    ],
  },
];

export const homeSteps = [
  {
    title: "先想清楚",
    text: "確認時間、預算、家人分工與居住規範。",
    icon: ClipboardCheck,
  },
  {
    title: "接回家前",
    text: "規劃睡覺、吃飯、如廁和休息空間。",
    icon: Bed,
  },
  {
    title: "建立作息",
    text: "固定餵食、散步、清潔和短訓練。",
    icon: Apple,
  },
  {
    title: "觀察調整",
    text: "記錄健康與行為變化，需要時找專業協助。",
    icon: Dog,
  },
];
