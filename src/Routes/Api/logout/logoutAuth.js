
module.exports = async (req, res) => {

  res.cookie('jwt', '', {
    sameSite: "none",
    secure: true,
    maxAge: 0
  })

  res.send({
    message:"success"
  })
};