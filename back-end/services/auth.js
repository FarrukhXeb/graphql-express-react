const Country = require("../models/country");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { getUserByEmail } = require("./user");
exports.register = async (data) => {
  try {
    if (await getUserByEmail(data.email))
      throw new Error("User already exists with this email");
    const country = await Country.findByPk(data.countryId);
    if (!country) throw new Error("Country not found");
    return await User.create(data);
  } catch (error) {
    throw new Error(error.message);
  }
};
exports.login = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({ where: { email, password } });
  if (!user) throw new Error("Invalid credentials");
  const payload = { id: user.id };
  const token = jwt.sign(payload, "testkey");
  return { user, token };
};
