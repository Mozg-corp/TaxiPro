const specialKeys = {
  8: 'Backspace',
  9: 'Tab',
  13: 'Enter',
  27: 'Escape',
  33: 'PageUp',
  34: 'PageDown',
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  46: 'Delete',
};

const directives = {
  decimal: 'decimal',
  eng: 'eng',
  numbers: 'numbers',
  punctuation: 'punctuation',
  rus: 'rus',
  special: 'special',
};

const symbols = {
  [directives.decimal]: /^[.,]+$/,
  [directives.numbers]: /^[0-9]+$/,
  [directives.eng]: /^[a-zA-Z]+$/,
  [directives.rus]: /^[а-яёА-ЯЁ]+$/,
  [directives.punctuation]: /^[!";:?()-_{}',.\s[\]]+$/,
  [directives.special]: /^[@#$№%^&*+=|<>\\/]+$/,
};

/**
 * Проверяет соответствие клавиши директиве
 * @param key { string }
 * @param directive { string }
 */
const isAllowedKey = (key, directive) => symbols[directive].test(key);

/**
 * Проверяет нажатие на сочетание клавиш
 * @param keyCode { number }
 * @param ctrlKey { boolean }
 * @param keys { array } 65-A, 67-C, 88-X
 * @returns { boolean }
 */
const isKeyboardShortcut = (keyCode, ctrlKey, keys = [65, 67, 88]) => {
  if (!ctrlKey) return false;
  return keys.includes(keyCode);
};

/**
 * Проверяет нажатие на специальные клавиши
 * @param keyCode
 * @returns { boolean }
 */
const isSpecialKey = (keyCode) => Boolean(specialKeys[keyCode]);

export default {
  mounted(el, binding) {
    const { modifiers } = binding;

    el.addEventListener('keydown', (event) => {
      const { ctrlKey, key, keyCode } = event;

      if (isKeyboardShortcut(keyCode, ctrlKey, [65, 67, 88]) || isSpecialKey(keyCode)) return;

      if ((modifiers.decimal && isAllowedKey(key, directives.decimal))
        || (modifiers.numbers && isAllowedKey(key, directives.numbers))
        || (modifiers.eng && modifiers.alpha && isAllowedKey(key, directives.eng))
        || (modifiers.rus && modifiers.alpha && isAllowedKey(key, directives.rus))
        || (modifiers.punctuation && isAllowedKey(key, directives.punctuation))
        || (modifiers.special && isAllowedKey(key, directives.special))) return;

      event.preventDefault();
    });
  },
};
