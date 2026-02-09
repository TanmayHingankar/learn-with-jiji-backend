const express = require("express");
const authenticateUser = require("../middlewares/auth");
const validateAskJijiRequest = require("../middlewares/validateRequest");
const { askJiji } = require("../controllers/jiji.controller");

const router = express.Router();

router.post(
  "/ask-jiji",
  authenticateUser,
  validateAskJijiRequest,
  askJiji
);

module.exports = router;
