console.log("es6 version of college library site ");

class book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(Book) {
        console.log("adding book.");
        let tableBody = document.getElementById('tableBody')
        let uiString = `
                        <tr>
                            <td>${Book.name}</td>
                            <td>${Book.author}</td>
                            <td>${Book.type}</td>
                         </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(Book) {
        if (Book.name.length < 2 || Book.author.length < 2) {
            return false;
        } else {
            return true;
        }
    }

    show(type, displaymessage) {
        let text;
        if(text==="success"){
            text="success";
        }else{
            text="error";
        }
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${text}!</strong> ${displaymessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
        setTimeout(() => {
            message.innerHTML = ''
        }, 5000);
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

    let Book=new book(name, author,type);
    console.log(Book)
    let display=new Display();
    if (display.validate(Book)) {
        display.add(Book);
        display.clear();
        display.show(`success`,"your book has been successfully added.")
    } else {
        display.show("error","sorry cant add this book");
    }
}