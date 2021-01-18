const { Product, Category, CategoryProduct } = require("../database/models");

exports.createProduct = async (data) => {
  return await Product.create(data, {
    include: [
      {
        model: Category,
        as: "categories",
        foreignKey: "categoryId",
        through: CategoryProduct,
      },
    ],
  });
};

exports.getProducts = async () => {
  return await Product.findAll({
    include: [
      {
        model: Category,
        as: "categories",
        foreignKey: "categoryId",
        through: {
          attributes: [],
        },
      },
    ],
  });
};

exports.getProductById = async (id) => {
  return await Product.findByPk(id, {
    include: [
      {
        model: Category,
        as: "categories",
        foreignKey: "categoryId",
        through: {
          attributes: [],
        },
      },
    ],
  });
};

exports.getProductsByCategory = async (categoryName) => {
  return await Category.findAll({
    where: { name: categoryName },
    include: [
      {
        model: Product,
        as: "products",
        foreignKey: "productId",
        through: { attributes: [] },
      },
    ],
  });
};
