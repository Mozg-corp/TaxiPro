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
 * Инициализирует состояние авторизации
 * @param commit
 */
const init = ({ commit }) => {
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
  setToStorage('phone', getters.getPhone);
  commit(MT.SET_SMS, null);
  setToStorage('sms', getters.getSMS);
  commit(MT.SET_TOKEN, null);
  setToStorage('token', getters.getToken);
  commit(MT.SET_USER, null);
  setToStorage('user', getters.getUser);
  axios.post(URL.sendPhone, {
    phone: getters.getPhone,
  })
    .then((response) => {
      const data = JSON.parse(response.data);
      if (data.success) {
        commit(MT.SET_SMS, data);
        setToStorage('sms', getters.getSMS);
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
  commit(MT.SET_LOADING);
  commit(MT.SET_TOKEN, null);
  setToStorage('token', getters.getToken);
  commit(MT.SET_USER, null);
  setToStorage('user', getters.getUser);
  axios.post(URL.sendCode, {
    phone: getters.getPhone,
    code: String(code).padStart(4, '0'),
  })
    .then(({ data }) => {
      if (data.success) {
        commit(MT.SET_TOKEN, data.user && data.user.token ? data.user.token : null);
        setToStorage('token', getters.getToken);
        commit(MT.SET_USER, data.user);
        setToStorage('user', getters.getUser);
        commit(MT.SET_PHONE, null);
        setToStorage('phone', getters.getPhone);
        commit(MT.SET_SMS, null);
        setToStorage('sms', getters.getSMS);
        commit(MT.SET_RESPONSE);
      } else {
        commit(MT.SET_ERROR, data.error);
      }
    })
    .catch((error) => {
      commit(MT.SET_ERROR, error);
    });
};

export default {
  init,
  sendPhone,
  sendCode,
};
