/**
 * Конвертирует время в строку формата 'm:ss'
 * @param time
 * @returns {string}
 */
export const convertTimeToMinutesStr = (time) => {
  const s = Math.ceil((time % 60000) / 1000);
  const m = Math.floor(time / 60000);
  return `${m}:${s.padStart(2, '0')}`;
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
 * Возвращает данные из локального хранилища
 * @param key { string }
 * @returns { * }
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
  getFromStorage,
  setToStorage,
};
