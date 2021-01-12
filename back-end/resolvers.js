const { register, login } = require("./services/auth");
const { createCountry, getAllCountries } = require("./services/country");
const { getAllUsers, getUserById, getUserByEmail } = require("./services/user");

module.exports = {
  Query: {
    user: async (parent, { id }) => await getUserById(id),
    countries: async () => await getAllCountries(),
    users: async () => await getAllUsers(),
  },
  Mutation: {
    login: async (parent, args) => {
      try {
        const { email, password } = args.input;
        return await login({ email, password });
      } catch (error) {
        throw new Error(error.message);
      }
    },
    register: async (parent, args) => {
      await register(args.input);
      return await login(args.input);
    },
    createCountry: async (parent, args) => {
      const country = await createCountry(args);
      return country;
    },
  },
};
