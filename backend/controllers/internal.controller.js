const getSecret = (req, res) => {
    const internalRequest = req.headers["x-internal-request"];

    if (internalRequest !== "true") {
        return res.status(403).json({
            success: false,
            message: "Forbidden: Internal API only"
        });
    }
    res.json({
        success: true,
        
        databasePassword: "SuperSecretPassword123",
        adminToken: "ADMIN-TOKEN-XYZ",
        serverName: "VAPT-LAB-DEV"
    });

};

module.exports = {
    getSecret
};