const indexHandler = (req, res) => {
  res.status(200).json({
    message: "Success",
  });
};

module.exports = indexHandler;
