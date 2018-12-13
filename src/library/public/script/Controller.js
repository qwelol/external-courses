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