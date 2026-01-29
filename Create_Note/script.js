const noteContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updateLocalstorage(){
    localStorage.setItem("notes", noteContainer.innerHTML);
}
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "images/delete.png";
    img.contentEditable = "false";

    inputBox.appendChild(img);
    noteContainer.appendChild(inputBox);

    updateLocalstorage();
});

noteContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove();
        updateLocalstorage();
    }
    
});

noteContainer.addEventListener("keyup", function (e) {
    if (e.target.classList.contains("input-box")) {
        updateLocalstorage();
    }
});
noteContainer.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.execCommand("insertLineBreak");
    }
});

