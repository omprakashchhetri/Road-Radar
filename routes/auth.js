const express = require("express");
const router = express.Router();

const {
  adminregister,
  userregister,
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
  fetchuser,
  updateuser,
  changepassword,
} = require("../controllers/auth");
router.route("/userregister").post(userregister); //Similar to router.post("/register", *function*)
router.route("/adminregister").post(adminregister);

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
router.route("/fetchuser/:email").get(fetchuser);
router.route("/updateuser/:id").put(updateuser);
router.route("/changepassword/:id").put(changepassword);

module.exports = router;
