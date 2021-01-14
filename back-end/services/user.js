// const Country = require("../database/models/country");

exports.getUserById = async (User) => {
  const user = await User.findByPk(id, { include: "Country" });
  if (!user) throw new Error("User not found");
  return user;
};
exports.getAllUsers = async (User) =>
  await User.findAll({ include: "country" });
exports.getUserByEmail = async (User) =>
  await User.findOne({ where: { email } });
