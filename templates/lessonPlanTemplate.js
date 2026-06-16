export function buildTemplate(data, chapterData) {

if (!chapterData) {

return `

<h2>

Lesson not found.

</h2>

`;

}


const isEnglish = data.subject === "English";

const fontFamily = isEnglish
? "'Times New Roman', serif"
: "'SolaimanLipi', sans-serif";

const titleText = isEnglish ? "Lesson Plan" : "পাঠ পরিকল্পনা";

const schoolText = isEnglish
? "School Name"
: "বিদ্যালয়ের নাম";

const teacherText = isEnglish
? "Teacher's Name"
: "শিক্ষকের নাম";

const classText = isEnglish
? "Class"
: "শ্রেণি";

const subjectText = isEnglish
? "Subject"
: "বিষয়";

const lessonText = isEnglish
? "Lesson Name"
: "পাঠের নাম";

const durationText = isEnglish
? "Duration"
: "সময়";

const minuteText = isEnglish
? "Minutes"
: "মিনিট";

const teacherSignText = isEnglish
? "Teacher's Signature:"
: "শিক্ষকের স্বাক্ষর:";

const headSignText = isEnglish
? "Head Teacher's Signature:"
: "প্রধান শিক্ষকের স্বাক্ষর:";


return `

<div
style="
max-width:850px;
margin:auto;
padding:15px 25px;
font-family:${fontFamily};
font-size:12px;
line-height:1.3;
color:black;
background:white;
"
>

<h2
style="
text-align:center;
text-decoration:underline;
margin-bottom:18px;
font-size:18px;
"
>

${titleText}

</h2>


<p style="margin:0">

<b>${schoolText}:</b>
${data.school}

<br>

<b>${teacherText}:</b>
${data.teacher}

<br>

<b>${classText}:</b>
${data.className}

<br>

<b>${subjectText}:</b>
${data.subject}

<br>

<b>${data.chapter}</b>


<br>

<b>${durationText}:</b>
${data.duration} ${minuteText}

</p>


<hr>


${Object.entries(chapterData)

.map(([title, content]) => {

if (Array.isArray(content)) {

return `

<h3
style="
color:#0a5d8f;
font-size:12px;
margin-top:16px;
margin-bottom:6px;
text-decoration:underline;
"
>

${title}

</h3>

<ul
style="
padding-left:22px;
margin-top:0;
"
>

${content
.map(
x => `

<li>

${x}

</li>

`
)
.join("")}

</ul>

`;

}


if (
typeof content === "object" &&
content !== null
) {

return `

<h3
style="
color:#0a5d8f;
font-size:12px;
margin-top:16px;
margin-bottom:6px;
text-decoration:underline;
"
>

${title}

</h3>

${Object.entries(content)

.map(([subTitle, subContent]) => {

if (Array.isArray(subContent)) {

return `

<h4
style="
margin-bottom:4px;
"
>

${subTitle}

</h4>

<ul
style="
padding-left:22px;
margin-top:0;
"
>

${subContent
.map(
x => `

<li>

${x}

</li>

`
)
.join("")}

</ul>

`;

}


return `

<h4
style="
margin-bottom:4px;
"
>

${subTitle}

</h4>

<p
style="
margin-top:0;
"
>

${subContent}

</p>

`;

})

.join("")}

`;

}


return `

<h3
style="
color:#0a5d8f;
font-size:12px;
margin-top:16px;
margin-bottom:6px;
text-decoration:underline;
"
>

${title}

</h3>

<p
style="
margin-top:0;
"
>

${content}

</p>

`;

})

.join("")}


<hr>


<div
style="
display:flex;
justify-content:space-between;
align-items:flex-start;
margin-top:15px;
font-size:12px;
page-break-inside:avoid;
break-inside:avoid;
"
>

<div>

<b>

${teacherSignText}

</b>

<br><br>

________________

</div>


<div
style="
text-align:right;
"
>

<b>

${headSignText}

</b>

<br><br>

________________

</div>

</div>


</div>

`;

}