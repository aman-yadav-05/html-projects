console.log("notetaking.js is connected!");
shownote();
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if (notes == null) {
        notesObj=[];
    } else {
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    shownote();
});

function shownote() {
    let notes=localStorage.getItem("notes");
    if (notes == null) {
        notesObj=[];
    } else {
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html += `
        <div class="card mx-2 my-2" style="width: 18rem">
					<div class="card-body">
						<h5 class="card-title">Notes ${index+1}</h5>
						<p class="card-text">
                        ${element}
						</p>
						<button id="${index}" onclick="deleteNote(this.id) class="btn btn-primary">Delete</button>
					</div>
				</div>  
        `;
    });
    let noteEle=document.getElementById('notes');
    if (notesObj.length != 0) {
        noteEle.innerHTML=html; 
    } else {
        noteEle.innerHTML="Nothing to show add notes above.";
    }
}

function deleteNote(index) {
    console.log(index)
    let notes=localStorage.getItem("notes");
    if (notes == null) {
        notesObj=[];
    } else {
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownote();
}