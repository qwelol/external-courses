//здесь происходит показ данных
function View(model, controller) {
    this.model = model;
    this.ctrl = controller;
    this.div = document.getElementById('books');
}

View.prototype.init = function () {
    var that = this;
    //стрелочная форма позволяет не использовать that т.к сохраняет контекст
    this.model.onBooksLoaded.subscribe((books) => {
        this.renderBooks(books)
    })
}
View.prototype.renderBooks = function renderBooks(books) {
    books.map((elem) => {
        const book = document.createElement('div');
        const title = document.createElement('div');
        const image = document.createElement('img');
        const author = document.createElement('span');
        const rating = document.createElement('div');
        image.src=elem.src;
        image.classList.add('book-img');
        title.textContent = elem.title;
        title.classList.add('title');
        author.textContent = elem.author;
        author.classList.add('author');
        rating.textContent = elem.rating;
        book.append(image);
        book.append(title);
        book.append(author);
        book.append(rating);
        book.classList.add('book');
        this.div.append(book);
    });
}