const { Country, User } = require("../database/models");

exports.getUserById = async (id) => {
  const user = await User.findByPk(id, {
    include: [{ model: Country, as: "country", foreignKey: "countryId" }],
  });
  if (!user) throw new Error("User not found");
  return user;
};
exports.getAllUsers = async () => {
  return await User.findAll({
    include: [
      {
        model: Country,
        as: "country",
      },
    ],
  });
};
exports.getUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};
