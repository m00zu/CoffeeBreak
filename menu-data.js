// 菜單資料（2026/10 整理，依各店公告與菜單整理文章；季節限定品項可能隨檔期更換）
// t: 'both' 冷熱皆可（預設）｜'ice' 僅冰｜'hot' 僅熱；tag: 顯示標籤
const L = (name, extra = {}) => ({ name, ...extra });

window.MENU = {
  louisa: {
    id: 'louisa', name: '路易莎咖啡', en: 'LOUISA', tagline: '', accent: '#8a5a2b',
    sizes: ['中杯', '大杯'],
    milks: ['鮮奶', '燕麥奶'],
    sugar: true,
    categories: [
      { name: '義式咖啡', items: [
        L('美式黑咖啡'), L('咖啡拿鐵', { tag: '人氣' }), L('卡布奇諾'), L('燕麥拿鐵'), L('路易莎特調咖啡'),
        L('鴛鴦咖啡'), L('抹茶風味拿鐵'), L('生椰拿鐵', { t: 'ice' }), L('生椰美式', { t: 'ice' }), L('西西里咖啡', { t: 'ice' }),
      ] },
      { name: '風味拿鐵', items: [
        L('焦糖風味拿鐵'), L('榛果風味拿鐵'), L('香草風味拿鐵'), L('橘皮風味拿鐵'), L('黑糖風味拿鐵'),
        L('焦糖瑪奇朵'), L('義式摩卡'),
      ] },
      { name: '精品咖啡', items: [
        L('莊園級美式'), L('莊園級拿鐵'), L('澳洲小拿鐵 Flat White', { t: 'hot' }),
      ] },
      { name: '小農牧場', items: [
        L('小農經典拿鐵'), L('小農輕奶拿鐵'), L('小農雪點鮮奶茶'),
        L('黑糖風味小農鮮奶', { tag: '無咖啡' }), L('風味小農鮮奶', { tag: '無咖啡' }),
      ] },
      { name: '奶茶・茶拿鐵', items: [
        L('伯爵鮮奶茶'), L('精選英式奶茶'), L('精選英式紅茶拿鐵'), L('黑糖雪點奶茶'), L('泰式鮮奶茶'),
        L('100% 一番抹茶鮮奶茶'), L('大臣賞 焙茶鮮奶茶'), L('紅蜜鮮奶茶', { tag: '無咖啡因' }),
      ] },
      { name: '茶飲', items: [
        L('精選英式紅茶'), L('伯爵紅茶'), L('愛丁堡女王紅茶'), L('錫蘭紅茶'), L('薰香綠茶'), L('四季翠玉青茶'),
        L('太妃糖風味紅茶'), L('貴妃荔枝風味紅茶'), L('經典水果茶'), L('南非國寶青檸茶', { tag: '無咖啡因' }),
        L('水蜜桃蘋果風味茶', { tag: '無咖啡因' }),
        L('柳橙鮮果風味綠茶', { t: 'ice' }), L('檸檬鮮果風味綠茶', { t: 'ice' }),
        L('百香鮮果風味綠茶', { t: 'ice' }), L('芒果鮮果風味綠茶', { t: 'ice' }),
      ] },
      { name: '巧克力・冰沙', items: [
        L('義式巧克力'), L('英國百年茶莊紅茶冰沙', { t: 'ice' }), L('義式巧克力冰沙', { t: 'ice' }),
        L('100% 一番抹茶鮮奶冰沙', { t: 'ice' }), L('大臣賞 焙茶鮮奶冰沙', { t: 'ice' }),
        L('拿鐵咖啡冰沙', { t: 'ice' }), L('摩卡咖啡冰沙', { t: 'ice' }),
      ] },
    ],
  },

  tea: {
    id: 'tea', name: '壽奶茶', en: 'MILK TEA', tagline: '微糖微冰，最對味', accent: '#9a6a3a',
    sizes: ['500cc'],
    temps: ['正常冰', '少冰', '微冰', '去冰（含小碎冰）', '完全去冰'],
    sugars: ['無糖', '1分', '3分（微糖）', '5分（半糖）', '7分（少糖）', '全糖'],
    toppings: ['粉圓 小珍珠', '芝士奶蓋'],
    milks: [],
    categories: [
      { name: '鮮奶類', items: [
        L('黑糖錫蘭鮮奶茶', { tag: '招牌', minSugar: '3分（微糖）' }),
        L('鐵觀音鮮奶茶', { sweeteners: ['黑糖', '蔗糖'] }),
        L('半熟烤茶鮮奶茶', { sweeteners: ['黑糖', '蔗糖'] }),
        L('昭和 焙茶鮮奶茶'), L('貴妃 普洱鮮奶茶'),
        L('黑糖純鮮奶', { tag: '無咖啡因', minSugar: '3分（微糖）' }),
      ] },
      { name: '原創產品', items: [
        L('髒髒芝士奶蓋可可', { cheese: true }), L('髒髒芝士奶蓋抹茶', { cheese: true }),
        L('鐵觀音芝士奶蓋麵茶', { cheese: true }), L('鐵觀音芝士奶蓋麵茶 2.0', { cheese: true }),
      ] },
      { name: '純茶類', items: [L('特級紅烏龍'), L('半熟烤茶')] },
    ],
  },
};

