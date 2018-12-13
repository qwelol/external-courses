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
    this.cancel = document.getElementsByClassName('cancel');
    this.info = document.getElementById('book-info');
}

View.prototype.init = function () {
    var that = this;
    //стрелочная форма позволяет не использовать that т.к сохраняет контекст
    this.model.onBooksLoaded.subscribe((books) => {
        this.renderBooks(books);
    });
    this.model.onBookLoaded.subscribe((book) => {
        this.renderBook(book);
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
    for(var i=0;i<this.cancel.length;i++){
        this.cancel[i].addEventListener ('click', () => {
            var form = document.getElementsByClassName('popup-form');
            for (var i=0; i<form.length;i++){
                form[i].classList.add('hidden');
            }
        })
    }
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
        book.addEventListener('click', ()=>{
            this.ctrl.loadBook(elem.id);
        })
        this.div.append(book);
    });
}

View.prototype.renderBook = function renderBook(book) {
    // id, title, src, author, description, keywords, rating, price,created_at
    this.info.classList.remove('hidden');
    document.getElementById('info-img').src=book.src;
    document.getElementsByName('info-title')[0].value = book.title;
    document.getElementsByName('info-author')[0].value = book.author;
    document.getElementsByName('info-description')[0].value = book.description;
    document.getElementsByName('info-keywords')[0].value = book.keywords;
    document.getElementsByName('info-rating')[0].value = book.rating;
    document.getElementsByName('info-price')[0].value = book.price;
    var d = new Date(book.created_at);
    var month = d.getMonth();
    var day = d.getDate();
    var output = d.getFullYear() + "-"
        + (month<10 ? '0' : '') + month + '-'
        + (day<10 ? '0' : '') + day;
    document.getElementsByName('info-created_at')[0].value = output;
}

View.prototype.clear = function clear() {
    while (this.div.childNodes.length !== 0) {
        this.div.removeChild(this.div.firstChild);
    }
}
