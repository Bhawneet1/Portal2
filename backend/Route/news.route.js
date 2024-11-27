import express from 'express'
import { getAllNews } from '../Controller/news.controller.js'

const router = express.Router()

router.get('/', getAllNews)

export default router