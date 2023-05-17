const express = require('express')
const router = express.Router()
const Dog = require('../models/dog')


// GET all dogs
router.get('/', async (req, res) => {
  try {
    let allDogs = await Dog.find({})
    console.log(allDogs)
    res.json(allDogs)
  } catch {
    res.json({ msg: 'There was a problem getting all the dogs' })
  }
})

// POST create a dog
router.post('/', async (req, res) => {
  try {
    let newDog = await Dog.create(req.body)
    newDog.save()
    console.log(newDog)
    res.json(newDog)
  } catch {
    res.json({ msg: 'There was an error making your dog' })
  }
})

// GET one dog (SHOW)
router.get('/:id', async (req, res) => {
  try {
    let dog = await Dog.findById(req.params.id)
    res.json(dog)
  } catch {
    res.json({ msg: 'There was an error getting your dog' })
  }
})

// PUT one dog (UPDATE)
router.put('/:id', async (req, res) => {
  try {
    let updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(updatedDog)
  } catch {
    res.json({ msg: 'There was an error deleting your dog' })
  }
})

// DELETE one dog
router.delete('/:id', async (req, res) => {
  try {
    await Dog.findByIdAndDelete(req.params.id)
    res.json({ msg: 'Your dog has been successfully adopted' })
  } catch {
    res.json({ msg: 'There was an error deleting your dog' })
  }
})

module.exports = router
