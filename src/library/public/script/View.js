//здесь происходит показ данных
function View(model, controller) {
    this.model = model;
    this.ctrl = controller;
    this.div = document.getElementById('books');
    this.all = document.getElementById('all-books');
    this.recent = document.getElementById('most-recent');
    this.popular = document.getElementById('popular');
    this.free = document.getElementById('free');
    this.search = document.getElementById('search');
    this.addBook = document.getElementById('add-book-btn');
    this.cancel = document.getElementById('cancel');
}

View.prototype.init = function () {
    var that = this;
    //стрелочная форма позволяет не использовать that т.к сохраняет контекст
    this.model.onBooksLoaded.subscribe((books) => {
        this.renderBooks(books);
    });
    this.all.addEventListener('click', () => {
        this.model.loadBooks();
    });
    this.recent.addEventListener('click', () => {
        this.ctrl.loadRecentBooks();
    });
    this.popular.addEventListener('click', () => {
        this.ctrl.loadPopularBooks();
    });
    this.free.addEventListener('click', () => {
        this.ctrl.loadFreeBooks();
    });
    this.search.addEventListener('keyup',(e) => {
        this.ctrl.searchBooks(e.target.value);
    });
    this.addBook.addEventListener('click', () => {
        document.getElementById('add-book-form').classList.remove('hidden');
    });
    this.cancel.addEventListener ('click', () => {
        document.getElementById('add-book-form').classList.add('hidden');
    })
}
View.prototype.renderBooks = function renderBooks(books) {
    this.clear();
    books.map((elem) => {
        const book = document.createElement('div');
        const title = document.createElement('div');
        const image = document.createElement('img');
        const author = document.createElement('div');
        image.src=elem.src;
        image.classList.add('book-img');
        title.textContent = elem.title;
        title.classList.add('title');
        author.textContent = 'by ' + elem.author;
        author.classList.add('author');
        book.append(image);
        book.append(title);
        book.append(author);
        for (var i=0; i<elem.rating; i++) {
            var rating = document.createElement('span');
            rating.classList.add('fa');
            rating.classList.add('fa-star');
            book.append(rating);
        }
        for (i=elem.rating; i<5; i++) {
            rating = document.createElement('span');
            rating.classList.add('fa');
            rating.classList.add('fa-star-o');
            book.append(rating);
        }
        book.classList.add('book');
        this.div.append(book);
    });
}


View.prototype.clear = function clear() {
    while (this.div.childNodes.length !== 0) {
        this.div.removeChild(this.div.firstChild);
    }
}
