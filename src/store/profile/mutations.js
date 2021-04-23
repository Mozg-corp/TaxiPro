const setFirstStepToState = (state, tariff) => {
  state.registrationData.tariffName.value = tariff;
};
const setSecondStepToState = (state, agregators) => {
  const agr = [...agregators];
  console.log(agr);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < agr.length; i++) {
    if (i === 0) {
      state.allAgregators.gett.isChecked = agr[i] === 0;
      state.allAgregators.yandexTaxi.isChecked = agr[i] === 1;
      state.allAgregators.citymobile.isChecked = agr[i] === 2;
      state.allAgregators.uber.isChecked = agr[i] === 3;
      state.allAgregators.didi.isChecked = agr[i] === 4;
    } else {
      if (agr[i] === 0) {
        state.allAgregators.gett.isChecked = true;
      }
      if (agr[i] === 1) {
        state.allAgregators.yandexTaxi.isChecked = true;
      }
      if (agr[i] === 2) {
        state.allAgregators.citymobile.isChecked = true;
      }
      if (agr[i] === 3) {
        state.allAgregators.uber.isChecked = true;
      }
      if (agr[i] === 4) {
        state.allAgregators.didi.isChecked = true;
      }
    }
  }
  state.registrationData.agregators.value = agr;
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
