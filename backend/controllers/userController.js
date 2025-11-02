import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// import generateToken from "../utils/generateToken.js";

// @desc   auth user & get token
// @route   POST /api/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("🧾 Request body:", req.body);
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// const user = await User.findOne({ email });

// if (user && (await user.matchPassword(password))) {
//   res.json({
//     _id: user._id,
//     name: user.name,
//     email: user.email,
//     isAdmin: user.isAdmin,
//     token: generateToken(user._id),
//   });
// } else {
//   res.status(401);
//   throw new Error("Invalid email or password");
// }

// @desc   register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc  logout user/ clear cookie
// @route   POST/api/users/logout
// @access  private
const LogoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "n ", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "logged succesfully" });
});

// @desc  get user profile
// @route   GET /api/users/profile
// @access  private
const getUserProfile = asyncHandler(async (req, res) => {
  //   const user = await User.findById(req.user._id);
  //   if (user) {
  //     res.json({
  //       _id: user._id,
  //       name: user.name,
  //       email: user.email,
  //       isAdmin: user.isAdmin,
  //     });
  //   } else {
  //     res.status(404);
  //     throw new Error("User not found");
  //   }
  res.send("get user profile");
});
// @desc   update user profile
// @route   PUT /api/users/profile
// @access  private
const updateUserProfile = asyncHandler(async (req, res) => {
  //   const user = await User.findById(req.user._id);
  //   if (user) {
  //     user.name = req.body.name || user.name;
  //     user.email = req.body.email || user.email;
  //     user.password = req.body.password || user.password;

  //     const updatedUser = await user.save();

  //     res.json({
  //       _id: updatedUser._id,
  //       name: updatedUser.name,
  //       email: updatedUser.email,
  //       isAdmin: updatedUser.isAdmin,
  //       token: generateToken(updatedUser._id),
  //     });
  //   } else {
  //     res.status(404);
  //     throw new Error("User not found");
  //   }
  res.send("update user profile");
});

// @desc  get user profile
// @route   GET /api/users/profile
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  //   const user = await User.findById(req.user._id);

  //   if (user) {
  //     res.json({
  //       _id: user._id,
  //       name: user.name,
  //       email: user.email,
  //       isAdmin: user.isAdmin,
  //     });
  //   } else {
  //     res.status(404);
  //     throw new Error("User not found");
  //   }
  res.send("get users");
});
// @desc   get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  //   const user = await User.findById(req.params.id);
  //   if (user) {
  //     res.json({
  //       _id: user._id,
  //       name: user.name,
  //       email: user.email,
  //       isAdmin: user.isAdmin,
  //     });
  //   } else {
  //     res.status(404);
  //     throw new Error("User not found");
  //   }
  res.send("get user by ID");
});
// @desc  delete users
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUsers = asyncHandler(async (req, res) => {
  //   const user = await User.findById(req.params.id);

  //   if (user) {
  //     await user.remove();
  //     res.json({ message: "User removed" });
  //   } else {
  //     res.status(404);
  //     throw new Error("User not found");
  //   }
  res.send("delete user");
});
// @desc  update user
// @route   put /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});
export {
  authUser,
  registerUser,
  LogoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUsers,
  updateUser,
};
