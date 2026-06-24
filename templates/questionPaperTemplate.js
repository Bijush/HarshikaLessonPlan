export function buildQuestionPaper(data, paper) {

  if (!paper) {
    return "<h2>Question Paper not found.</h2>";
  }

  const topKeys = [
    "পরীক্ষার_নাম",
    "শ্রেণি",
    "বিষয়",
    "পূর্ণমান",
    "সময়",
    "examName",
    "class",
    "subject",
    "fullMarks",
    "time"
  ];

  const isEnglish = paper.subject === "English";

  const fontFamily = isEnglish
    ? "Arial, Helvetica, sans-serif"
    : "'SolaimanLipi', 'Kalpurush', 'Nirmala UI', sans-serif";

  const textStyle = isEnglish
    ? `
      line-height:1.5;
      word-spacing:1px;
      letter-spacing:0.2px;
    `
    : `
      line-height:1.3;
    `;

  const examName = isEnglish ? paper.examName : paper["পরীক্ষার_নাম"];
  const subject = isEnglish ? paper.subject : paper["বিষয়"];
  const className = isEnglish ? paper.class : paper["শ্রেণি"];
  const time = isEnglish ? paper.time : paper["সময়"];
  const fullMarks = isEnglish ? paper.fullMarks : paper["পূর্ণমান"];

  const subjectLabel = isEnglish ? "Subject" : "বিষয়";
  const classLabel = isEnglish ? "Class" : "শ্রেণি";
  const timeLabel = isEnglish ? "Time" : "সময়";
  const fullMarksLabel = isEnglish ? "Full Marks" : "পূর্ণমান";

  return `

<div
style="
max-width:850px;
margin:auto;
padding:8px;
background:white;
font-family:${fontFamily};
font-size:12px;
${textStyle}
color:black;
">

<h2
style="
text-align:center;
margin-bottom:8px;
font-size:16px;
font-weight:bold;
"
>
${examName}
</h2>

<div
style="
text-align:center;
margin-bottom:6px;
"
>

<b>${subjectLabel} :</b> ${subject}
<br>

<b>${classLabel} :</b> ${className}

</div>

<table
width="100%"
style="
margin-bottom:6px;
font-size:12px;
border-collapse:collapse;
"
>

<tr>

<td>
<b>${timeLabel} : ${time}</b>
</td>

<td align="right">
<b>${fullMarksLabel} : ${fullMarks}</b>
</td>

</tr>

</table>

<hr>

${Object.entries(paper)
.filter(([key]) => !topKeys.includes(key))
.map(([number, q]) => `

<div
class="questionBlock"
style="
margin-top:8px;
break-inside:avoid-page;
page-break-inside:avoid;
"
>

<table
class="matchTable"
width="100%"
style="
margin-top:5px;
border-collapse:collapse;
font-size:12px;
break-inside:avoid-page;
page-break-inside:avoid;
"
>

<tr>

<td
style="
vertical-align:top;
line-height:1.3;
font-weight:bold;
"
>

${number}. ${q.title}

${q.answerCount
? ` (${isEnglish ? "Answer any" : "যেকোনো"} ${q.answerCount}${isEnglish ? "" : " টি"})`
: ""}

</td>

<td
align="right"
style="
width:45px;
vertical-align:top;
white-space:nowrap;
font-weight:bold;
"
>

${q.marks}

</td>

</tr>

</table>

${q.type === "match"
? `

<table
width="100%"
style="
margin-top:5px;
border-collapse:collapse;
font-size:12px;
"
>

<tr>

<td
style="
width:52%;
vertical-align:top;
padding:6px;
background:#fdf2f8;
border:1px solid #f9a8d4;
"
>

<b>Column A</b>

${(q.left || [])
.map(item=>`

<div
style="
margin-top:8px;
line-height:1.5;
font-weight:normal;
"
>

${item}

</div>

`)
.join("")}

</td>

<td
style="
width:48%;
vertical-align:top;
padding:6px;
background:#eff6ff;
border:1px solid #93c5fd;
"
>

<b>Column B</b>

${(q.right || [])
.map(item=>`

<div
style="
margin-top:8px;
line-height:1.5;
font-weight:normal;
"
>

${item}

</div>

`)
.join("")}

</td>

</tr>

</table>

`

:

`

<div
style="
margin-left:18px;
margin-top:2px;
"
>

${(q.questions || [])
.map(item=>`

<div
style="
line-height:1.3;
margin:2px 0;
font-weight:normal;
"
>

${item}

</div>

`)
.join("")}

</div>

`
}

</div>

`)
.join("")}

</div>

`;

}