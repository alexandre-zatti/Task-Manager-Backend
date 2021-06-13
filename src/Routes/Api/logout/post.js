
module.exports = async (req, res) => {

  res.cookie('jwt','',{
    maxAge:0
  })

  res.send({
    message:"success"
  })
};