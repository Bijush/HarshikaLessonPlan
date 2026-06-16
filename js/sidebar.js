const menuBtn =
document.getElementById(
"menuBtn"
);

const sidebar =
document.getElementById(
"sidebar"
);

const overlay =
document.getElementById(
"overlay"
);


// ======================
// Open Sidebar
// ======================

menuBtn.onclick = ()=>{

sidebar.classList.add(
"show"
);

overlay.classList.add(
"show"
);

menuBtn.classList.add(
"hide"
);

};


// ======================
// Close Sidebar Function
// ======================

function closeSidebar(){

sidebar.classList.remove(
"show"
);

overlay.classList.remove(
"show"
);

menuBtn.classList.remove(
"hide"
);

}


// ======================
// Overlay Click
// ======================

overlay.onclick =
closeSidebar;


// ======================
// Link Click
// ======================

document
.querySelectorAll(
"#sidebar a"
)
.forEach(

link=>{

link.onclick =
closeSidebar;

}

);


// ======================
// ESC Key
// ======================

document.addEventListener(

"keydown",

event=>{

if(

event.key==="Escape"

&&

sidebar.classList.contains(
"show"
)

){

closeSidebar();

}

}

);


// ======================
// Outside Click
// ======================

document.addEventListener(

"click",

event=>{

if(

sidebar.classList.contains(
"show"
)

&&

!sidebar.contains(
event.target
)

&&

event.target!==menuBtn

){

closeSidebar();

}

}

);

const aboutBtn =
document.getElementById(
"aboutBtn"
);

const aboutModal =
document.getElementById(
"aboutModal"
);

const closeAbout =
document.getElementById(
"closeAbout"
);


aboutBtn.onclick = ()=>{

aboutModal.style.display =

"flex";

};


closeAbout.onclick = ()=>{

aboutModal.style.display =

"none";

};


aboutModal.onclick = (e)=>{

if(

e.target === aboutModal

){

aboutModal.style.display =

"none";

}

};