const dao = require("../dao/userDao");
const { User } = require("../models/user");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// add one
async function register(req, res) {
  //check if the user is already in database
  const emailExist = await User.findOne({
    email: req.body.email.toLowerCase(),
  });
  if (emailExist)
    return res.json({ status: false, message: "Email already exists" });
    // Hash the passwords
    const salt = await bcrypt.genSalt(10);
    const hashpassword = bcrypt.hashSync(req.body.password, salt);
  const user = new User({
    username: req.body.username,
    email: req.body.email.toLowerCase(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: hashpassword,
  });

  try {
    const savedUser = await user.save();
    return res.json({ status: true, user: savedUser._id });
  } catch (err) {
    return res.json({ status: false, message: "Error Occured" });
  }
}

async function login(req, res){
  // Check if the email exists
  const user = await User.findOne({ email: req.body.email.toLowerCase() });
  if (!user) return res.json({ status: false, message: "Email not found" });
 
  const salt = await bcrypt.genSalt(10);
  const hashpassword = bcrypt.hashSync(req.body.password, salt);

  const validpass = bcrypt.compareSync(req.body.password, user.password);

  if (!validpass) return res.json({ status: false, message: 'Invalid Password' });
  //Create and assign a token
  const token = jwt.sign({ _id: user._id, username: user.username }, process.env.TOKEN_SECRET);
  user.token = token;
  // user.save(function (err, user) {
  //     if (err) return res.status(400).send(err);
  //     //  res.send(null, user);
  // })
  return res.json({ status: true, token: token});
}


module.exports = {
  login,
  register,
};
