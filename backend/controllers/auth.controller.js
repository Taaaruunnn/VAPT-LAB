// ======================================
// VULNERABLE LAB
// Weak Authentication
// ======================================

const User = require("../models/user.model");
const failedAttempts = {};
const login = async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne(req.body);
if (!failedAttempts[email]) {
    failedAttempts[email] = 0;
}
  if (!user) {

    failedAttempts[email]++;

    return res.status(401).json({

        success: false,

        message: "Invalid Credentials",

        attempts: failedAttempts[email],

        warning: "No account lockout implemented."

    });

}

  // Intentionally weak session
// ======================================
// VULNERABLE LAB
// Session Fixation
// The session ID is NOT regenerated
// after successful authentication.
// ======================================
failedAttempts[email] = 0;
  req.session.user = user;

  res.json({
    success: true,
    message: "Logged In",
    user,
  });

};
// ======================================
// VULNERABLE LAB
// Weak Logout
// Session is NOT destroyed.
// Only the user object is removed.
// The session ID remains valid.
// ======================================

const logout = (req, res) => {

  req.session.user = null;

  res.json({
    success: true,
    message: "Logged Out"
  });

};

const me = (req, res) => {

    if (!req.session.user) {

        return res.status(401).json({
            authenticated: false
        });

    }

    res.json({

        authenticated: true,

        user: req.session.user

    });

};


module.exports = {
  login,logout,me
};