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

  qingshan: {
    id: 'qingshan', name: '青山', en: 'QING SHAN', tagline: '青茶專業製作', accent: '#2f6b3a',
    sizes: ['中杯 M', '大杯 L'],
    temps: ['正常冰', '少冰', '微冰', '去冰', '常溫', '溫熱'],
    sugars: ['正常糖', '少糖', '半糖', '微糖', '1分糖', '無糖'],
    toppings: ['琥珀珍珠', '蕎麥珍珠', '海鹽奶蓋', '蕎麥奶蓋', '菜燕', '青茶茶凍', '青茶婚貴', '杏仁凍'],
    milks: ['鮮奶', '燕麥奶'], // 那堤系列可升級燕麥奶
    categories: [
      { name: '青・原味青茶', items: [
        L('春青', { tag: '花香・口感輕' }), L('夏青', { tag: '木質香・口感重' }),
        L('秋青', { tag: '奶香・口感中' }), L('冬青', { tag: '清香・口感輕', rec: true }),
      ] },
      { name: '無・無咖啡因', items: [
        L('東方菊花茶', { decaf: true }), L('西穀蕎麥茶', { decaf: true }), L('南非國寶', { decaf: true }),
        L('北風桂花玄米茶', { decaf: true, rec: true }),
      ] },
      { name: '調', items: [
        L('青山綠水', { rec: true }), L('春青菊花'),
        L('蕎麥冬露', { rec: true, decaf: true, sizes: ['大杯 L'], minSugar: '半糖' }),
        L('春青冬露', { sizes: ['大杯 L'], minSugar: '半糖' }),
        L('菊花冬露', { decaf: true, sizes: ['大杯 L'], minSugar: '半糖' }),
        L('多多綠水', { sizes: ['大杯 L'] }),
      ] },
      { name: '料', items: [
        L('菜燕春青', { rec: true }), L('菜燕奶茶', { rec: true }), L('杏仁凍春青'), L('青茶婚貴奶茶'),
        L('琥珀珍珠奶茶', { rec: true }), L('蕎麥珍珠奶茶'), L('青茶凍天蟬那堤'), L('琥珀珍珠天蟬那堤'),
        L('蕎麥珍珠夏青那堤', { rec: true }),
      ] },
      { name: '茶', items: [L('綠水'), L('天蟬紅茶', { rec: true })] },
      { name: '蓋・鮮奶油奶蓋', items: [
        L('蕎麥奶蓋 綠水', { temps: ['少冰'] }), L('蕎麥奶蓋 玄米茶', { temps: ['少冰'], rec: true, decaf: true }),
        L('海鹽奶蓋 春青', { temps: ['少冰'], rec: true }), L('海鹽奶蓋 紅茶', { temps: ['少冰'], rec: true }),
        L('海鹽奶蓋 輕蘋香茶', { temps: ['少冰'], rec: true, sizes: ['中杯 M'] }),
      ] },
      { name: '奶', items: [
        L('山峰奶茶'), L('夏青那堤', { rec: true }), L('蕎麥那堤', { decaf: true }), L('天蟬那堤', { rec: true }), L('天蟬燕麥奶'),
      ] },
      { name: '果', items: [
        L('白甘蔗春青', { rec: true, noSugarFree: true }), L('香檸綠水', { noSugarFree: true }), L('柳丁綠水', { noSugarFree: true }),
        L('紅柚綠水', { rec: true, noSugarFree: true }), L('輕蘋香茶', { rec: true, noSugarFree: true }),
        L('荔枝春青', { rec: true, noSugarFree: true, tag: '含青茶凍' }),
      ] },
    ],
  },
};

