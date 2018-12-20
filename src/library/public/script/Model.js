// тут обрабатываются данные
function Model() {
    this.books = null;
    this.onBooksLoaded = new EventEmitter();
    this.onBookLoaded = new EventEmitter();
}
Model.prototype.loadBooks = function () {
    var that = this;
    fetch('/api/books')
        .then(that.isOK)
        .then(function (data) {
            that.books = (data.payload);
            that.onBooksLoaded.notify(that.books);
        });
}
Model.prototype.loadPopularBooks = function () {
    var that = this;
    fetch('/api/books?filter=popular')
        .then(that.isOK)
        .then(function (data) {
            that.books = (data.payload);
            that.onBooksLoaded.notify(that.books);
        });
}
Model.prototype.loadRecentBooks = function () {
    var that = this;
    fetch('/api/books?filter=most-recent')
        .then(that.isOK)
        .then(function (data) {
            that.books = (data.payload);
            that.onBooksLoaded.notify(that.books);
        });
}
Model.prototype.loadFreeBooks = function () {
    var that = this;
    fetch('/api/books?filter=free')
        .then(that.isOK)
        .then(function (data) {
            that.books = (data.payload);
            that.onBooksLoaded.notify(that.books);
        });
}
Model.prototype.searchBooks = function (text) {
    var that = this;
    if (this.timer){
        clearInterval(this.timer);
    }
    this.timer = setTimeout(function () {
        fetch('/api/books?match='+text)
            .then(that.isOK)
            .then(function (data) {
                that.books = (data.payload);
                that.onBooksLoaded.notify(that.books);
            });
    },700)
}
Model.prototype.loadBook = function (id) {
    var that = this;
    fetch('/api/books/'+id)
        .then(that.isOK)
        .then(function (data) {
            that.onBookLoaded.notify(data.payload);
        });
}
Model.prototype.addBook = function (book){
    var that = this;
    fetch('/api/books',{ method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(book)})
        .then(that.isOK)
        .then(function (data) {
            that.books.push(data.payload);
            that.onBooksLoaded.notify(that.books);
        })
}
Model.prototype.updateBook = function (book,id) {
    var that = this;
    fetch('/api/books/'+id,{ method:'PUT', headers:{'content-type':'application/json'}, body: JSON.stringify(book)})
        .then(that.isOK)
        .then(function (data) {
            const book = that.books.find((book) => book.id === data.payload.id);
            Object.assign(book, data.payload);
            that.onBooksLoaded.notify(that.books);
        })
}
Model.prototype.deleteBook = function (id) {
    var that = this;
    fetch('/api/books/'+id,{ method:'DELETE'})
        .then(that.isOK)
        .then(function (data) {
            const index = that.books.findIndex((book) => book.id === +data.payload.id);
            that.books.splice(index,1);
            that.onBooksLoaded.notify(that.books);
        })
}
/*eslint-disable */
Model.prototype.isOK = function isOK(res) {
    if(res.ok){
        return res.json();
    }
}
/*eslint-enable */