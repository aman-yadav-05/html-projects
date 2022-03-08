console.log("NoteTakingWebsite.js is connected!");

let addbtn=document.getElementsByClassName("btn");
addbtn=addEventListener("click",function(e){
    let addtxt=document.getElementById('addtxt');
    let notes=localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value="";
    shownotes();
});

function shownotes() {
    let notes=localStorage.getItem("notes");
    if (notes==null) {
        notesObj=[];
    } else {
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`<div class="card">
                    <div class="innercard">
                    <h5 class="head">Note ${index + 1}</h5>
                    <p>${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn">Delete Note</button>
                    </div>
                </div>`;
    });
    let notesElm=document.getElementsByClassName("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML=html;
    } else {
        notesElm.innerHTML=`NOthing to show! use add note section above.`
    }
}
function deleteNote(index) {
    let notes=localStorage.getItem("notes")
    if (notes==null) {
        notesObj=[]
    } else {
        notesObj=JSON.parse(notes)
    }
    
    notesObj.splice(index,1)
    localStorage.setItem("notes",JSON.stringify(notesObj))
    shownotes()
}

let search=document.getElementById("inpSearch")
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
    let noteCards=document.getElementsByClassName("card");
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputval)) {
            element.style.display="block"
        } else {
            element.style.display="none"
        }
    })
})