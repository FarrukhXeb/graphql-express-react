const { Product, Category } = require("../database/models");

exports.createProduct = async (data) => {
  const { name, price, description, category_ids } = data;
  const categories = await Category.findAll({ where: { id: category_ids } });
  if (!categories && categories.length === 0)
    throw new Error("Categories does not exists");
  const product = await Product.create({
    name,
    price,
    description,
  });
  await product.addCategory(categories);
  const result = await Product.findOne({
    where: { name: product.name },
    include: [
      {
        model: Category,
        as: "categories",
        foreignKey: "category_id",
        through: "CategoriesProducts",
      },
    ],
  });
  return result;
};

exports.getProducts = async () => {
  return await Product.findAll({
    include: [
      {
        model: Category,
        as: "categories",
        foreignKey: "category_id",
        through: "CategoriesProducts",
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
        foreignKey: "category_id",
        through: "CategoriesProducts",
      },
    ],
  });
};

exports.getProductsByCategory = async () => {
  return await Category.findAll({
    include: [
      {
        model: Product,
        as: "products",
        foreignKey: "product_id",
        through: "CategoriesProducts",
      },
    ],
  });
};
