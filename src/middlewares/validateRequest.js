const validateAskJijiRequest = (req, res, next) => {
  const { query } = req.body;

  if (!query || typeof query !== "string") {
    return res.status(400).json({
      error: "Query is required and must be a string"
    });
  }

  if (query.length < 3) {
    return res.status(400).json({
      error: "Query too short"
    });
  }

  next();
};

module.exports = validateAskJijiRequest;
