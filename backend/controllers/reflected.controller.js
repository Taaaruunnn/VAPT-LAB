const search = (req, res) => {
   
    const query = req.query.q || '';

    res.json({

        success: true,

        query: query

    });

};

module.exports = {
    search
};