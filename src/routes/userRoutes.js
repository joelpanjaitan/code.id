const express = require("express");
const userController = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/", authenticate, userController.createUser);
router.get(
  "/account/:accountNumber",
  authenticate,
  userController.getUserByAccountNumber
);
router.get(
  "/identity/:identityNumber",
  authenticate,
  userController.getUserByIdentityNumber
);
router.put("/:id", authenticate, userController.updateUser);
router.delete("/:id", authenticate, userController.deleteUser);

module.exports = router;
