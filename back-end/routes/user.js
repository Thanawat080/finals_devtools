const express = require("express");
const User = require('../models/user')

router = express.Router();



router.post('/information', async (req, res) => {
  const payload = req.body
  const user = new User(payload)
  await user.save()
  res.send(user)
  res.status(200).end()
})

router.get('/information/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.find({_id : id})
  res.json(user)
})



exports.router = router;