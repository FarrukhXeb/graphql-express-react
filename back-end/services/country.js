const { User, Country } = require("./../database/models");
exports.createCountry = async (data) => {
  return await Country.create(data);
};
exports.getAllCountries = async () => {
  return await Country.findAll({
    include: [{ model: User, as: "users", foreignKey: "countryId" }],
  });
};
