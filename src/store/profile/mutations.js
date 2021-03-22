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
const setFiveStepToState = (state, car) => {
  state.registrationData.car = car;
};
const setLicenseToState = (state, license) => {
  state.registrationData.license = license;
};

export default {
  setFirstStepToState,
  setSecondStepToState,
  setThirdStepToState,
  setFourStepToState,
  setFiveStepToState,
  setLicenseToState,
};
