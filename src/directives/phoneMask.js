/**
 * Конвертирует число в номер телефона
 * @param number { string }
 * @returns { string }
 */
const convertNumberToPhone = (number) => {
  const code = number.substring(0, 3).padEnd(3, '_');
  const numbPart1 = number.substring(3, 6).padEnd(3, '_');
  const numbPart2 = number.substring(6, 8).padEnd(2, '_');
  const numbPart3 = number.substring(8, 10).padEnd(2, '_');
  return `( ${code} ) ${numbPart1} - ${numbPart2} - ${numbPart3}`;
};

/**
 * Конвертирует строку с телефоном в число
 * @param phone { string }
 * @returns { string }
 */
const convertPhoneToNumber = (phone) => {
  const numbers = phone.match(/[0-9]/g);
  return numbers ? numbers.join('') : '';
};

/**
 * Возвращает позицию курсора относительно чисел
 * @returns { number }
 */
const getPositionRegardingNumbers = (el) => {
  let pos = 0;
  for (let i = 0; i < el.selectionStart; i += 1) {
    if (/^[0-9]$/.test(el.value[i])) pos += 1;
  }
  return pos;
};

/**
 * Устанавливает новую позицию курсора в маске телефона
 * @param el
 * @param position { number }
 */
const setPositionForPhone = (el, position) => {
  let pos = 0;
  for (let i = 0; i < el.value.length; i += 1) {
    if (/^[0-9]$/.test(el.value[i])) pos += 1;
    if (pos === position) {
      pos = i + 1;
      break;
    }
  }

  /* eslint-disable no-param-reassign */
  el.selectionEnd = pos >= el.value.length ? el.value.length : pos;
  el.selectionStart = el.selectionEnd;
  /* eslint-enable no-param-reassign */
};

const update = (el) => {
  /* eslint-disable no-param-reassign */
  el.setAttribute('data-number', convertPhoneToNumber(el.value));
  el.setAttribute('data-phone', convertNumberToPhone(el.dataset.number));
  el.value = el.dataset.phone;
  /* eslint-enable no-param-reassign */
};

export default {
  beforeMount(el) {
    update(el);

    el.addEventListener('keydown', (event) => {
      if (el.selectionStart !== el.selectionEnd) return;

      const { value } = el;

      /* eslint-disable no-param-reassign */
      if (event.keyCode === 8) { // Backspace
        while (el.selectionStart > 0 && !/^[0-9]$/.test(value[el.selectionStart - 1])) {
          el.selectionStart -= 1;
        }
        el.selectionEnd = el.selectionStart;
      } else if (event.keyCode === 46) { // Delete
        while (el.selectionEnd < value.length - 1 && !/^[0-9]$/.test(value[el.selectionEnd])) {
          el.selectionEnd += 1;
        }
        el.selectionStart = el.selectionEnd;
      }
      /* eslint-enable no-param-reassign */
    });

    el.addEventListener('input', () => {
      let position = getPositionRegardingNumbers(el);
      if (position > 10) position = 10;

      update(el);
      setPositionForPhone(el, position);
    });
  },
};
