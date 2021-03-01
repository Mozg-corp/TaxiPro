const getError = (state) => state.error;
const getCurrentTime = (state) => state.currentTime;
const getPhone = (state) => state.phone;
const getSMS = (state) => state.sms;
const getTimerId = (state) => state.timer;
const getToken = (state) => state.token;
const getUser = (state) => state.user;
const isError = (state) => state.error !== null;
const isLoading = (state) => state.loading;
// sms
const getDeadline = (state) => state.sms ? state.sms.deadline : null;
const getRequestTime = (state) => state.sms ? state.sms.requestTime : null;
const getResubmitTime = (state) => state.sms ? state.sms.resubmitTime : null;

export default {
  getError,
  getCurrentTime,
  getPhone,
  getSMS,
  getTimerId,
  getToken,
  getUser,
  isError,
  isLoading,
  // sms
  getDeadline,
  getRequestTime,
  getResubmitTime,
};
