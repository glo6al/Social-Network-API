const router = require("express").Router();
const {
  getAllUsers,
  getUserByID,
  addUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// Set up GET all and POST at /api/users
router.route("/").get().post();

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get().put().delete();

// Set up to PUT on user to add friend to array
router.route("/:userId/friends/:friendId").post().delete();

module.exports = router;
