/**
 * 口委點餐收單後端（Google Apps Script）
 * 綁定在一份 Google 試算表上：每位老師一列，同名重送會覆蓋舊的選擇。
 * 只接收資料、不提供讀取，所以只有試算表擁有者看得到大家的選擇。
 */
const SHEET_NAME = '選擇';
const HEADERS = ['更新時間', '姓名', '飲料', '三明治', '原始資料'];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function drinkText_(d) {
  if (!d) return '不需要';
  const toppings = d.toppings && d.toppings.length ? '加' + d.toppings.join('、') : '';
  return [d.brandName, d.item, d.size, d.temp, d.sweetener, d.sugar, d.milk, toppings, d.note].filter(Boolean).join('・');
}

function sandwichText_(s) {
  if (!s) return '不需要';
  return [s.shop, s.item, s.note].filter(Boolean).join('・');
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const body = JSON.parse(e.postData.contents);
    const name = String(body.name || '').trim().slice(0, 40);
    if (!name) return json_({ ok: false, error: 'name required' });
    const drink = body.drink || null, sandwich = body.sandwich || null;

    const sh = sheet_();
    const names = sh.getRange(1, 2, sh.getLastRow(), 1).getValues().map(r => r[0]);
    const idx = names.indexOf(name); // 0 是表頭
    const row = [new Date(), name, drinkText_(drink), sandwichText_(sandwich), JSON.stringify({ drink, sandwich })];
    if (idx > 0) sh.getRange(idx + 1, 1, 1, row.length).setValues([row]);
    else sh.appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}
