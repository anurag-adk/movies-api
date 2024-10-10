const indexHandler = (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Welcome",
  });
};

module.exports = indexHandler;
