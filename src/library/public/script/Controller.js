function Controller() {
    this.model = new Model();
    this.view = new View(this.model, this)
}
Controller.prototype.start = function() {
    this.view.init();
    this.model.loadBooks();
}
