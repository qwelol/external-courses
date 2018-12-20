const router = require('express').Router();

const BOOKS = [
    { id: 1, title: 'Might', src: 'img/book-cover.png', author: 'Daniel', description: 'Short story', keywords:'short', rating:5, price:100,created_at:new Date(2013,1,1) },
    { id: 2, title: 'Light', src: 'img/book-cover.png', author: 'Michael', description: 'Long story', keywords:'long', rating:4, price:200,created_at:new Date(2013,1,1) },
    { id: 3, title: 'Height', src: 'img/book-cover.png', author: 'Del', description: 'Any story', keywords:'height', rating:3, price:300,created_at:new Date(2018,1,1)},
    { id: 4, title: 'Weight', src: 'img/book-cover.png', author: 'Qwe', description: 'Smart story', keywords:'qwe', rating:2, price:400,created_at:new Date(2013,1,1)},
    { id: 5, title: 'Height1', src: 'img/book-cover.png', author: 'Del', description: 'Any story', keywords:'height', rating:3, price:300,created_at:new Date(2018,1,1)},
    { id: 6, title: 'Height2', src: 'img/book-cover.png', author: 'Del', description: 'Any story', keywords:'height', rating:3, price:300,created_at:new Date(2013,1,1)},
    { id: 7, title: 'Height3', src: 'img/book-cover.png', author: 'Del', description: 'Any story', keywords:'height', rating:5, price:0,created_at:new Date(2022,10,25)},
    { id: 8, title: 'Height2022', src: 'img/book-cover.png', author: 'Del', description: 'Any story', keywords:'height', rating:5, price:0,created_at:new Date(2022,10,25)}
];

let ID = BOOKS.length;

router.get('/', (req, res) => {
    const { query } = req; // /api/books?filter=<smthing>
    const { filter, match } = query;
    if (filter) {
        switch (filter) {
            case 'popular':{
                return res.json({payload: BOOKS.filter(function (book) {
                        return book.rating >=4;
                    })})
            }
            case 'most-recent':{
                return res.json({payload: BOOKS.filter(function (book) {
                        return book.created_at.getFullYear() === new Date().getFullYear();
                    })})
            }
            case 'free':{
                return res.json({payload: BOOKS.filter(function (book) {
                        return book.price === 0;
                    })})
            }
            default: {
                break;
            }
        }
    }
    if (match) {
       return res.json({payload: BOOKS.filter(function (book) {
               return book.author.toLowerCase().includes(match.toLowerCase())
                   || book.title.toLowerCase().includes(match.toLowerCase())
                   || book.description.toLowerCase().includes(match.toLowerCase());
           })});
    }
    return res.json({ payload: BOOKS });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ payload: BOOKS.find((book) => book.id === +id) });
});
router.post('/', (req,res) =>{
    const {body} = req;
    const {title, author, description, keywords,price, created_at} = body;
    ID++;
    const book ={
        id: ID,
        title:title,
        src:'img/book-cover.png',
        author:author,
        description:description,
        keywords:keywords,
        rating:0,
        price:+price,
        created_at:new Date(created_at)
    }
    BOOKS.push(book)
    res.json({payload:book});
});
router.put('/:id', (req,res) =>{
    const {body} = req;
    const { id } = req.params;
    let {title, author, description, keywords, rating, price, created_at} = body;
    const book = BOOKS.find((book) => book.id === +id);
    created_at = new Date(created_at);
    price=+price;
    Object.assign(book,{title,author, description,keywords, rating, price,created_at});
    res.json({ payload: book });
});
router.delete('/:id', (req,res) => {
    const { id } = req.params;
    const index = BOOKS.findIndex((book) => book.id === +id);
    BOOKS.splice(index,1);
    res.json({payload: {id:id}});
});
module.exports = router;