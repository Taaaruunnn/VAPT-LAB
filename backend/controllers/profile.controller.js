// ======================================
// VULNERABLE LAB
// Weak Session Management
// ======================================
const User = require("../models/user.model");
const profile = (req, res) => {

  if (!req.session.user) {
    return res.status(401).json({
      success: false,
      message: "Please login"
    });
  }

  res.json({
    success: true,
    sessionID: req.sessionID,
    user: req.session.user
  });

};


const updateName = async (req, res) => {

    console.log(req.session);
  console.log(req.session.user);
    if (!req.session.user) {

        return res.status(401).json({
            success: false
            
        });

    }

    const { name } = req.body;

    await User.findByIdAndUpdate(

        req.session.user.id,

        {
            name
        }

    );

    req.session.user.name = name;

    res.json({

        success: true,

        message: "Name Updated"

    });

};

module.exports = {
  profile,
  updateName
};