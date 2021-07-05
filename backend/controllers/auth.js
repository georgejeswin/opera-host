import UserModel from "../models/user.js";

export const authController = async (req, res) => {
  try {
    const { name, email, picture } = req.user;
    const user = await UserModel.findOneAndUpdate(
      { email },
      { picture },
      { new: true }
    );
    if (user) {
      res.json(user);
      console.log("USER UPDATED ", user);
      res.cookie("user", user, { expiresIn: "1d" });
    } else {
      const newUser = await new UserModel({
        email,
        name,
        picture,
      }).save();
      res.json(newUser);
      console.log("USER CREATED ", newUser);
    }
  } catch (error) {
    console.log(error);
  }
};

export const currentUserController = async (req, res) => {
  UserModel.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};
