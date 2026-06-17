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


// Class / Subject change
classSelect.onchange =
updateChapterList;

subjectSelect.onchange =
updateChapterList;


// First load
updateChapterList();




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



// Validation
if(
!data.chapter
){

output.innerHTML =

"<h2>Please select a chapter.</h2>";

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



// Generate
output.innerHTML =

buildTemplate(

data,

chapterData

);

document
.getElementById(
"downloadBtn"
)
.style.display =
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
downloadBtn.onclick = () => {

  if (!output.innerHTML) {
    alert("Generate lesson plan first.");
    return;
  }

  const lesson = output.querySelector("div");

  html2pdf()
    .set({
      margin: 8,
      filename: `${chapterSelect.value}.pdf`,
      image: {
        type: "jpeg",
        quality: 1
      },
      html2canvas: {
        scale: 4,
        scrollX: 0,
        scrollY: 0
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait"
      }
    })
    .from(lesson)
    .save();

};