const { Category, Product } = require("../database/models");

exports.createCategory = async (name) => {
  const serializedName = name.toLowerCase();
  const category = await Category.findOne({
    where: { name: serializedName },
  });
  if (category && category.name === serializedName)
    throw new Error("Category already exsists");
  return await Category.create({ name: serializedName });
};

exports.getAllCategories = async () =>
  await Category.findAll({
    include: [
      {
        model: Product,
        as: "products",
        foreign_key: "product_id",
      },
    ],
  });
