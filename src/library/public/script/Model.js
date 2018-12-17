// тут обрабатываются данные
function Model() {
    this.books = null;
    this.onBooksLoaded = new EventEmitter();
    this.onBookLoaded = new EventEmitter();
}
Model.prototype.loadBooks = function () {
    var that = this;
    /*eslint-disable */
    fetch('/api/books').then(function (res) {
        if (res.ok) {
            return res.json();
        }
    }).then(function (data) {
        that.books = (data.payload);
        that.onBooksLoaded.notify(that.books);
    });
    /*eslint-enable */
}
Model.prototype.loadPopularBooks = function () {
    var that = this;
    /*eslint-disable */
    fetch('/api/books?filter=popular').then(function (res) {
        if (res.ok) {
            return res.json();
        }
    }).then(function (data) {
        that.books = (data.payload);
        that.onBooksLoaded.notify(that.books);
    });
    /*eslint-enable */
}
Model.prototype.loadRecentBooks = function () {
    var that = this;
    /*eslint-disable */
    fetch('/api/books?filter=most-recent').then(function (res) {
        if (res.ok) {
            return res.json();
        }
    }).then(function (data) {
        that.books = (data.payload);
        that.onBooksLoaded.notify(that.books);
    });
    /*eslint-enable */
}
Model.prototype.loadFreeBooks = function () {
    var that = this;
    /*eslint-disable */
    fetch('/api/books?filter=free').then(function (res) {
        if (res.ok) {
            return res.json();
        }
    }).then(function (data) {
        that.books = (data.payload);
        that.onBooksLoaded.notify(that.books);
    });
    /*eslint-enable */
}
Model.prototype.searchBooks = function (text) {
    var that = this;
    if (this.timer){
        clearInterval(this.timer);
    }
    this.timer = setTimeout(function () {
        /*eslint-disable */
        fetch('/api/books?match='+text).then(function (res) {
            if (res.ok) {
                return res.json();
            }
        }).then(function (data) {
            that.books = (data.payload);
            that.onBooksLoaded.notify(that.books);
        });
        /*eslint-enable */
    },700)

}
Model.prototype.loadBook = function (id) {
    var that = this;
    /*eslint-disable */
    fetch('/api/books/'+id).then(function (res) {
        if (res.ok) {
            return res.json();
        }
    }).then(function (data) {
        that.onBookLoaded.notify(data.payload);
    });
    /*eslint-enable */
}
Model.prototype.addBook = function (book){
    var that = this;
    /*eslint-disable */
    fetch('/api/books',{ method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(book)})
        .then(function (res) {
            if (res.ok){
                return res.json();
            }
        }).then(function (data) {
            that.books.push(data.payload);
            that.onBooksLoaded.notify(that.books);
    })
    /*eslint-enable */
}
Model.prototype.updateBook = function (book,id) {
    var that = this;
    /*eslint-disable */
    fetch('/api/books/'+id,{ method:'PUT', headers:{'content-type':'application/json'}, body: JSON.stringify(book)})
        .then(function (res) {
            if (res.ok){
                return res.json();
            }
        }).then(function (data) {
            const book = that.books.find((book) => book.id === data.payload.id);
            Object.assign(book, data.payload);
            that.onBooksLoaded.notify(that.books);
        })
    /*eslint-enable */
}
Model.prototype.deleteBook = function (id) {
    var that = this;
    /*eslint-disable */
    fetch('/api/books/'+id,{ method:'DELETE'})
        .then(function (res) {
            if (res.ok){
                return res.json();
            }
        }).then(function (data) {
            const index = that.books.findIndex((book) => book.id === +data.payload.id);
            that.books.splice(index,1);
            that.onBooksLoaded.notify(that.books);
        })
    /*eslint-enable */
}