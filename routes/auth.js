const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
  addbus,
  viewbus,
  getbus,
  getbusbysource,
  deletebus,
  fetchbus,
  updatebus,
} = require("../controllers/auth");
router.route("/register").post(register); //Similar to router.post("/register", *function*)

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/passwordreset/:resetToken").put(resetpassword);

router.route("/addbus").post(addbus);
router.route("/viewbus").get(viewbus);
router.route("/getbus").post(getbus);
router.route("/getbusbysource").post(getbusbysource);
router.route("/deletebus/:busno").delete(deletebus);
router.route("/fetchbus/:busno").get(fetchbus);
router.route("/update/:busno").put(updatebus);

module.exports = router;
