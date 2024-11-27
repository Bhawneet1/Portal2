import News from '../Modal/news.modal.js'

export const getAllNews = async (req, res) => {
  try {
    const news = await News.find()
    res.status(200).json(news)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};