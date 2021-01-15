const { register, login } = require("./services/auth");
const { createCountry, getAllCountries } = require("./services/country");
const { getAllUsers, getUserById } = require("./services/user");

module.exports = {
  Query: {
    user: async (parent, { id }, { models }) => await getUserById(id, models),
    countries: async (parent, args, { models }) =>
      await getAllCountries(models),
    users: async (parent, args, { models }) => await getAllUsers(models),
  },
  Mutation: {
    login: async (parent, args, { models }) => {
      try {
        const { email, password } = args.input;
        return await login({ email, password }, models);
      } catch (error) {
        throw new Error(error.message);
      }
    },
    register: async (parent, args, { models }) => {
      await register(args.input, models);
      return await login(args.input, models);
    },
    createCountry: async (parent, args, { models }) => {
      const country = await createCountry(args, models);
      return country;
    },
  },
};
