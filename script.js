let booksArray = [];

const addBook = (e) => {
    e.preventDefault(); // stop form submitting
    
    let book = {
        id: Date.now(),
        name: document.getElementById('bookTitle').value,
        author: document.getElementById('bookAuthor').value,
        pages: document.getElementById('bookPages').value
    }

    booksArray.push(book);

    // check for existing data in localstorage and convert it back to obj
    let existing = JSON.parse(localStorage.getItem('BooksList'));

    // save to localstorage
    let save = localStorage.setItem('BooksList', JSON.stringify(booksArray));
   
    document.forms[0].reset(); // clear form after submit

    const displayBooks = () => {
        for(let i=0; i<booksArray.length; i++) {
            const info = document.getElementById('info');

            info.innerHTML = `${i+1}. Name: ${booksArray[i].name}, Author: ${booksArray[i].author}, Pages: ${booksArray[i].pages}, ID: ${booksArray[i].id}`;
        }
    }
    displayBooks();


}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addBook);
});


    






