const getTariffName = (s) => s.registrationData.tariffName;
const getTariffNameToAPI = (s) => s.registrationData.tariffName.value;

const getAgregators = (s) => s.registrationData.agregators;
const getPassport = (s) => s.registrationData.passport;
const getDriverLessons = (s) => s.registrationData.driverLessons;
const getCar = (s) => s.registrationData.car;
const getLicense = (s) => s.registrationData.license;
const getRegistrationData = (s) => s.registrationData;
const getAgregatorsToAPI = (s) => s.registrationData.agregators.value;

export default {
  getTariffName,
  getAgregators,
  getPassport,
  getDriverLessons,
  getCar,
  getLicense,
  getRegistrationData,
  getAgregatorsToAPI,
  getTariffNameToAPI,
};
