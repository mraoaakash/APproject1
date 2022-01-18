import jwt from "jsonwebtoken";
/*
 * Section Authored by:  Aakash Rao
 * Commit history absent due to repository issues
 * Token generation function
 */
const tokenGeneratingFunc = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default tokenGeneratingFunc;
