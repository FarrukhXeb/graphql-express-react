const { register, login } = require("./services/auth");
const { createCategory } = require("./services/category");
const { createCountry, getAllCountries } = require("./services/country");
const {
  getProductsByCategory,
  getProducts,
  createProduct,
  getProductById,
} = require("./services/product");
const { getAllUsers, getUserById } = require("./services/user");

module.exports = {
  Query: {
    user: async (parent, { id }) => await getUserById(id),
    countries: async (parent, args) => await getAllCountries(),
    users: async (parent, args) => await getAllUsers(),
    products: async (parent, args) => await getProducts(),
    product: async (parent, args) => await getProductById(args.id),
    categories: async (parent, args) => await getProductsByCategory(),
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
    createCategory: async (parent, args) => {
      try {
        return await createCategory(args.name);
      } catch (error) {
        throw new Error(error.message);
      }
    },
    createProduct: async (parent, args) => {
      try {
        return await createProduct(args.input);
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};
