// ======================================
// VULNERABLE LAB
// Weak Session Management
// ======================================

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

module.exports = {
  profile
};