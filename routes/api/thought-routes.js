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
router.route("/").get(getAllThoughts).post(addThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Set up Post one, and DELETE one for reaction
router.route("/:thoughtID/reactions").post(addReaction);
router.route("/:thoughtID/reactions/:reactionID").delete(deleteReaction);

module.exports = router;
