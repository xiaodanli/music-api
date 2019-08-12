
// const host = 'http://localhost:3000'

const upload = (req, res) => {
    res.json({
      code: 1,
      url: `/uploads/${req.file.filename}`
    })
  }
  
  module.exports = {
    upload
  }
  