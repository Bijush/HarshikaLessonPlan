export function buildMathQuestionPaper(data, paper) {

  if (!paper) {
    return "<h2>Math Question Paper not found.</h2>";
  }

  const topKeys = [
    "পরীক্ষার_নাম",
    "শ্রেণি",
    "বিষয়",
    "পূর্ণমান",
    "সময়"
  ];

  return `

<div
class="mathPaper"
style="
max-width:850px;
margin:auto;
padding:12px;
background:white;
font-family:'Nirmala UI',sans-serif;
font-size:13px;
line-height:1.4;
color:black;
">

<h2
style="
text-align:center;
font-size:18px;
font-weight:bold;
margin-bottom:10px;
"
>

${paper["পরীক্ষার_নাম"]}

</h2>

<div
style="
text-align:center;
margin-bottom:8px;
"
>

<b>বিষয় :</b>
${paper["বিষয়"]}

<br>

<b>শ্রেণি :</b>
${paper["শ্রেণি"]}

</div>

<table
width="100%"
style="
border-collapse:collapse;
margin-bottom:8px;
"
>

<tr>

<td>

<b>
সময় : ${paper["সময়"]}
</b>

</td>

<td align="right">

<b>
পূর্ণমান : ${paper["পূর্ণমান"]}
</b>

</td>

</tr>

</table>

<hr>

${Object.entries(paper)

.filter(
([key]) => !topKeys.includes(key)
)

.map(
([number,q]) => `

<div class="questionBlock">

<div
style="
display:flex;
justify-content:space-between;
font-weight:bold;
background:#fef3c7;
padding:8px 12px;
border-radius:10px;
border:1px solid #fbbf24;
"
>

<div>

${number}. ${q.title}

</div>

<div>

${q.marks}

</div>

</div>

<div
style="
margin-left:20px;
margin-top:10px;
"
>

<div
style="
display:flex;
flex-wrap:wrap;
gap:12px;
"
>

${(q.questions || [])

.map(item => {

// ===================================
// Vertical Addition
// ===================================
if(item.type==="verticalAddition"){

return `

<div
style="
display:flex;
align-items:flex-start;
gap:10px;
margin:15px 0;
"
>

<div
style="
font-weight:bold;
font-size:18px;
margin-top:10px;
min-width:35px;
"
>

${item.serial || ""}

</div>

<div
style="
display:flex;
flex-direction:column;
padding:10px;
border:2px solid #38bdf8;
border-radius:12px;
background:#f0f9ff;
"
>

<div align="right">

${item.a}

<br>

+ ${item.b}

<hr>

</div>

</div>

</div>

`;

}


// ===================================
// Vertical Subtraction
// ===================================
if(item.type==="verticalSubtraction"){

return `

<div
style="
display:flex;
align-items:flex-start;
gap:10px;
margin:15px 0;
"
>

<div
style="
font-weight:bold;
min-width:30px;
padding-top:8px;
"
>

${item.serial || ""}

</div>

<div
style="
display:flex;
flex-direction:column;
padding:10px;
border:2px solid #38bdf8;
border-radius:12px;
background:#f0f9ff;
"
>

<div align="right">

${item.a}

<br>

− ${item.b}

<hr>

</div>

</div>

</div>

`;

}


// ===================================
// Multiplication
// ===================================
if(item.type==="multiplication"){

return `

<div
style="
display:flex;
align-items:flex-start;
gap:10px;
margin:15px 0;
"
>

<div
style="
font-weight:bold;
min-width:30px;
padding-top:8px;
"
>

${item.serial || ""}

</div>

<div
style="
display:flex;
flex-direction:column;
padding:10px;
border:2px solid #38bdf8;
border-radius:12px;
background:#f0f9ff;
"
>

<div align="right">

${item.a}

<br>

× ${item.b}

<hr>

</div>

</div>

</div>

`;

}


// ===================================
// Division
// ===================================
if(item.type==="division"){

return `

<div
style="
margin:15px 0;
display:inline-block;
padding:10px;
border:2px solid #a78bfa;
border-radius:12px;
background:#f5f3ff;
"
>

<div>

${item.a} ÷ ${item.b}

<span class="answerBox"></span>

</div>

</div>

`;

}


// ===================================
// Geometry
// ===================================
if(item.type==="geometry"){

return `

<div
style="
margin:15px 0;
padding:12px;
border:2px solid #f59e0b;
background:#fffbeb;
border-radius:12px;
"
>

${item.label}

</div>

`;

}

if(item.type==="triangle"){
  return drawTriangleSVG();
}



if(item.type==="square"){
  return drawSquareSVG();
}

if(item.type==="angle"){
  return drawAngleSVG();
}

if(item.type==="cube"){

return `

<div style="margin:15px 0">

${drawCubeSVG()}

<div style="margin-top:10px">

${item.sideLabel}

<span class="answerBox"></span>

</div>

<div style="margin-top:10px">

${item.cornerLabel}

<span class="answerBox"></span>

</div>

</div>

`;

}
if(item.type==="cylinder"){

return `

<div style="margin:15px 0">

${drawCylinderSVG()}

<div style="margin-top:10px">

${item.sideLabel}

<span class="answerBox"></span>

</div>

<div style="margin-top:10px">

${item.cornerLabel}

<span class="answerBox"></span>

</div>

</div>

`;

}
if(item.type==="sphere"){

return `

<div style="margin:15px 0">

${drawSphereSVG()}

<div style="margin-top:10px">

${item.sideLabel}

<span class="answerBox"></span>

</div>

<div style="margin-top:10px">

${item.cornerLabel}

<span class="answerBox"></span>

</div>

</div>

`;

}
if(item.type==="rectangle"){

return `

<div style="margin:15px 0">

${drawRectangleSVG()}

<div style="margin-top:10px">

${item.sideLabel}

<span class="answerBox"></span>

</div>

<div style="margin-top:10px">

${item.cornerLabel}

<span class="answerBox"></span>

</div>

</div>

`;

}

if(item.type==="numberLine"){
  return drawNumberLineSVG();
}

if(item.type==="clock"){
  return drawClockSVG();
}
// ===================================
// Default
// ===================================
const text =
typeof item === "object"
? item.text
: item;

const showBox =
typeof item === "object"
? item.answerBox !== false
: true;

const boxWidth =
typeof item === "object"
? (item.answerBoxWidth || "60px")
: "60px";

return `

<div class="defaultQuestion">

${text}

${showBox
? `<span
     class="answerBox"
     style="
       width:${boxWidth};
       display:inline-block;
       height:18px;
       margin-left:6px;
       border:2px solid #7dd3fc;
       border-radius:6px;
       background:#fff;
       vertical-align:middle;
     ">
   </span>`
: ""}

</div>

`;

})

.join("")}
</div>
</div>

</div>

`)

.join("")}

</div>

`;

}

