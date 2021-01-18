const { Category } = require("../database/models");

exports.createCategory = async (name) => {
  return await Category.create({ name });
};

exports.getAllCategories = async () => await Category.findAll();
