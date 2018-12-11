//здесь происходит показ данных
function View(model, controller) {
    this.model = model;
    this.ctrl = controller;
    this.div = document.getElementById('books');
    this.filters = document.querySelectorAll('.filter span');
}

View.prototype.init = function () {
    var that = this;
    //стрелочная форма позволяет не использовать that т.к сохраняет контекст
    this.model.onBooksLoaded.subscribe((books) => {
        this.renderBooks(books);
    });
    for (var i=0;i<this.filters.length;i++){
        this.filters[i].addEventListener('click', function () {
                that.renderCategories(that.model.books);
            });
    }
}
View.prototype.renderBooks = function renderBooks(books) {
    books.map((elem) => {
        const book = document.createElement('div');
        const title = document.createElement('div');
        const image = document.createElement('img');
        const author = document.createElement('div');
        const rating = document.createElement('div');
        image.src=elem.src;
        image.classList.add('book-img');
        title.textContent = elem.title;
        title.classList.add('title');
        author.textContent = 'by ' + elem.author;
        author.classList.add('author');
        rating.textContent = elem.rating;
        book.append(image);
        book.append(title);
        book.append(author);
        book.append(rating);
        book.classList.add('book');
        this.div.append(book);
    });
View.prototype.clear = function clear(){
    while (this.div.childNodes.length !== 0) {
        this.div.removeChild(this.div.childNodes[0]);
    }
}
View.prototype.renderCategories = function renderCategories(books) {
    var components=[];
    switch (event.target.id) {
        case 'popular':{
            for (var i=0; i<books.length; i++){
                if (books[i].rating>=4){
                    components.push(books[i])
                }
            }
            break;
        }
        case 'all-books':{
            for (var i=0; i<books.length; i++){
                components.push(books[i])
            }
        }
        case 'most-recent':{
            for (var i=0; i<books.length; i++){
                if (books[i].created_at.slice(0,4) === ""+new Date().getFullYear()){
                    components.push(books[i])
                }
            }
        }
        case 'free':{
            for (var i=0; i<books.length; i++){
                if (books[i].price==0){
                    components.push(books[i])
                }
            }
        }
    }
    this.clear();
    this.renderBooks(components);
}
}