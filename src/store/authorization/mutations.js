import { basic, authorization } from '@/store/mutationTypes';

const MT = {
  ...basic,
  ...authorization,
};

/**
 * @param state
 */
const setCurrentTime = (state) => {
  state.currentTime = Date.now();
};

/**
 * @param state
 * @param phone { string|null }
 */
const setPhone = (state, phone) => {
  state.phone = phone;
};

/**
 * @param state
 * @param data {{ requestTime: number, deadline: number, resubmitTime: number }}
 */
const setSMS = (state, data) => {
  if (data) {
    const NOW = Date.now();
    const DEADLINE = 60000;
    const RESUBMIT_TIME = 90000;
    state.sms = {
      requestTime: data.requestTime ?? NOW,
      deadline: data.deadline ?? NOW + DEADLINE,
      resubmitTime: data.resubmitTime ?? NOW + RESUBMIT_TIME,
    };
  } else state.sms = null;
};

/**
 * @param state
 * @param id { number|null }
 */
const setTimer = (state, id = null) => {
  state.timer = id;
};

/**
 * @param state
 * @param token { string|null }
 */
const setToken = (state, token) => {
  state.token = token;
};

/**
 * @param state
 * @param user {{}}
 */
const setUser = (state, user) => {
  state.user = user;
};

/**
 * @param state
 * @param error { {}|null }
 */
const setError = (state, error) => {
  state.error = error;
  state.loading = false;
};

/**
 * @param state
 */
const setLoading = (state) => {
  state.error = null;
  state.loading = true;
};

/**
 * @param state
 */
const setResponse = (state) => {
  state.error = null;
  state.loading = false;
};

export default {
  [MT.SET_CURRENT_TIME]: setCurrentTime,
  [MT.SET_ERROR]: setError,
  [MT.SET_LOADING]: setLoading,
  [MT.SET_PHONE]: setPhone,
  [MT.SET_RESPONSE]: setResponse,
  [MT.SET_SMS]: setSMS,
  [MT.SET_TIMER]: setTimer,
  [MT.SET_TOKEN]: setToken,
  [MT.SET_USER]: setUser,
};
