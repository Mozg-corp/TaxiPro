const setFirstStepToState = (state, tariff) => {
  state.registrationData.tariffName = tariff;
};
const setSecondStepToState = (state, agregators) => {
  state.registrationData.agregators = agregators;
};
const setThirdStepToState = (state, passport) => {
  state.registrationData.passport = passport;
};
const setFourStepToState = (state, driverLessons) => {
  state.registrationData.driverLessons = driverLessons;
};

export default {
  setFirstStepToState,
  setSecondStepToState,
  setThirdStepToState,
  setFourStepToState,
};
