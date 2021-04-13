const setFirstStepToState = (state, tariff) => {
  state.registrationData.tariffName.value = tariff;
};
const setSecondStepToState = (state, agregators) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < agregators.length; i++) {
    if (i === 0) {
      state.allAgregators.gett.isChecked = agregators[i] === '0';
      state.allAgregators.yandexTaxi.isChecked = agregators[i] === '1';
      state.allAgregators.citymobile.isChecked = agregators[i] === '2';
      state.allAgregators.uber.isChecked = agregators[i] === '3';
      state.allAgregators.uber.isChecked = agregators[i] === '4';
    } else {
      if (agregators[i] === '0') {
        state.allAgregators.gett.isChecked = true;
      }
      if (agregators[i] === '1') {
        state.allAgregators.yandexTaxi.isChecked = true;
      }
      if (agregators[i] === '2') {
        state.allAgregators.citymobile.isChecked = true;
      }
      if (agregators[i] === '3') {
        state.allAgregators.uber.isChecked = true;
      }
      if (agregators[i] === '4') {
        state.allAgregators.didi.isChecked = true;
      }
    }
  }
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
