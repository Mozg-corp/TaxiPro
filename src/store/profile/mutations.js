const setFirstStepToState = (state, tariff) => {
  state.registrationData.tariffName.value = tariff;
};
const setSecondStepToState = (state, agregators) => {
  state.registrationData.agregators.value = agregators;
};
const setThirdStepToState = (state, passport) => {
  state.registrationData.passport.value = passport;
};
const setFourStepToState = (state, driverLessons) => {
  state.registrationData.driverLessons.value = driverLessons;
};
const setFiveStepToState = (state, car) => {
  state.registrationData.car.value = car;
};
const setLicenseToState = (state, license) => {
  state.registrationData.license.value = license;
};

export default {
  setFirstStepToState,
  setSecondStepToState,
  setThirdStepToState,
  setFourStepToState,
  setFiveStepToState,
  setLicenseToState,
};
