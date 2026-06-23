import {
getLessons
}
from "../ai/lessonEngine.js";

import {
buildTemplate
}
from "../templates/lessonPlanTemplate.js";

const output =
document.getElementById(
"output"
);

const classSelect =
document.getElementById(
"className"
);

const subjectSelect =
document.getElementById(
"subject"
);

const chapterSelect =
document.getElementById(
"chapter"
);

const generateBtn =
document.getElementById(
"generateBtn"
);

const printBtn =
document.getElementById(
"printBtn"
);
const downloadBtn =
document.getElementById(
"downloadBtn"
);
const schoolError =
document.getElementById(
"schoolError"
);

const teacherError =
document.getElementById(
"teacherError"
);

const classError =
document.getElementById(
"classError"
);

const subjectError =
document.getElementById(
"subjectError"
);

const chapterError =
document.getElementById(
"chapterError"
);

const schoolSuccess =
document.getElementById(
"schoolSuccess"
);

const teacherSuccess =
document.getElementById(
"teacherSuccess"
);

const classSuccess =
document.getElementById(
"classSuccess"
);

const subjectSuccess =
document.getElementById(
"subjectSuccess"
);

const chapterSuccess =
document.getElementById(
"chapterSuccess"
);



// ======================
// AUTO CHAPTER DROPDOWN
// ======================

function updateChapterList(){

chapterSelect.innerHTML =

`
<option value="">
Select Chapter
</option>
`;


const lessons =

getLessons(

classSelect.value,

subjectSelect.value

);


Object
.keys(
lessons
)

.forEach(

name=>{

chapterSelect.innerHTML +=

`

<option value="${name}">

${name}

</option>

`;

}

);

}

// First load
updateChapterList();
document
.getElementById(
"school"
)
.oninput = ()=>{

schoolSuccess.style.display =
document
.getElementById(
"school"
)
.value
.trim()
? "block"
: "none";

};


document
.getElementById(
"teacher"
)
.oninput = ()=>{

teacherSuccess.style.display =
document
.getElementById(
"teacher"
)
.value
.trim()
? "block"
: "none";

};


classSelect.onchange = ()=>{

updateChapterList();

classSuccess.style.display =

classSelect.value !==
"Select Class"

? "block"

: "none";

};


subjectSelect.onchange = ()=>{

updateChapterList();

subjectSuccess.style.display =

subjectSelect.value !==
"Select Subject"

? "block"

: "none";

};


chapterSelect.onchange = ()=>{

chapterSuccess.style.display =

chapterSelect.value

? "block"

: "none";

};



// ======================
// GENERATE LESSON PLAN
// ======================

generateBtn.onclick = ()=>{

downloadBtn.style.display =
"none";


const data = {

school:
document
.getElementById(
"school"
)
.value
.trim(),

teacher:
document
.getElementById(
"teacher"
)
.value
.trim(),

className:
classSelect.value,

subject:
subjectSelect.value,

chapter:
chapterSelect.value,

duration:
document
.getElementById(
"duration"
)
.value

};

// Clear previous messages

schoolError.innerHTML = "";
teacherError.innerHTML = "";
classError.innerHTML = "";
subjectError.innerHTML = "";
chapterError.innerHTML = "";


let valid = true;

// School

if(!data.school){

schoolError.innerHTML =
"School Name Required";

valid = false;

}

else{

schoolSuccess.style.display =
"block";

}

// Teacher

if(!data.teacher){

teacherError.innerHTML =
"Teacher Name Required";

valid = false;

}

else{

teacherSuccess.style.display =
"block";

}

// Class

if(
data.className ===
"Select Class"
){

classError.innerHTML =
"Class Required";

valid = false;

}

else{

classSuccess.style.display =
"block";

}

// Subject

if(
data.subject ===
"Select Subject"
){

subjectError.innerHTML =
"Subject Required";

valid = false;

}

else{

subjectSuccess.style.display =
"block";

}

// Chapter

if(!data.chapter){

chapterError.innerHTML =
"Chapter Required";

valid = false;

}

else{

chapterSuccess.style.display =
"block";

}

// Stop if invalid

if(!valid){

return;

}

// Database

const lessons =

getLessons(

data.className,

data.subject

);

const chapterData =

lessons[
data.chapter
];

if(
!chapterData
){

output.innerHTML =

"<h2>Lesson not found.</h2>";

return;

}

// Generate lesson plan

output.innerHTML =

buildTemplate(

data,

chapterData

);

// Show download button

downloadBtn.style.display =
"block";

// Scroll

output.scrollIntoView({

behavior:"smooth"

});

};





// ======================
// PRINT / PDF
// ======================
/*
printBtn.onclick = ()=>{

if(
!output.innerHTML
){

alert(

"Generate lesson plan first."

);

return;

}


window.print();

};
*/
downloadBtn.onclick = ()=>{

console.log("Lesson Download Clicked");

console.log(typeof html2pdf);

console.log(output);

if(!output.innerHTML){

alert(
"Generate lesson plan first."
);

return;

}

const lesson = output.firstElementChild;

console.log(lesson);

if(!lesson){

alert(
"Lesson element not found."
);

return;

}

html2pdf()

.set({

margin:10,

filename:

`${chapterSelect.value}.pdf`,

image:{

type:"jpeg",

quality:0.98

},

html2canvas:{

scale:1,

backgroundColor:"#ffffff",

allowTaint:true,

useCORS:true,

scrollX:0,

scrollY:0

},

jsPDF:{

unit:"mm",

format:"a4",

orientation:"portrait"

}

})

.from(

lesson

)

.save()

.then(()=>{

console.log(

"PDF Saved Successfully"

);

})

.catch(

err=>{

console.error(

"PDF Error:",

err

);

alert(

"PDF Download Failed"

);

}

);

};