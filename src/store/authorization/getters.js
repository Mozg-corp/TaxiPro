const getError = (s) => s.error;
const getCurrentTime = (s) => s.currentTime;
const getPhone = (s) => s.phone;
const getSms = (s) => s.sms;
const getTimerId = (s) => s.timer;
const getToken = (s) => s.token;
const getUser = (s) => s.user;
const isError = (s) => s.error !== null;
const isLoading = (s) => s.loading;
const isLogged = (s) => s.user;
// sms
const getAttempts = (s) => (s.sms ? s.sms.attempts : null);
const getDeadline = (s) => (s.sms ? s.sms.deadline : null);
const getRequestTime = (s) => (s.sms ? s.sms.requestTime : null);
const getResubmitTime = (s) => (s.sms ? s.sms.resubmitTime : null);

const getDeadlineRemaining = (s, g) => {
  if (!s.sms || !s.sms.deadline) return null;
  return Math.max(s.sms.deadline - g.getCurrentTime, 0);
};

const getResubmitTimeRemaining = (s, g) => {
  if (!s.sms || !s.sms.resubmitTime) return null;
  return Math.max(s.sms.resubmitTime - g.getCurrentTime, 0);
};

export default {
  getError,
  getCurrentTime,
  getPhone,
  getSms,
  getTimerId,
  getToken,
  getUser,
  isError,
  isLoading,
  isLogged,
  // sms
  getAttempts,
  getDeadline,
  getDeadlineRemaining,
  getRequestTime,
  getResubmitTime,
  getResubmitTimeRemaining,
};