// 依品名自動配色（杯中飲料顏色）
window.toneOf = function (name) {
  const rules = [
    [/抹茶/, '#8fae5d'], [/泰奶/, '#e39a5a'], [/麵茶/, '#cfa77a'], [/紅烏龍|烤茶$/, '#a8572c'], [/芭樂|青梅/, '#a9c96a'], [/芒果|柳橙|蜜柚|夏威夷/, '#e9a948'], [/草莓|櫻桃|火龍果|荔枝|玫瑰|蜜桃|山竹/, '#d9727f'],
    [/檸|百香|青檸|洋甘菊|蕎麥|烏龍|綠茶|青茶|翠玉/, '#d8c06a'], [/巧克力|可可|摩卡/, '#5e3a24'],
    [/星冰樂|冰沙|雲朵|歐蕾|小農|鮮奶$|醇乳/, '#e6cfb1'], [/奶茶|紅茶那堤|伯爵茶那堤|福吉|焙茶|泰式|紅蜜/, '#c8a27c'],
    [/紅茶|水果茶/, '#a8572c'], [/拿鐵|那堤|卡布|瑪奇朵|馥列白|密斯朵|鴛鴦/, '#c49a6c'],
    [/美式|冷萃|手沖|曼|耶加|肯亞|哥倫比亞|深焙|精選咖啡|特調咖啡|西西里/, '#3b2416'],
  ];
  for (const [re, c] of rules) if (re.test(name)) return c;
  return '#b98b5e';
};

window.hasMilk = name => /拿鐵|那堤|卡布|瑪奇朵|馥列白|摩卡|密斯朵|鴛鴦|歐蕾|巧克力/.test(name) && !/燕麥|豆奶|生椰|小農/.test(name);

window.cupSVG = function (tone, hot = true) {
  return `
  <svg class="cup" viewBox="0 0 80 96" aria-hidden="true">
    ${hot ? `<g class="steam" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".45">
      <path d="M30 22c-4-5 4-8 0-14"/><path d="M40 20c-4-5 4-8 0-14"/><path d="M50 22c-4-5 4-8 0-14"/></g>` : ''}
    <path d="M14 30h52l-6 58a6 6 0 0 1-6 5H26a6 6 0 0 1-6-5z" fill="#fffaf3" stroke="rgba(0,0,0,.12)"/>
    <path d="M17 44h46l-4.3 42a5 5 0 0 1-5 4.5H26.3a5 5 0 0 1-5-4.5z" fill="${tone}"/>
    <ellipse cx="40" cy="44" rx="23" ry="3.2" fill="rgba(255,255,255,.35)"/>
    <rect x="10" y="26" width="60" height="7" rx="3.5" fill="#fffaf3" stroke="rgba(0,0,0,.12)"/>
    ${!hot ? `<rect x="27" y="56" width="10" height="10" rx="2" fill="rgba(255,255,255,.55)" transform="rotate(-12 32 61)"/>
      <rect x="42" y="62" width="9" height="9" rx="2" fill="rgba(255,255,255,.5)" transform="rotate(15 46 66)"/>` : ''}
  </svg>`;
};

