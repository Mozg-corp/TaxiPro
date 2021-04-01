const setFirstStepToState = (state, tariff) => {
  state.registrationData.tariffName.value = tariff;
};
const setSecondStepToState = (state, agregators) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < agregators.length; i++) {
    if (i === 0) {
      state.allAgregators.gett.isChecked = agregators[i] === 'gett';
      state.allAgregators.yandexTaxi.isChecked = agregators[i] === 'yandexTaxi';
      state.allAgregators.citymobile.isChecked = agregators[i] === 'citymobile';
      state.allAgregators.uber.isChecked = agregators[i] === 'uber';
    } else {
      if (agregators[i] === 'gett') {
        state.allAgregators.gett.isChecked = true;
      }
      if (agregators[i] === 'yandexTaxi') {
        state.allAgregators.yandexTaxi.isChecked = true;
      }
      if (agregators[i] === 'citymobile') {
        state.allAgregators.citymobile.isChecked = true;
      }
      if (agregators[i] === 'uber') {
        state.allAgregators.uber.isChecked = true;
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
