import {
  convertTimeToMinutesStr as convertToMinutesStr,
} from '@/store/libs';

// config

const getSmsTimeout = (state) => state.config.smsTimeout;

// storage

const getPhone = (state) => state.storage.phone ?? '';

const getSmsTimeWaiting = (state) => {
  const waiting = state.config.smsTimeout + state.storage.smsTimeLabel - (new Date()).getTime();
  return waiting > 0 ? waiting : 0;
};

const getSmsTimeWaitingAsStr = (state, getters) => convertToMinutesStr(getters.getSmsTimeWaiting);

const getToken = (state) => state.storage.token ?? '';

export default {
  // config
  getSmsTimeout,
  // storage
  getPhone,
  getSmsTimeWaiting,
  getSmsTimeWaitingAsStr,
  getToken,
};
