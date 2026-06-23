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

<div>

${drawSquareSVG()}

</div>

</div>

`;
}

if(item.type==="angle"){
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

<div>

${drawAngleSVG()}

</div>

</div>

`;
}

if(item.type==="cube"){

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

<div>

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

</div>

`;

}

if(item.type==="cylinder"){

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

<div>

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

</div>

`;

}

if(item.type==="sphere"){

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

<div>

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

</div>

`;

}

if(item.type==="rectangle"){

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

<div>

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

</div>

`;

}

if(item.type==="perimeterRectangle"){

return `

<div
class="perimeterBlock"
style="
margin:15px 40px 15px 0;
display:inline-block;
vertical-align:top;
"
>

<div
style="
font-weight:bold;
margin-bottom:8px;
"
>

${item.serial || ""}

</div>

${drawPerimeterRectangleSVG(item.length,item.breadth)}

<div style="margin-top:10px">

পরিসীমা =

<span
class="answerBox"
style="width:120px"
></span>

</div>

</div>

`;

}

if(item.type==="perimeterSquare"){

return `

<div
class="perimeterBlock"
style="
margin:15px 40px 15px 0;
display:inline-block;
vertical-align:top;
"
>

<div
style="
font-weight:bold;
margin-bottom:8px;
"
>

${item.serial || ""}

</div>

${drawPerimeterSquareSVG(item.side)}

<div style="margin-top:10px">

পরিসীমা =

<span
class="answerBox"
style="width:120px"
></span>

</div>

</div>

`;

}

if(item.type==="numberLine"){
return drawNumberLineSVG();
}

