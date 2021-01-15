exports.createCountry = async (data, models) => {
  const { Country } = models;
  return await Country.create(data);
};
exports.getAllCountries = async (models) => {
  const { Country, User } = models;
  return await Country.findAll({
    include: [{ model: User, as: "users", foreignKey: "country_id" }],
  });
};
