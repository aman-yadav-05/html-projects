console.log("js connected.");

// to do 
// store all the data to localStorage
// add delete button in each row so that book can be deleted
//add a scroll bar to view. if add many books.

//constructor
function book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display() {


}

// add methods to display prototype
Display.prototype.add = function (Book) {
    console.log("adding something.");
    let tableBody = document.getElementById('tableBody')
    let uiString = `
                    <tr>
                        <th scope="row">1</th>
                        <td>${Book.name}</td>
                        <td>${Book.author}</td>
                        <td>${Book.type}</td>
                     </tr>`;
    tableBody.innerHTML += uiString;

}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function (Book) {
    if (Book.name.length < 2 || Book.author.length < 2) {
        return false;
    } else {
        return true;
    }
}


//add submit eventListner for libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormsubmit);

function libraryFormsubmit(e) {
    e.preventDefault();
    console.log("You have submitted library form.")

    //when submit button will be clicked we will make a book object with name author and type
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    //there are three type available so we need to grab them
    let fiction = document.getElementById('fiction');
    let academics = document.getElementById('Academics');
    let nonFiction = document.getElementById('nonFiction');
    let type;

    //.checked tells us wheather the radio is checked or not
    if (fiction.checked) {
        type = fiction.value;
    } else if (academics.checked) {
        type = academics.value;
    } else if (nonFiction.checked) {
        type = nonFiction.checked;
    }
}

let Book = new book(name, author, type);
console.log(Book)

let display = new Display();

Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message</strong> ${displaymessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    setTimeout(() => {
        message.innerHTML = ''
    }, 2000);
}

//to validate Book object
if (display.validate(Book)) {
    display.add(Book);
    display.clear();
    diplay.show('success', `you have successfully added !`);
} else {
    display.show('error', `you can't add this book!`);
}
