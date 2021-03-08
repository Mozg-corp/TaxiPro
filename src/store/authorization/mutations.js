import { basic, authorization } from '@/store/mutationTypes';

const MT = {
  ...basic,
  ...authorization,
};

/**
 * @param state
 */
const decAttemptsForCode = (state) => {
  if (state.sms) state.sms.attempts -= 1;
};

/**
 * @param state
 */
const setCurrentTime = (state) => {
  state.currentTime = Math.floor(Date.now() / 1000);
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
const setSms = (state, data) => {
  if (data) {
    const NOW = Math.floor(Date.now() / 1000);
    const DEADLINE = 180;
    const RESUBMIT_TIME = 90;
    state.sms = {
      attempts: 3,
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
  [MT.DEC_ATTEMPTS_FOR_CODE]: decAttemptsForCode,
  [MT.SET_CURRENT_TIME]: setCurrentTime,
  [MT.SET_ERROR]: setError,
  [MT.SET_LOADING]: setLoading,
  [MT.SET_PHONE]: setPhone,
  [MT.SET_RESPONSE]: setResponse,
  [MT.SET_SMS]: setSms,
  [MT.SET_TIMER]: setTimer,
  [MT.SET_TOKEN]: setToken,
  [MT.SET_USER]: setUser,
};
