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