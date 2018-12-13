// тут обрабатываются данные
function Model() {
    this.books = null;
    this.onBooksLoaded = new EventEmitter();
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