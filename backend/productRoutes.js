import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from './productModel.js'

const router = express.Router()

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id })
    res.json(product)
  })
)

export default router
