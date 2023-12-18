const express = require("express");
const {
  getAllContents,
  createContent,
  deleteContent,
} = require("../controllers/ContentController");

const router = express.Router();

router.route("/").get(getAllContents).post(createContent);
router.route("/:id").delete(deleteContent);

module.exports = router;
