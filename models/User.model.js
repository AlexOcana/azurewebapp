const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    nickname: {
      type: String,
    },
    avatarImg: {
      type: String,
      // default: "link de imagen de avatar por defecto"

    },
    role: {
      type: String,
      enum: ['USER', 'ME', 'ADMIN'],
      default: 'USER'
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
