// ======================================
// VULNERABLE LAB
// Weak Authentication
// ======================================

const User = require("../models/user.model");
const failedAttempts = {};
const register = async (req, res) => {

    const {

        name,

        email,

        password

    } = req.body;

    const existingUser = await User.findOne({

        email

    });

    if (existingUser) {

        return res.status(400).json({

            success: false,

            message: "Email already exists"

        });

    }

    const user = await User.create({

        name,

        email,

        password

    });

    res.status(201).json({

        success: true,

        message: "Registration Successful",

        user

    });

};
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

  req.session.user = {

    id: user._id,

    name: user.name,

    email: user.email,

    role: user.role

};

res.json({

    success: true,

    message: "Login Successful",

    user: req.session.user

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
  login,logout,me,register
};