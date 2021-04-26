const getTariffName = (s) => s.registrationData.tariffName;
const getTariffNameToAPI = (s) => s.registrationData.tariffName.value;
const getAllTariffs = (s) => s.allTariffs;

const getName = (s) => s.registrationData.passport.value[0].value;
const getSurname = (s) => s.registrationData.passport.value[1].value;
const getPatronymic = (s) => s.registrationData.passport.value[2].value;

const getAgregators = (s) => s.registrationData.agregators;
const getPassport = (s) => s.registrationData.passport;
const getPassportValue = (s) => s.registrationData.passport.value;

const getDriverLessons = (s) => s.registrationData.driverLessons;
const getDriverLessonsValue = (s) => s.registrationData.driverLessons.value;

const getCar = (s) => s.registrationData.car;
const getCarValue = (s) => s.registrationData.car.value;

const getTariff = (s) => s.registrationData.tariffName.value;
const getLicense = (s) => s.registrationData.license;

const getRegistrationData = (s) => s.registrationData;
const getAgregatorsToAPI = (s) => s.registrationData.agregators.value;
const getAllAgregators = (s) => s.allAgregators;

export default {
  getTariffName,
  getAgregators,
  getPassport,
  getPassportValue,
  getDriverLessons,
  getCar,
  getCarValue,
  getLicense,
  getRegistrationData,
  getAgregatorsToAPI,
  getTariffNameToAPI,
  getAllAgregators,
  getAllTariffs,
  getTariff,
  getPatronymic,
  getSurname,
  getName,
  getDriverLessonsValue,
};
