const setFirstStepToState = ({ commit }, tariff) => {
  commit('setFirstStepToState', tariff);
  return tariff;
};
const secondStepToState = ({ commit }, agregators) => {
  commit('setSecondStepToState', agregators);
  return agregators;
};
const setThirdStepToState = ({ commit }, passport) => {
  commit('setThirdStepToState', passport);
  return passport;
};
const setFourStepToState = ({ commit }, driverLessons) => {
  commit('setFourStepToState', driverLessons);
  return driverLessons;
};

export default {
  setFirstStepToState,
  secondStepToState,
  setThirdStepToState,
  setFourStepToState,
};
