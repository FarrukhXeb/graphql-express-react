const jwt = require("jsonwebtoken");
const { getUserByEmail } = require("./user");
exports.register = async (data, models) => {
  try {
    const { User, Country } = models;
    console.log(await getUserByEmail(data.email, models));
    if (await getUserByEmail(data.email, models))
      throw new Error("User already exists with this email");
    const country = await Country.findByPk(data.countryId);
    if (!country) throw new Error("Country not found");
    return await User.create(
      { ...data, country_id: data.countryId },
      { include: [{ model: Country, as: "country" }] }
    );
  } catch (error) {
    throw new Error(error.message);
  }
};
exports.login = async (data, models) => {
  const { email, password } = data;
  const { User } = models;
  const user = await User.findOne({ where: { email, password } });
  if (!user) throw new Error("Invalid credentials");
  const payload = { id: user.id };
  const token = jwt.sign(payload, "testkey");
  return { user, token };
};
