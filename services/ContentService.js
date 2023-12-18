const ContentModel = require("../models/Content");

exports.getAllContents = async () => {
  return await ContentModel.find();
};

exports.createContent = async (content) => {
  return await ContentModel.create(content);
};

exports.deleteContent = async (id) => {
  return await ContentModel.findByIdAndDelete(id);
};
