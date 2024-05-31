const crypto = require("crypto");
const User = require("../models/User");
const Details = require("../models/BusDetails");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

exports.userregister = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    console.log(user);
    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};
exports.adminregister = async (req, res, next) => {
  const { username, email, password } = req.body;
  const isAdmin = 1;
  try {
    const user = await User.create({
      username,
      email,
      password,
      isAdmin,
    });
    console.log(user);
    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("PLease provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    const details = await User.findOne({ email });
    if (!user || !details) {
      return next(new ErrorResponse("Invalid Credentials", 404));
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }
    sendToken(user, 200, res);
    // res.status(200).json({ data: [details] });
  } catch (error) {
    next(error);
  }
};

exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Email could not be send", 404));
    }

    const resetToken = user.getResetPasswordToken();
    await user.save();

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    const message = `<h1>You Have requested a password reset</h1> 
    <p>Please go to this Link to reset your password</p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>    
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be send", 500));
    }
  } catch (error) {
    next(error);
  }
};

exports.resetpassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");
  console.log(resetPasswordToken);
  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Reset Token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return res.status(200).json({ data: "Password Reset Success" });
  } catch (error) {
    next(error);
  }
};

// Utility function (if needed)
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};

exports.addbus = async (req, res, next) => {
  const {
    busno,
    source,
    destination,
    via,
    sta,
    viaSta,
    stc,
    viaDistance,
    destinationDistance,
    mapid,
  } = req.body;
  try {
    const detail = await Details.create({
      busno,
      source,
      destination,
      via,
      sta,
      viaSta,
      stc,
      viaDistance,
      destinationDistance,
      mapid,
    });
    res.status(200).json({ success: true, data: "Bus Added" });
    console.log(detail);
  } catch (error) {
    next(error);
  }
};

exports.viewbus = async (req, res, next) => {
  try {
    const buses = await Details.find();
    res.json(buses);
  } catch (error) {
    res.json(error);
  }
};

exports.getbus = async (req, res, next) => {
  const { busno } = req.body; // Changed from req.body to req.params
  if (!busno) {
    return next(new ErrorResponse("Please provide a bus number", 400));
  }

  try {
    const bus = await Details.findOne({ busno });

    if (!bus) {
      return res.status(404).json({ error: "Invalid Bus No." });
    }

    res.status(200).json([bus]);
  } catch (error) {
    console.error("Error fetching bus information:", error.message);
    next(new ErrorResponse("Internal Server Error", 500));
  }
};

// Getting bus using source and destination
exports.getbusbysource = async (req, res, next) => {
  const { source, destination } = req.body;
  console.log(source + "In conrroller");

  if (!source) {
    return next(new ErrorResponse("Please provide a Source", 400));
  }

  if (!destination) {
    return next(new ErrorResponse("Please provide a Destination", 400));
  }

  try {
    const buses = await Details.find({ source, destination });

    if (!buses.length) {
      return res
        .status(404)
        .json({ error: "No buses found for the given source and destination" });
    }

    res.status(200).json(buses);
  } catch (error) {
    console.error("Error fetching bus information:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Assuming your route is /api/auth/deletebus/:busno
exports.deletebus = async (req, res, next) => {
  const busno = req.params.busno; // Retrieve busno from URL parameters
  console.log(busno);

  if (!busno) {
    return next(new ErrorResponse("Please provide a bus number", 400));
  }

  try {
    const bus = await Details.findOneAndDelete({ busno });

    if (!bus) {
      return res.status(404).json({ error: "Invalid Bus No." });
    }
    console.log(bus);
    res.status(200).json(bus);
  } catch (error) {
    console.error("Error fetching bus information:", error.message);
    next(new ErrorResponse("Internal Server Error", 500));
  }
};

//View a single bus detail
exports.fetchbus = async (req, res, next) => {
  const busno = req.params.busno; // Retrieve busno from URL parameters

  if (!busno) {
    return next(new ErrorResponse("Please provide a bus number", 400));
  }

  try {
    const bus = await Details.findOne({ busno: busno });

    if (!bus) {
      return res.status(404).json({ error: "Invalid Bus No." });
    }

    res.json(bus);
  } catch (error) {
    console.error("Error fetching bus information:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Updating Bus Detail
exports.updatebus = async (req, res, next) => {
  const busno = req.params.busno; // Retrieve busno from URL parameters

  if (!busno) {
    return next(new ErrorResponse("Please provide a bus number", 400));
  }

  try {
    const bus = await Details.findOneAndUpdate(
      { busno: busno },
      {
        busno: req.body.busnum,
        source: req.body.source,
        destination: req.body.destination,
        via: req.body.via,
        sta: req.body.sta,
        viaSta: req.body.viaSta,
        stc: req.body.stc,
        viaDistance: req.body.viaDistance,
        destinationDistance: req.body.destinationDistance,
        mapid: req.body.mapid,
      }
    );

    if (!bus) {
      return res.status(404).json({ error: "Invalid Bus No." });
    }

    res.json(bus);
  } catch (error) {
    console.error("Error fetching bus information:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all user details
exports.fetchuser = async (req, res, next) => {
  const email = req.params.email; // Retrieve busno from URL parameters
  console.log(email);
  if (!email) {
    return next(new ErrorResponse("Please provide a email", 400));
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Invalid Email Id." });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user information:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
