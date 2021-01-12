const Country = require("../models/country");
const User = require("../models/user");

exports.getUserById = async (id) => {
  const user = await User.findByPk(id, { include: [Country] });
  if (!user) throw new Error("User not found");
  return user;
};
exports.getAllUsers = async () => await User.findAll({ include: Country });
exports.getUserByEmail = async (email) =>
  await User.findOne({ where: { email } });
