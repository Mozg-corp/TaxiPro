/**
 * Конвертирует время в строку формата 'm:ss'
 * @param time { number } - в секундах
 * @returns { string }
 */
export const convertTimeToMinutesStr = (time) => {
  const s = Math.ceil(time % 60);
  const m = Math.floor(time / 60);
  return `${m}:${String(s).padStart(2, '0')}`;
};

/**
 * Конвертирует в число
 * @param value {*}
 * @returns { number|null }
 */
export const convertToNumber = (value) => {
  switch (typeof value) {
    default: return null;
    case 'string': return !Number.isNaN(Number(value)) ? Number(value) : null;
    case 'number': return value;
  }
};

/**
 * Возвращает соответствующую числу форму слова
 * @param numb { number }
 * @param forms { string }
 * @returns {*}
 */
export const declOfNum = (numb, forms) => {
  const formsList = forms.split(',');
  const n = Math.abs(numb) % 100;
  const nd = n % 10;
  if (n > 10 && n < 20) return formsList[2] ?? formsList[0];
  if (nd > 1 && nd < 5) return formsList[1] ?? formsList[0];
  if (nd === 1) return formsList[0];
  return formsList[2] ?? formsList[0];
};

/**
 * Возвращает данные из локального хранилища
 * @param key { string }
 * @returns {*}
 */
export const getFromStorage = (key) => JSON.parse(window.localStorage.getItem(key));

/**
 * Сохраняет данные в локальное хранилище
 * @param key { string }
 * @param value {*}
 */
export const setToStorage = (key, value) => window.localStorage.setItem(
  key, JSON.stringify(value),
);

export default {
  convertTimeToMinutesStr,
  convertToNumber,
  declOfNum,
  getFromStorage,
  setToStorage,
};
