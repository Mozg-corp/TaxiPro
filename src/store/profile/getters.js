const getTariffName = (s) => s.registrationData.tariffName;
const getAgregators = (s) => s.registrationData.agregators;
const getPassport = (s) => s.registrationData.passport;
const getDriverLessons = (s) => s.registrationData.driverLessons;

export default {
  getTariffName,
  getAgregators,
  getPassport,
  getDriverLessons,
};