if(item.type==="clock"){

return `

<div
class="clockBlock"
style="
display:inline-block;
vertical-align:top;
width:160px;
margin:15px;
"
>

<div
style="
font-weight:bold;
margin-bottom:8px;
"
>

${item.serial || ""}

</div>

${drawClockSVG(item.hour,item.minute)}

<div
style="
margin-top:10px;
display:flex;
align-items:center;
gap:8px;
"
>

<span>সময় =</span>

<span
class="answerBox"
style="
width:100px;
height:20px;
"
></span>

</div>

</div>

`;

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

<svg width="100" height="80">

<polygon
points="50,10 15,65 85,65"
fill="none"
stroke="#2563eb"
stroke-width="2.5"/>

</svg>

`;

}


function drawRectangleSVG() {

return `

<svg width="100" height="80">

<rect
x="15"
y="15"
width="70"
height="45"
fill="none"
stroke="#059669"
stroke-width="2.5"/>

</svg>

`;

}


function drawSquareSVG() {

return `

<svg width="90" height="90">

<rect
x="15"
y="15"
width="60"
height="60"
fill="none"
stroke="#dc2626"
stroke-width="2.5"/>

</svg>

`;

}


function drawAngleSVG() {

return `

<svg width="90" height="70">

<line
x1="20"
y1="55"
x2="20"
y2="15"
stroke="#7c3aed"
stroke-width="2.5"/>

<line
x1="20"
y1="55"
x2="70"
y2="55"
stroke="#7c3aed"
stroke-width="2.5"/>

</svg>

`;

}


function drawCubeSVG() {

return `

<svg width="110" height="95">

<rect
x="15"
y="30"
width="45"
height="45"
fill="none"
stroke="#ea580c"
stroke-width="2.5"/>

<rect
x="35"
y="15"
width="45"
height="45"
fill="none"
stroke="#ea580c"
stroke-width="2.5"/>

<line x1="15" y1="30" x2="35" y2="15"
stroke="#ea580c"
stroke-width="2.5"/>

<line x1="60" y1="30" x2="80" y2="15"
stroke="#ea580c"
stroke-width="2.5"/>

<line x1="60" y1="75" x2="80" y2="60"
stroke="#ea580c"
stroke-width="2.5"/>

<line x1="15" y1="75" x2="35" y2="60"
stroke="#ea580c"
stroke-width="2.5"/>

</svg>

`;

}


function drawCylinderSVG(){

return `

<svg width="100" height="90">

<ellipse
cx="50"
cy="20"
rx="25"
ry="10"
fill="none"
stroke="#ec4899"
stroke-width="2.5"/>

<line
x1="25"
y1="20"
x2="25"
y2="70"
stroke="#ec4899"
stroke-width="2.5"/>

<line
x1="75"
y1="20"
x2="75"
y2="70"
stroke="#ec4899"
stroke-width="2.5"/>

<ellipse
cx="50"
cy="70"
rx="25"
ry="10"
fill="none"
stroke="#ec4899"
stroke-width="2.5"/>

</svg>

`;

}


function drawSphereSVG(){

return `

<svg width="90" height="90">

<circle
cx="45"
cy="45"
r="28"
fill="none"
stroke="#16a34a"
stroke-width="2.5"/>

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

function drawClockSVG(hour,minute){

const minuteAngle = minute * 6;
const hourAngle = (hour % 12) * 30 + minute * 0.5;

const mx = 60 + 35 * Math.sin(minuteAngle * Math.PI / 180);
const my = 60 - 35 * Math.cos(minuteAngle * Math.PI / 180);

const hx = 60 + 25 * Math.sin(hourAngle * Math.PI / 180);
const hy = 60 - 25 * Math.cos(hourAngle * Math.PI / 180);

return `

<svg width="120" height="120">

<circle
cx="60"
cy="60"
r="45"
fill="white"
stroke="#0284c7"
stroke-width="3"/>

${Array.from({length:60})
.map((_,i)=>{

const angle = i * 6;

const x1 = 60 + 40 * Math.sin(angle * Math.PI / 180);
const y1 = 60 - 40 * Math.cos(angle * Math.PI / 180);

const x2 = 60 + 44 * Math.sin(angle * Math.PI / 180);
const y2 = 60 - 44 * Math.cos(angle * Math.PI / 180);

return `

<line
x1="${x1}"
y1="${y1}"
x2="${x2}"
y2="${y2}"
stroke="#888"
stroke-width="${i % 5 === 0 ? 2 : 1}"/>

`;

})
.join("")}

${Array.from({length:12})
.map((_,i)=>{

const n = i + 1;

const angle = n * 30;

const x = 60 + 30 * Math.sin(angle * Math.PI / 180);
const y = 60 - 30 * Math.cos(angle * Math.PI / 180);

return `

<text
x="${x}"
y="${y+4}"
font-size="10"
font-weight="bold"
text-anchor="middle"
fill="#000">

${n}

</text>

`;

})
.join("")}

<line
x1="60"
y1="60"
x2="${hx}"
y2="${hy}"
stroke="#dc2626"
stroke-width="3"
stroke-linecap="round"/>

<line
x1="60"
y1="60"
x2="${mx}"
y2="${my}"
stroke="#000"
stroke-width="2"
stroke-linecap="round"/>

<circle
cx="60"
cy="60"
r="2.5"
fill="#000"/>

</svg>

`;

}

function drawPerimeterRectangleSVG(length,breadth){

return `

<svg width="250" height="110">

<text
x="85"
y="20"
text-anchor="middle"
font-size="14"
font-weight="bold">

${length} সেমি

</text>

<rect
x="25"
y="25"
width="120"
height="50"
fill="none"
stroke="#059669"
stroke-width="3"/>

<text
x="150"
y="55"
font-size="14"
font-weight="bold"
text-anchor="start">

${breadth} সেমি

</text>

</svg>

`;

}


function drawPerimeterSquareSVG(side){

return `

<svg width="150" height="110">

<text
x="75"
y="18"
text-anchor="middle"
font-size="15"
font-weight="bold">

${side} সেমি

</text>

<rect
x="40"
y="28"
width="60"
height="60"
fill="none"
stroke="#059669"
stroke-width="4"/>

</svg>

`;

}