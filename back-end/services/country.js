const Country = require("../models/country");

exports.createCountry = async (data) => {
  return await Country.create(data);
};
exports.getAllCountries = async () => await Country.findAll();
