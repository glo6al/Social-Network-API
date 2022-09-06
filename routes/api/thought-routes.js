const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// Set up GET all and POST at /api/thoughts
router.route("/").get().post();

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router.route("/:id").get().put().delete();

module.exports = router;
