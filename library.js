//button event listeners

const newBookButton = document.querySelector('#newButton');
newBookButton.addEventListener('click', () => popUpForm.style.display = 'block');

const addButton = document.querySelector('#addButton');
addButton.addEventListener('click', addBookToLibrary);

const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');


//book constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value + 'pg';
    this.read = form.read.checked;
  }
}

//add new book to library
let myLibrary = [];
let newBook;

function addBookToLibrary() {
  popUpForm.style.display = 'none';
  
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
  form.reset();
}

function render() {
  const display = document.getElementById('container');
  const books = document.querySelectorAll('.book');
  books.forEach(book => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}

function createBook(item) {
  const library = document.querySelector('#container');
  const bookDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const pageDiv = document.createElement('div');
  const removeButton = document.createElement('button');
  const readButton = document.createElement('button');

  bookDiv.classList.add('book');
  bookDiv.setAttribute('id', myLibrary.indexOf(item));

  titleDiv.textContent = item.title;
  titleDiv.classList.add('title');
  bookDiv.appendChild(titleDiv);

  authorDiv.textContent = item.author;
  authorDiv.classList.add('author');
  bookDiv.appendChild(authorDiv);

  pageDiv.textContent = item.pages;
  pageDiv.classList.add('pages');
  bookDiv.appendChild(pageDiv);

  readButton.classList.add('readButton');
  bookDiv.appendChild(readButton);

  if (item.read === false) {
    readButton.textContent = 'Not Read';
    readButton.style.backgroundColor = '#e04f63';
  } else {
    readButton.textContent = 'Read';
    readButton.style.backgroundColor = '#63da63';
  }

  removeButton.textContent = 'Remove';
  removeButton.setAttribute('id', 'removeButton');
  bookDiv.appendChild(removeButton);

  library.appendChild(bookDiv);

  readButton.addEventListener('click', () => {
    item.read = !item.read;
    render();
  })

}