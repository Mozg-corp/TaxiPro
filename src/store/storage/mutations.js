import { storage as MT } from '@/store/mutationTypes';

export default {
  /**
   * @param state
   * @param phone { number }
   */
  [MT.SET_PHONE]: (state, phone) => {
    state.storage.phone = phone;
  },

  /**
   * @param state
   * @param time { number }
   */
  [MT.SET_SMS_TIME_LABEL]: (state, time) => {
    state.storage.timeLabel = time;
  },

  /**
   * @param state
   * @param token { string }
   */
  [MT.SET_TOKEN]: (state, token) => {
    state.storage.token = token;
  },

  /**
   * @param state
   * @param value { number }
   */
  [MT.SET_UPDATED_AT]: (state, value) => {
    state.storage.updatedAt = value;
  },
};
