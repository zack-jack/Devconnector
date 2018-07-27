const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile route works" }));

// @route   GET api/profile
// @desc    Get current logged in user's profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Creates variable errors set to empty object
    const errors = {};

    // Finds the user profile
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Checks if profile exists
        if (!profile) {
          errors.noprofile = "There is no profile for this user.";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
