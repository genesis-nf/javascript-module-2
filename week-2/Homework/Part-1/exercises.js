/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(people => {
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    h1.innerText = people.name;
    h2.innerText = people.job;
    content.appendChild(h1)
    content.appendChild(h2)
  })
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  const content = document.querySelector("#content");
  const uList = document.createElement('ul');
  content.appendChild(uList);
  shopping.forEach(shop => {
    const list = document.createElement('li');
    list.innerText = shop;
    uList.appendChild(list);
  })
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here
  const booklist = document.createElement("ul");



  books.forEach( book => { 
    const bookItemLi = document.createElement("li");
    const bookDetailsP = document.createElement("p");
    bookDetailsP.textContent = `${book.title} - ${book.author}`;

    const bookImage = document.createElement("img"); //Declaro elemento imagen
    bookImage.setAttribute("src",book.imageBook);
    bookImage.style.width = "180px";

    bookItemLi.appendChild(bookDetailsP);
    bookItemLi.appendChild(bookImage);
    booklist.appendChild(bookItemLi);

    if (book.alreadyRead) { //Color a la lista de libros
      bookItemLi.style.backgroundColor = "green";
    } else {
      bookItemLi.style.backgroundColor = "red";
    };
  });
  document.body.appendChild(booklist);
};

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
