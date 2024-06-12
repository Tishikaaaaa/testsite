document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');
    const searchInput = document.getElementById('searchInput');

    let books = [];

    bookForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const genre = document.getElementById('genre').value;
        const publicationDate = document.getElementById('publicationDate').value;
        const isbn = document.getElementById('isbn').value;

        const book = { title, author, genre, publicationDate, isbn };
        books.push(book);

        displayBooks(books);
        bookForm.reset();
    });

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );
        displayBooks(filteredBooks);
    });

    function displayBooks(books) {
        bookList.innerHTML = '';
        books.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author} - ${book.genre} (Published: ${book.publicationDate}, ISBN: ${book.isbn})`;
            bookList.appendChild(li);
        });
    }
});
