// const Country = require("../database/models/country");

exports.getUserById = async (models) => {
  const { User, Country } = models;
  const user = await User.findByPk(id, {
    include: [{ model: Country, as: "country" }],
  });
  if (!user) throw new Error("User not found");
  return user;
};
exports.getAllUsers = async (models) => {
  const { User, Country } = models;
  return await User.findAll({
    include: [
      {
        model: Country,
        as: "country",
      },
    ],
  });
};
exports.getUserByEmail = async (email, models) => {
  const { User, Country } = models;
  return await User.findOne({ where: { email } });
};
