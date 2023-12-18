const contentService = require("../services/ContentService");

exports.getAllContents = async (req, res) => {
  try {
    const contents = await contentService.getAllContents(req.query.title);
    res.json({ data: contents, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createContent = async (req, res) => {
  try {
    const content = await contentService.createContent(req.body);
    res.json({ data: content, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteContent = async (req, res) => {
  try {
    const content = await contentService.deleteContent(req.params.id);
    res.json({ data: content, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
