const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/early_sun', { useNewUrlParser: true, useUnifiedTopology: true });

const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    readTime: String
});

const Article = mongoose.model('Article', articleSchema);

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.get('/articles', async (req, res) => {
    const articles = await Article.find();
    res.json(articles);
});

app.post('/articles', async (req, res) => {
    const { title, content, readTime } = req.body;
    const newArticle = new Article({ title, content, readTime });
    await newArticle.save();
    res.status(201).send('Article created');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
