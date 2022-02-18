const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");
const { mail_user, mail_admin } = require("../utils/transport.email");

router.post(
  "/new",
  body("email").isEmail().withMessage("please enter the valid mail"),
  body("full_name")
    .isLength({ min: 2 })
    .withMessage("name of minimum length of 2 characters")
    .bail(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const data = await User.create(req.body);
      const user_data = await User.find().lean().exec();
      mail_user(data, user_data);
      mail_admin(data, user_data);
      return res.send(data);
    } catch (er) {
      return res.send(er.message);
    }
  },
);

module.exports = router;
