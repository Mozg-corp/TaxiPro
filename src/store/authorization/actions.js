import { basic, authorization } from '@/store/mutationTypes';
import { authorization as URL } from '@/store/urls';
import axios from 'axios';
import {
  getFromStorage,
  setToStorage,
} from '@/store/libs';

const MT = {
  ...basic,
  ...authorization,
};

/**
 * Удаляет таймер
 * @param commit
 * @param getters
 */
const removeTimer = ({ commit, getters }) => {
  clearInterval(getters.getTimerId);
  commit(MT.SET_TIMER, null);
};

/**
 * Устанавливает таймер
 * @param commit
 * @param getters
 */
const setTimer = ({ commit, getters }) => {
  if (getters.getTimerId !== null) removeTimer({ commit });
  commit(MT.SET_CURRENT_TIME);

  const timer = setInterval(() => {
    commit(MT.SET_CURRENT_TIME);
    const { getCurrentTime, getDeadline, getResubmitTime } = getters;
    if (getCurrentTime >= getDeadline && getCurrentTime >= getResubmitTime) {
      removeTimer({ commit, getters });
    }
  }, 1000);

  commit(MT.SET_TIMER, timer);
};

/**
 * Сохраняет состояние в хранилище браузера
 * @param getters
 */
const saveToStorage = (getters) => {
  setToStorage('phone', getters.getPhone);
  setToStorage('sms', getters.getSms);
  setToStorage('token', getters.getToken);
};

/**
 * Инициализирует состояние авторизации
 * @param commit
 * @param getters
 */
const init = ({ commit, getters }) => {
  let phone = getFromStorage('phone');
  let sms = getFromStorage('sms');
  let token = getFromStorage('token');

  if (token) {
    sms = null;
    phone = null;
  } else token = null;

  commit(MT.SET_PHONE, phone);
  commit(MT.SET_SMS, sms);
  commit(MT.SET_TOKEN, token);

  if (sms) setTimer({ commit, getters });
};

/**
 * Сброс состояние авторизации
 * @param commit
 * @param getters
 */
const reset = ({ commit, getters }) => {
  commit(MT.SET_SMS, null);
  commit(MT.SET_TOKEN, null);
  commit(MT.SET_USER, null);
  saveToStorage(getters);
};

/**
 * Отправляет номер телефона
 * @param commit
 * @param getters
 * @param phone { string|number }
 */
const sendPhone = ({ commit, getters }, phone) => {
  commit(MT.SET_LOADING);
  commit(MT.SET_PHONE, String(phone).padStart(11, '0'));
  commit(MT.SET_SMS, null);
  commit(MT.SET_TOKEN, null);
  commit(MT.SET_USER, null);
  saveToStorage(getters);
  axios.post(URL.sendPhone, {
    phone: getters.getPhone,
  })
    .then(({ data }) => {
      if (data.success) {
        commit(MT.SET_SMS, data);
        saveToStorage(getters);
        setTimer({ commit, getters });
        commit(MT.SET_RESPONSE);
      } else {
        commit(MT.SET_ERROR, data.error);
      }
    })
    .catch((error) => {
      commit(MT.SET_ERROR, error);
    });
};

/**
 * Отправляет код из sms
 * @param commit
 * @param getters
 * @param code { string|number }
 */
const sendCode = ({ commit, getters }, code) => {
  if (getters.getSms && getters.getSms.attempts < 1) return;
  commit(MT.SET_LOADING);
  commit(MT.SET_TOKEN, null);
  commit(MT.SET_USER, null);
  commit(MT.DEC_ATTEMPTS_FOR_CODE);
  saveToStorage(getters);
  axios.post(URL.sendCode, {
    phone: getters.getPhone,
    code: String(code).padStart(4, '0'),
  })
    .then(({ data }) => {
      if (data.success) {
        commit(MT.SET_TOKEN, data.user && data.user.token ? data.user.token : null);
        commit(MT.SET_USER, data.user);
        commit(MT.SET_PHONE, null);
        commit(MT.SET_SMS, null);
        saveToStorage(getters);
        removeTimer({ commit, getters });
        commit(MT.SET_RESPONSE);
      } else {
        commit(MT.SET_ERROR, data.error);
      }
    })
    .catch((error) => {
      commit(MT.SET_ERROR, error);
    });
};

/**
 * Инициализирует состояние авторизации
 * @param commit
 * @param phone { string|number }
 */
const fixedPhone = ({ commit }, phone) => {
  commit('fixedPhone', phone);
};

export default {
  init,
  reset,
  removeTimer,
  setTimer,
  sendPhone,
  sendCode,
  fixedPhone,
};
