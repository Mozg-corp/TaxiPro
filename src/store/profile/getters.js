const getTariffName = (s) => s.registrationData.tariffName;
const getAgregators = (s) => s.registrationData.agregators;
const getPassport = (s) => s.registrationData.passport;
const getDriverLessons = (s) => s.registrationData.driverLessons;
const getCar = (s) => s.registrationData.car;
const getLicense = (s) => s.registrationData.license;
const getRegistrationData = (s) => s.registrationData;

export default {
  getTariffName,
  getAgregators,
  getPassport,
  getDriverLessons,
  getCar,
  getLicense,
  getRegistrationData,
};
