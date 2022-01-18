import asyncHandler from "express-async-handler";
import tokenGeneratingFunc from "../utils/tokenGeneratingFunc.js";
import User from "../models/uModel.js";
import Product from "../models/pModel.js";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

/*
 * Section Authored by: Aaryan Mavani
 * Commit history absent due to repository issues
 * @desc    Auth user & get token
 * @route   POST /api/users/login
 * @access  Public
 */
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      wishlistItems: user.wishlistItems,
      token: tokenGeneratingFunc(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

/*
 * Section Authored by: Aakash Rao
 * Commit history absent due to repository issues
 * @desc    Google Login
 * @route   POST /api/googleLogin
 * @access  Public
 */
export const googleLogin = asyncHandler(async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  });
  const { email_verified, name, email } = ticket.payload;
  console.log(email_verified);
  console.log(name);
  console.log(email);

  User.findOne({ email }).exec((err, user) => {
    if (err) {
      res.status(400);
      throw new Error("Something went Wrong...");
    } else {
      if (user) {
        let password = email + process.env.JWT_SECRET;
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          wishlistItems: user.wishlistItems,
          token: tokenGeneratingFunc(user._id),
        });
      } else {
        let password = email + process.env.JWT_SECRET;
        const user = User.create({
          name,
          email,
          password,
        });
        console.log(user);
        if (user) {
          res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: tokenGeneratingFunc(user._id),
          });
        } else {
          res.status(400);
          throw new Error("Invalid user data");
        }
      }
    }
  });
});

/*
 * Section Authored by: Aaryan Mavani
 * Commit history absent due to repository issues
 * @desc    Register a new user
 * @route   POST /api/users
 * @access  Public
 */
export const registerUser = asyncHandler(async (req, res) => {
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
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: tokenGeneratingFunc(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

/*
 * Section Authored by: Aaryan Mavani
 * Commit history absent due to repository issues
 * @desc    Get user profile
 * @route   GET /api/users/profile
 * @access  Private
 */
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      wishlistItems: user.wishlistItems,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

/*
 * Section Authored by: Aaryan Mavani
 * Commit history absent due to repository issues
 * @desc    Update user profile
 * @route   PUT /api/users/profile
 * @access  Private
 */
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: tokenGeneratingFunc(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

/*
 * Section Authored by: Ekansh Sharma
 * Commit history absent due to repository issues
 * @desc    Get all users
 * @route   GET /api/users
 * @access  Private/Admin
 */
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

/*
 * Section Authored by: Ekansh Sharma
 * Commit history absent due to repository issues
 * @desc    Delete user
 * @route   DELETE /api/users/:id
 * @access  Private/Admin
 */
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

/*
 * Section Authored by: Ekansh Sharma
 * Commit history absent due to repository issues
 * @desc    Get user by ID
 * @route   GET /api/users/:id
 * @access  Private/Admin
 */
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

/*
 * Section Authored by: Aaryan Mavani
 * Commit history absent due to repository issues
 * @desc    Update user
 * @route   PUT /api/users/:id
 * @access  Private/Admin
 */
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

/*
 * Section Authored by:  Ekansh Sharma and Aakash Rao
 * Commit history absent due to repository issues
 * @desc    Create new wishlist item
 * @route   POST /api/users/wishlist/:id?
 * @access  Private
 */
export const addToWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  const user = await User.findById(req.params.id);
  const product = await Product.findById(productId);

  if (user) {
    const alreadyAdded =
      user.wishlistItems != undefined
        ? user.wishlistItems.find((item) => item.id === productId) === undefined
          ? false
          : true
        : false;

    if (alreadyAdded) {
      res.status(400);
      throw new Error("Product already in wishlist");
    }

    const item = {
      id: product._id,
      name: product.name,
      image: product.image,
      rating: product.rating,
      price: product.price,
      countInStock: product.countInStock,
    };

    user.wishlistItems.push(item);

    await user.save();
    res.status(201).json({ message: "Item added to Wishlist" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

/*
 * Section Authored by:  Ekansh Sharma and Aakash Rao
 * Commit history absent due to repository issues
 * @desc    Get user wishlist
 * @route   GET /api/users/mywishlist
 * @access  Private
 */
export const getMyWishlist = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id.toString());
  if (user) {
    res.json({
      wishlistItems: user.wishlistItems,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

/*
 * Section Authored by:  Ekansh Sharma and Aakash Rao
 * Commit history absent due to repository issues
 * @desc    Remove From Wishlist
 * @route   POST api/wishlist/:id?/remove
 * @access  Private
 */
export const removeFromWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.body;

  const user = await User.findById(req.params.id);
  console.log(user);
  console.log("Product Id at remove from wishlist " + productId);
  console.log("User Id at  remove from wishlist " + user._id);
  if (user) {
    const inWishlist = user.wishlistItems.find((r) => r.id === productId);
    console.log(inWishlist);
    if (inWishlist) {
      res.status(400);
      throw new Error("Product not in wishlist");
    }

    await User.findOneAndUpdate(
      {
        _id: user._id,
      },
      {
        $pull: {
          wishlistItems: { id: productId },
        },
      }
    );

    res.status(201).json({ message: "Item removed from Wishlist" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
