import Noticias from "./noticias.model.js"

export const getNoticias = async (req, res) => {
  try {
    const news = await Noticias.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createNoticia = async (req, res) => {
  const news = new Noticias(req.body);
  try {
    const savedNews = await news.save();
    res.status(201).json(savedNews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const deleteNoticias = async (req, res) => {
  try {
    const news = await Noticias.findByIdAndDelete(req.params.id);
    if (!news) return res.status(404).json({ message: 'Noticia no encontrada' });
    res.status(200).json({ message: 'Noticia eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
