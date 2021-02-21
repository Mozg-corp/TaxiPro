import { storage as MT } from '@/store/mutationTypes';
import {
  convertToNumber,
  getFromStorage,
  setToStorage,
} from '@/store/libs';

/**
 * Устанавливает время обновления данных в хранилище
 * @param commit
 */
const setUpdatedTime = ({ commit }) => {
  const time = (new Date()).getTime();
  commit(MT.SET_UPDATED_AT, time);
  setToStorage('updatedAt', time);
};

/**
 * Обновляет данные в хранилище приложения или браузера
 * @param commit
 * @param state
 */
const update = ({ commit, state }) => {
  const updatedAt = getFromStorage('updatedAt');
  if (updatedAt === state.updatedAt) return;

  if (updatedAt === null || state.updatedAt > updatedAt) {
    setToStorage('phone', state.storage.phone);
    setToStorage('smsTimeLabel', state.storage.smsTimeLabel);
    setToStorage('token', state.storage.token);

    setToStorage('updatedAt', state.storage.updatedAt);
  } else {
    commit(MT.SET_PHONE, getFromStorage('phone'));
    commit(MT.SET_SMS_TIME_LABEL, getFromStorage('smsTimeLabel'));
    commit(MT.SET_TOKEN, getFromStorage('token'));

    commit(MT.SET_UPDATED_AT, updatedAt);
  }
};

/**
 * Устанавливает номер телефона пользователя (логин)
 * @param commit
 * @param state
 * @param newPhone { number|string }
 */
const setPhone = ({ commit, state }, newPhone) => {
  const phone = convertToNumber(newPhone);
  if (phone === null) return;
  update({ state, commit });
  commit(MT.SET_PHONE, phone);
  setToStorage('phone', phone);
  setUpdatedTime({ commit });
};

/**
 * Устанавливает временную метку при запросе sms
 * @param commit
 * @param state
 */
const setSmsTimeLabel = ({ commit, state }) => {
  update({ state, commit });
  const time = (new Date()).getTime();
  commit(MT.SET_SMS_TIME_LABEL, time);
  setToStorage('smsTimeLabel', time);
  setUpdatedTime({ commit });
};

/**
 * Устанавливает токен пользователя
 * @param state
 * @param commit
 * @param newToken { string }
 */
const setToken = ({ state, commit }, newToken) => {
  if (typeof newToken !== 'string') return;
  update({ state, commit });
  commit(MT.SET_TOKEN, newToken);
  setToStorage('token', newToken);
  setUpdatedTime({ commit });
};

export default {
  setPhone,
  setSmsTimeLabel,
  setToken,
  update,
};