// 依品名自動配色（杯中飲料顏色）
window.toneOf = function (name) {
  const rules = [
    [/抹茶/, '#8fae5d'], [/荔枝/, '#e6a0a8'], [/那堤|燕麥奶|奶茶/, '#d6b48c'], [/甘蔗|輕蘋|多多/, '#d9c77a'], [/柳丁|紅柚/, '#e9a948'], [/蕎麥(茶|冬露)$|^蕎麥奶蓋|玄米|國寶/, '#b8864e'], [/菊花/, '#e2c46a'], [/綠水$|春青$|夏青$|秋青$|^冬青$|冬露$/, '#c9b85c'], [/泰奶/, '#e39a5a'], [/麵茶/, '#cfa77a'], [/紅烏龍|烤茶$/, '#a8572c'], [/芭樂|青梅/, '#a9c96a'], [/芒果|柳橙|蜜柚|夏威夷/, '#e9a948'], [/草莓|櫻桃|火龍果|荔枝|玫瑰|蜜桃|山竹/, '#d9727f'],
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
// fill: 插畫用的餡料層（由下往上），只是示意；bread: 指定吐司；veg: 蛋奶素；rec: 店家推薦（菜單上的愛心）；spicy: 菜單上的辣椒標示
window.SANDWICH = {
  name: '布島小樹', en: 'BUDAO TREE · SANDOS', tagline: '職人手作・便利輕食', accent: '#6b8e4e',
  items: [
    { name: '鍾愛雞蛋沙拉', rec: true, veg: true, fill: ['lettuce', 'eggsalad'], bg: '#d9e6f0' },
    { name: '肉鬆雞蛋沙拉', fill: ['lettuce', 'eggsalad', 'floss'], bg: '#e1ead3' },
    { name: '香濃起司厚蛋', rec: true, veg: true, bread: '麥香吐司', fill: ['lettuce', 'egg', 'cheese'], bg: '#e6dff0' },
    { name: '法式雞胸厚蛋', fill: ['lettuce', 'tomato', 'chicken', 'egg'], bg: '#d8ebe2' },
    { name: '藍莓優格雞胸', rec: true, fill: ['lettuce', 'chicken', 'blueberry'], bg: '#f5e1e5' },
    { name: '松露厚蛋雞胸', bread: '麥香吐司', fill: ['lettuce', 'chicken', 'truffle'], bg: '#dde6ef' },
    { name: '香濃起司厚蛋培根', bread: '麥香吐司', fill: ['lettuce', 'bacon', 'egg', 'cheese'], bg: '#e2ecd7' },
    { name: '熔岩花生培根', fill: ['lettuce', 'bacon', 'peanut'], bg: '#dfe8f2' },
    { name: '切達起司香煎牛', fill: ['lettuce', 'tomato', 'beef', 'cheese'], bg: '#e8e1f1' },
    { name: '卡拉脆雞厚蛋', fill: ['lettuce', 'egg', 'katsu'], bg: '#d6e8ec' },
    { name: '嫩煎里肌厚蛋', spicy: true, fill: ['lettuce', 'tomato', 'pork', 'egg'], bg: '#e5eddb' },
  ],
};

// 三明治插畫：日式厚切三明治，切半的兩塊直立、露出切面（帶透視與光影）
// 每種餡料：相對厚度 + 繪製函式（x0~x1 寬、y 為頂端、h 為高度）
const SANDO_LAYERS = (() => {
  const wave = (x0, x1, y, amp, n) => {
    const step = (x1 - x0) / n; let d = `M${x0} ${y}`;
    for (let i = 0; i < n; i++) d += ` q${step / 2} ${i % 2 ? amp : -amp} ${step} 0`;
    return d;
  };
  const dots = (x0, x1, y, h, n, r, color, seed) => Array.from({ length: n }, (_, i) => {
    const fx = ((i * 37 + seed * 11) % 97) / 97, fy = ((i * 53 + seed * 7) % 89) / 89;
    return `<circle cx="${(x0 + 2 + fx * (x1 - x0 - 4)).toFixed(1)}" cy="${(y + 1.5 + fy * (h - 3)).toFixed(1)}" r="${r}" fill="${color}"/>`;
  }).join('');
  const slab = (x0, x1, y, h, c) => `<rect x="${x0}" y="${y}" width="${x1 - x0}" height="${h}" rx="2" fill="${c}"/>`;
  return {
    lettuce: [6, (x0, x1, y, h) => `<path d="${wave(x0 - 1.5, x1 + 1.5, y + 1.6, 1.6, 12)} L${x1 + 1.5} ${y + h} ${wave(x1 + 1.5, x0 - 1.5, y + h, 1.6, 10).slice(1).replace(/^[\d.-]+ [\d.-]+/, '')} Z" fill="#a6d163" stroke="#6fa33a" stroke-width="1"/>
      <path d="${wave(x0 - 2, x1 + 2, y + h * .55, 1.2, 8)}" stroke="#d9efb0" stroke-width="1" fill="none"/>`],
    tomato: [5, (x0, x1, y, h) => slab(x0 + 1, x1 - 1, y, h, '#e0503f') + `<rect x="${x0 + 4}" y="${y + 1.4}" width="${(x1 - x0) / 2 - 6}" height="${h - 2.8}" rx="1.5" fill="#f07c62"/><rect x="${(x0 + x1) / 2 + 2}" y="${y + 1.4}" width="${(x1 - x0) / 2 - 6}" height="${h - 2.8}" rx="1.5" fill="#f07c62"/>`],
    egg: [12, (x0, x1, y, h) => slab(x0 + 1, x1 - 1, y, h, '#f6c93f') + `<rect x="${x0 + 1}" y="${y + 1.5}" width="${x1 - x0 - 2}" height="${h * .28}" fill="#fbe08a" opacity=".8"/><path d="M${x0 + 1} ${y + h * .62}h${x1 - x0 - 2}" stroke="#eab42c" stroke-width="1"/>`],
    eggsalad: [16, (x0, x1, y, h) => `<path d="${wave(x0 - 1, x1 + 1, y + 2, 2, 7)} L${x1 + 1} ${y + h} L${x0 - 1} ${y + h} Z" fill="#fbf1cf"/>` + dots(x0, x1, y + 2, h - 2, 14, 1.6, '#f4c845', 1) + dots(x0, x1, y + 2, h - 2, 8, 1.1, '#fffdf6', 2)],
    chicken: [9, (x0, x1, y, h) => slab(x0 + 1, x1 - 1, y, h, '#efd8bf') + `<path d="M${x0 + 4} ${y + h * .35}h${x1 - x0 - 10}M${x0 + 8} ${y + h * .7}h${x1 - x0 - 14}" stroke="#ddbf9d" stroke-width="1" stroke-linecap="round"/>`],
    bacon: [6, (x0, x1, y, h) => `<path d="${wave(x0, x1, y + 1.5, 1.4, 6)} L${x1} ${y + h} ${wave(x1, x0, y + h, 1.4, 6).slice(1).replace(/^[\d.-]+ [\d.-]+/, '')} Z" fill="#c4524a"/><path d="${wave(x0 + 1, x1 - 1, y + h * .55, 1.2, 6)}" stroke="#f3c2b2" stroke-width="1.4" fill="none"/>`],
    beef: [9, (x0, x1, y, h) => slab(x0 + 1, x1 - 1, y, h, '#7a4330') + `<rect x="${x0 + 1}" y="${y + 1}" width="${x1 - x0 - 2}" height="2" fill="#9a5a40"/>` + dots(x0, x1, y, h, 6, .8, '#5b2f20', 3)],
    cheese: [4, (x0, x1, y, h) => slab(x0, x1 + 1, y, h, '#f5a623') + `<path d="M${x1 - 6} ${y + h} q2 6 4 0z M${x0 + 8} ${y + h} q1.6 4 3.2 0z" fill="#f5a623"/>`],
    katsu: [13, (x0, x1, y, h) => `<path d="${wave(x0 - 1, x1 + 1, y + 2, 1.8, 12)} L${x1 + 1} ${y + h - 1} ${wave(x1 + 1, x0 - 1, y + h - 1, 1.8, 12).slice(1).replace(/^[\d.-]+ [\d.-]+/, '')} Z" fill="#dd9535"/><rect x="${x0 + 4}" y="${y + 4}" width="${x1 - x0 - 8}" height="${h - 8}" rx="2" fill="#f5e6c8"/>` + dots(x0, x1, y, h, 18, .9, '#b56e1c', 4)],
    pork: [9, (x0, x1, y, h) => slab(x0 + 1, x1 - 1, y, h, '#c08452') + `<path d="M${x0 + 6} ${y + 2}l5 ${h - 4}M${x0 + 20} ${y + 2}l5 ${h - 4}M${x0 + 34} ${y + 2}l5 ${h - 4}M${x0 + 48} ${y + 2}l5 ${h - 4}" stroke="#8f5530" stroke-width="1.6" stroke-linecap="round"/>`],
    floss: [6, (x0, x1, y, h) => `<path d="${wave(x0, x1, y + 2, 2.2, 9)} L${x1} ${y + h} L${x0} ${y + h} Z" fill="#c98a4a"/><path d="${wave(x0 + 2, x1 - 2, y + h * .6, 1.5, 14)}" stroke="#e2ad6e" stroke-width=".9" fill="none"/>`],
    blueberry: [10, (x0, x1, y, h) => slab(x0 + 1, x1 - 1, y, h, '#fbf7f0') + dots(x0, x1, y, h, 9, 2.2, '#4f4692', 5) + dots(x0, x1, y, h, 5, .9, '#8f86d6', 6)],
    truffle: [12, (x0, x1, y, h) => slab(x0 + 1, x1 - 1, y, h, '#f6c93f') + `<rect x="${x0 + 1}" y="${y + 1.5}" width="${x1 - x0 - 2}" height="${h * .28}" fill="#fbe08a" opacity=".8"/>` + dots(x0, x1, y, h, 16, .7, '#3a2a20', 7)],
    peanut: [5, (x0, x1, y, h) => slab(x0, x1, y, h, '#b8743a') + `<path d="M${x0 + 10} ${y + h} q2 5 4 0z M${x1 - 14} ${y + h} q2 7 4 0z" fill="#b8743a"/>`],
  };
})();

// 側面看到的餡料顏色
const SANDO_SIDE = {
  lettuce: '#8fbf4f', tomato: '#d9483a', egg: '#f2c13a', eggsalad: '#f1e0a0', chicken: '#e6cdb0', bacon: '#b9473f', beef: '#6e3b2a',
  cheese: '#f0a020', katsu: '#d48a2e', pork: '#b07445', floss: '#be7f40', blueberry: '#e9e2ee', truffle: '#f2c13a', peanut: '#a8692f',
};

let sandoSeq = 0;
window.sandoSVG = function (fill) {
  const id = 'sd' + (sandoSeq++);
  const W = 80, H = 76, top = 22, bot = 22, dx = 14, dy = -9;
  const room = H - top - bot;
  const total = fill.reduce((n, k) => n + SANDO_LAYERS[k][0], 0);
  const spans = []; // [key, y, h]
  let y = H - bot;
  for (const k of fill) { const h = SANDO_LAYERS[k][0] * room / total; y -= h; spans.push([k, y, h]); }

  // 麵包切面上的小氣孔（固定位置，避免每次不同）
  const pores = (y0, h) => Array.from({ length: 14 }, (_, i) => {
    const fx = ((i * 41 + 7) % 97) / 97, fy = ((i * 29 + 3) % 83) / 83;
    return `<ellipse cx="${(5 + fx * (W - 10)).toFixed(1)}" cy="${(y0 + 4 + fy * (h - 8)).toFixed(1)}" rx="${(1 + (i % 3) * .5).toFixed(1)}" ry=".8" fill="#e9d3a8" opacity=".55"/>`;
  }).join('');
  const r = 1.5; // 與頂面、側面接合處要是直角，才不會露縫
  const topFace = `<path d="M0 ${top}V${r}Q0 0 ${r} 0H${W - r}Q${W} 0 ${W} ${r}V${top}Z" fill="url(#${id}-crumb)"/>${pores(0, top)}
    <path d="M1.3 ${top}V${r}Q1.3 1.3 ${r} 1.3H${W - r}Q${W - 1.3} 1.3 ${W - 1.3} ${r}V${top}" fill="none" stroke="#bf7b36" stroke-width="2.6"/>`;
  const botFace = `<path d="M0 ${H - bot}V${H - r}Q0 ${H} ${r} ${H}H${W - r}Q${W} ${H} ${W} ${H - r}V${H - bot}Z" fill="url(#${id}-crumb)"/>${pores(H - bot, bot)}
    <path d="M1.3 ${H - bot}V${H - r}Q1.3 ${H - 1.3} ${r} ${H - 1.3}H${W - r}Q${W - 1.3} ${H - 1.3} ${W - 1.3} ${H - r}V${H - bot}" fill="none" stroke="#bf7b36" stroke-width="2.6"/>`;

  // 餡料：底色圖形 + 上亮下暗的光影
  const filling = spans.map(([k, y, h]) => SANDO_LAYERS[k][1](1, W + .5, y, h) +
    `<rect x="0" y="${y}" width="${W}" height="${h}" fill="url(#${id}-shade)" pointer-events="none"/>`).join('') +
    `<rect x="0" y="${top}" width="${W}" height="3" fill="#3a2414" opacity=".14"/>`; // 上片吐司壓下的陰影

  // 斜上方看到的吐司頂面、右側面
  // 往左多畫 1.5、上下多 .4，塞在切面底下，避免接縫露白
  const sideBand = (y0, h, fillc, extra = '') => `<path d="M${W - 1.5} ${y0 - .4}L${W + dx} ${y0 + dy - .4}V${y0 + dy + h + .4}L${W - 1.5} ${y0 + h + .4}z" fill="${fillc}" ${extra}/>`;
  const side = sideBand(0, top, `url(#${id}-crust)`) +
    spans.map(([k, y, h]) => sideBand(y, h, SANDO_SIDE[k]) + sideBand(y, h, '#2a1a0e', 'opacity=".28"')).join('') +
    sideBand(H - bot, bot, `url(#${id}-crust)`);
  const roof = `<path d="M0 1.5V0l${dx} ${dy}h${W}l${-dx} ${-dy}v1.5z" fill="url(#${id}-roof)"/>
    <path d="M${dx * .3} ${dy * .3 + .2}h${W - 4}" stroke="#f1c27f" stroke-width="1.2" opacity=".7" stroke-linecap="round"/>`;

  const half = cls => `<g class="${cls}">${side}${roof}${botFace}${filling}${topFace}</g>`;
  return `
  <svg class="sando" viewBox="-6 -46 152 136" aria-hidden="true">
    <defs>
      <radialGradient id="${id}-crumb" cx="50%" cy="45%" r="70%"><stop offset="0" stop-color="#fffbf2"/><stop offset=".7" stop-color="#fbefd6"/><stop offset="1" stop-color="#f1d9ab"/></radialGradient>
      <linearGradient id="${id}-roof" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#d9953f"/><stop offset="1" stop-color="#b8702c"/></linearGradient>
      <linearGradient id="${id}-crust" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c6802f"/><stop offset="1" stop-color="#9c5e22"/></linearGradient>
      <linearGradient id="${id}-shade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".32"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".16"/></linearGradient>
      <filter id="${id}-blur" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="3"/></filter>
    </defs>
    <ellipse class="shadow" cx="68" cy="81" rx="64" ry="6" fill="#3a2414" opacity=".2" filter="url(#${id}-blur)"/>
    <g transform="translate(6 4)">${half('back')}</g>
    <g transform="translate(6 4)">${half('front')}</g>
  </svg>`;
};
