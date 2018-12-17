//посредник между обработкой и представлением данных
function Controller() {
    this.model = new Model();
    this.view = new View(this.model, this)
}
Controller.prototype.start = function() {
    this.view.init();
    this.model.loadBooks();
}
Controller.prototype.loadPopularBooks = function() {
    this.model.loadPopularBooks();
}
Controller.prototype.loadRecentBooks = function() {
    this.model.loadRecentBooks();
}
Controller.prototype.loadFreeBooks = function() {
    this.model.loadFreeBooks();
}
Controller.prototype.searchBooks = function(text) {
    this.model.searchBooks(text);
}
Controller.prototype.loadBook = function (id) {
    this.model.loadBook(id);
}
Controller.prototype.addBook = function (book) {
    this.model.addBook(book);
}
Controller.prototype.updateBook = function (book,id) {
    this.model.updateBook(book,id);
}
Controller.prototype.deleteBook = function (id) {
    this.model.deleteBook(id);
}