// 布島小樹 手作三明治（依店家菜單照片，未含限量供應品項）
// fill: 餡料顏色（插畫用）；bread: 指定吐司；veg: 蛋奶素；rec: 店家推薦（菜單上的愛心）；spicy: 菜單上的辣椒標示
window.SANDWICH = {
  name: '布島小樹', en: 'BUDAO TREE · SANDOS', tagline: '職人手作・便利輕食', accent: '#6b8e4e',
  items: [
    { name: '鍾愛雞蛋沙拉', desc: '綿密蛋沙拉，最單純的幸福', rec: true, veg: true, fill: ['#f6e08a'], bg: '#fbf0c4' },
    { name: '肉鬆雞蛋沙拉', desc: '蛋沙拉配上肉鬆，鹹甜剛好', fill: ['#f6e08a', '#c98a4a'], bg: '#f7e4c8' },
    { name: '香濃起司厚蛋', desc: '厚蛋疊上濃郁起司', rec: true, veg: true, bread: '麥香吐司', fill: ['#f4c542', '#f2a93b'], bg: '#fde7b8' },
    { name: '法式雞胸厚蛋', desc: '嫩雞胸與厚蛋，清爽有飽足感', fill: ['#f4c542', '#ead7b4'], bg: '#efe6d3' },
    { name: '藍莓優格雞胸', desc: '藍莓的酸甜遇上優格與雞胸', rec: true, fill: ['#6c64a8', '#f3eee6', '#ead7b4'], bg: '#e4e1f3' },
    { name: '松露厚蛋雞胸', desc: '淡淡松露香，厚蛋與雞胸', bread: '麥香吐司', fill: ['#f4c542', '#5a4a3c', '#ead7b4'], bg: '#e9e2d8' },
    { name: '香濃起司厚蛋培根', desc: '起司、厚蛋、培根三重奏', bread: '麥香吐司', fill: ['#f2a93b', '#f4c542', '#c0504d'], bg: '#fbe0cf' },
    { name: '熔岩花生培根', desc: '濃郁花生醬 × 鹹香培根', fill: ['#b8743a', '#c0504d'], bg: '#f3dcc6' },
    { name: '切達起司香煎牛', desc: '香煎牛肉配切達起司', fill: ['#f2a93b', '#7a3e2a'], bg: '#f1d9cb' },
    { name: '卡拉脆雞厚蛋', desc: '酥脆雞排疊上厚蛋', fill: ['#d9963a', '#f4c542'], bg: '#fbe6c0' },
    { name: '嫩煎里肌厚蛋', desc: '嫩煎里肌，香氣帶勁', spicy: true, fill: ['#a8623a', '#f4c542'], bg: '#f6dccb' },
  ],
};

// 三明治插畫：切半的兩塊三角吐司（hover 時會分開），露出生菜與餡料
let sandoSeq = 0;
window.sandoSVG = function (fill) {
  const id = 'sd' + (sandoSeq++);
  const tri = 'M14 88 56 24l42 64z';
  const layers = [...fill].reverse();
  const h = Math.min(9, 26 / layers.length), base = 78;
  const half = (cls, shade) => `
    <g class="${cls}">
      <path d="${tri}" fill="#f7e3b5"/>
      <g clip-path="url(#${id})">
        ${layers.map((c, i) => `<rect x="0" y="${base - (i + 1) * h}" width="120" height="${h + .5}" fill="${c}"/>`).join('')}
        <path d="M0 ${base} q5 -5 10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 v5 H0z" fill="#8cc063"/>
        <rect x="0" y="${base + 3}" width="120" height="20" fill="#f7e3b5"/>
      </g>
      <path d="${tri}" fill="none" stroke="#d49a55" stroke-width="5" stroke-linejoin="round"/>
      ${shade ? `<path d="${tri}" fill="#3a2414" opacity=".12"/>` : ''}
    </g>`;
  return `
  <svg class="sando" viewBox="0 0 120 100" aria-hidden="true">
    <defs><clipPath id="${id}"><path d="M20 85 56 31l36 54z"/></clipPath></defs>
    <ellipse class="shadow" cx="60" cy="93" rx="44" ry="4" fill="#3a2414" opacity=".12"/>
    ${half('back', true)}${half('front', false)}
  </svg>`;
};
