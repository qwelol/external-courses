const router = require('express').Router();

const BOOKS = [
    { id: 1, title: 'Might', src: 'img/book-cover.png', author: 'Daniel', description: 'Short story', keywords:'short', rating:5, price:100,created_at:new Date(2013,1,1) },
    { id: 2, title: 'Light', src: 'img/book-cover.png', author: 'Michael', description: 'Long story', keywords:'long', rating:4, price:200,created_at:new Date(2013,1,1) },
    { id: 3, title: 'Height', src: 'img/book-cover.png', author: 'Del', description: 'Any story', keywords:'height', rating:3, price:300,created_at:new Date(2018,1,1)},
    { id: 4, title: 'Weight', src: 'img/book-cover.png', author: 'Qwe', description: 'Smart story', keywords:'qwe', rating:2, price:400,created_at:new Date(2013,1,1)},
    { id: 5, title: 'Height1', src: 'img/book-cover.png', author: 'Del', description: 'Any story', keywords:'height', rating:3, price:300,created_at:new Date(2018,1,1)},
    { id: 6, title: 'Height2', src: 'img/book-cover.png', author: 'Del', description: 'Any story', keywords:'height', rating:3, price:300,created_at:new Date(2013,1,1)},
    { id: 6, title: 'Height3', src: 'img/book-cover.png', author: 'Del', description: 'Any story', keywords:'height', rating:5, price:0,created_at:new Date(2013,1,1)}
];

router.get('/', (_, res) => {
    res.json({ payload: BOOKS });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    res.json({ payload: BOOKS.find((book) => book.id === +id) });
});

module.exports = router;
