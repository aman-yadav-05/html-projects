console.log("notetaking.js is connected!");
shownote();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let title = document.getElementById("title");

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    // console.log(notesObj);
    
    let myobj = {
        title: title.value,
        text: addTxt.value
    }
    notesObj.push(myobj);
    addTxt.value = "";
    title.value="";
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownote();
});

//function to show note.
function shownote() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard mx-2 my-2" style="width: 18rem">
					<div class="card-body">
						<h5 class="card-title">${element.title}</h5>
						<p class="card-text">
                        ${element.text}
						</p>
						<button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
					</div>
		</div>  
        `;
    });
    let noteEle = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteEle.innerHTML = html;
    } else {
        noteEle.innerHTML = `Nothing to show, use "add your notes" to add some notes!`;
    }
}


//deleting note.
function deleteNote(index) {
    console.log(index)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownote();
}


// search function 
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
    let inputVal = searchTxt.value.toLowerCase();
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
        let cardtext = element.getElementsByTagName("p")[0].innerText;

        // let text =cardtext[0].innerText;
        if (cardtext.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })

})