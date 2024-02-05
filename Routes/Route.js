const {
  createUser,
  removeUser,
  getAll,
  getOne,
  updateUserEmail,
} = require("../controllers/Controller");

const router = require("express").Router();

router.route("/user").post(createUser);
router.route("/user").put(updateUserEmail);
router.route("/user").get(getAll);
router.route("/user/:id").get(getOne);
router.route("/user/:id").delete(removeUser);

module.exports = router;
