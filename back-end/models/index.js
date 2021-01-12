const Country = require("./country");
const User = require("./user");
module.exports = async () => {
  try {
    User.belongsTo(Country);
    Country.hasMany(User);
    await User.sync();
    await Country.sync();
  } catch (error) {
    console.log(error.message);
  }
};
