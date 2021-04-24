// цифры и символы
export const regNumbersOnly = '^[0-9]+$';
export const regDate = '^[0-9/]+$';
export const regNumbersAndSpace = '^[0-9 ]+$';
export const regNumbersMore = '^[0-9#№ ]+$';

// буквы и символы
export const regName = "^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ\\-' ]+[a-zA-Zа-яА-ЯёЁ']?$";
export const regSurname = '^s*[A-ZА-Яa-zа-яёЁ][A-ZА-Яa-zа-яёЁ]+([a-zа-яёЁ]+|-[A-ZА-Яa-zа-яёЁ][A-ZА-Яa-zа-яёЁ]+)?s*$';
export const regPatronymic = "^[a-zA-Z-а-яА-ЯёЁ\\-' ]*$";
export const regStreet = '^[A-Za-zА-Яа-я0-9-]+$';
export const regHouseNumber = '^[A-Za-zА-Яа-я0-9-\\/\\\\]+$';

// буквы и цифры и символы
export const regLettersNumbersOnly = '^[A-Za-zА-Яа-я0-9]+$';
export const regTextNumberMore = "^[a-zA-Zа-яА-ЯёЁ'0-9][a-zA-Z-а-яА-ЯёЁ'0-9#№,. ]+[a-zA-Zа-яА-ЯёЁ0-9',.]?$";

export const checkReg = (value, reg) => new RegExp(reg).test(value);

// eslint-disable-next-line max-len
export const isValid = (value, min, max, reg) => value.length > min && value.length < max && checkReg(value, reg);

export default {
  checkReg,
  isValid,
  regSurname,
  regName,
  regDate,
  regNumbersAndSpace,
  regTextNumberMore,
  regNumbersOnly,
  regLettersNumbersOnly,
  regNumbersMore,
  regPatronymic,
  regStreet,
  regHouseNumber,
};
