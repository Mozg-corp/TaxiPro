const getTariffName = (s) => s.registrationData.tariffName;
const getTariffNameToAPI = (s) => s.registrationData.tariffName.value;

const getAgregators = (s) => s.registrationData.agregators;
const getPassport = (s) => s.registrationData.passport;
const getDriverLessons = (s) => s.registrationData.driverLessons;
const getCar = (s) => s.registrationData.car;
const getTariff = (s) => s.registrationData.tariffName.value;
const getLicense = (s) => s.registrationData.license;
const getRegistrationData = (s) => s.registrationData;
const getAgregatorsToAPI = (s) => s.registrationData.agregators.value;
const getAllAgregators = (s) => s.allAgregators;
const getAllTariffs = (s) => s.allTariffs;

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
  getAllAgregators,
  getAllTariffs,
  getTariff,
};