// ===============================
// GEOMETRY SVG HELPERS
// ===============================

function drawTriangleSVG() {

return `

<svg width="120" height="90">

<polygon
points="60,10 10,80 110,80"
fill="none"
stroke="#2563eb"
stroke-width="3"/>

</svg>

`;

}


function drawRectangleSVG() {

return `

<svg width="120" height="80">

<rect
x="10"
y="10"
width="100"
height="60"
fill="none"
stroke="#059669"
stroke-width="3"/>

</svg>

`;

}


function drawSquareSVG() {

return `

<svg width="100" height="100">

<rect
x="10"
y="10"
width="80"
height="80"
fill="none"
stroke="#dc2626"
stroke-width="3"/>

</svg>

`;

}


function drawAngleSVG() {

return `

<svg width="100" height="80">

<line
x1="20"
y1="60"
x2="20"
y2="10"
stroke="#7c3aed"
stroke-width="3"/>

<line
x1="20"
y1="60"
x2="80"
y2="60"
stroke="#7c3aed"
stroke-width="3"/>

</svg>

`;

}


function drawCubeSVG() {

return `

<svg width="130" height="110">

<rect
x="20"
y="30"
width="60"
height="60"
fill="none"
stroke="#ea580c"
stroke-width="3"/>

<rect
x="45"
y="10"
width="60"
height="60"
fill="none"
stroke="#ea580c"
stroke-width="3"/>

<line x1="20" y1="30" x2="45" y2="10"
stroke="#ea580c"
stroke-width="3"/>

<line x1="80" y1="30" x2="105" y2="10"
stroke="#ea580c"
stroke-width="3"/>

<line x1="80" y1="90" x2="105" y2="70"
stroke="#ea580c"
stroke-width="3"/>

<line x1="20" y1="90" x2="45" y2="70"
stroke="#ea580c"
stroke-width="3"/>

</svg>

`;

}
function drawCylinderSVG(){

return `

<svg width="120" height="100">

<ellipse
cx="60"
cy="20"
rx="35"
ry="12"
fill="none"
stroke="#ec4899"
stroke-width="3"/>

<line
x1="25"
y1="20"
x2="25"
y2="80"
stroke="#ec4899"
stroke-width="3"/>

<line
x1="95"
y1="20"
x2="95"
y2="80"
stroke="#ec4899"
stroke-width="3"/>

<ellipse
cx="60"
cy="80"
rx="35"
ry="12"
fill="none"
stroke="#ec4899"
stroke-width="3"/>

</svg>

`;

}
function drawSphereSVG(){

return `

<svg width="100" height="100">

<circle
cx="50"
cy="50"
r="35"
fill="none"
stroke="#16a34a"
stroke-width="3"/>

</svg>

`;

}
// ===============================
// NUMBER LINE
// ===============================

function drawNumberLineSVG() {

return `

<svg width="300" height="60">

<line
x1="20"
y1="30"
x2="280"
y2="30"
stroke="#000"
stroke-width="2"/>

${Array.from({length:11})

.map((_,i)=>`

<line
x1="${20+i*25}"
y1="20"
x2="${20+i*25}"
y2="40"
stroke="black"
stroke-width="2"/>

<text
x="${15+i*25}"
y="55"
font-size="12">

${i}

</text>

`)

.join("")}

</svg>

`;

}


// ===============================
// CLOCK SVG
// ===============================

function drawClockSVG() {

return `

<svg width="120" height="120">

<circle
cx="60"
cy="60"
r="45"
fill="white"
stroke="#0284c7"
stroke-width="3"/>

<line
x1="60"
y1="60"
x2="60"
y2="25"
stroke="#dc2626"
stroke-width="3"/>

<line
x1="60"
y1="60"
x2="85"
y2="60"
stroke="#000"
stroke-width="3"/>

</svg>

`;

}