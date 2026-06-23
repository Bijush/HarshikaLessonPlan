import {
  getQuestionPapers
} from "../ai/questionPaperEngine.js";

import {
  buildQuestionPaper
} from "../templates/questionPaperTemplate.js";
import {
  buildMathQuestionPaper
} from "../templates/mathQuestionPaperTemplate.js";
import {
downloadPdf
}
from "./pdfDownload.js";

const output = document.getElementById("output");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");


// ======================
// GENERATE QUESTION PAPER
// ======================
generateBtn.onclick = () => {

  const className = document.getElementById("className").value;
  const subject = document.getElementById("subject").value;
  const examType = document.getElementById("examType").value;

  if (!className || !subject || !examType) {
    alert("Please select Class, Subject and Exam.");
    return;
  }

  const papers = getQuestionPapers(className, subject);
  const paper = papers[examType];

  if (!paper) {
    output.innerHTML = "<h2>Question Paper not found.</h2>";
    downloadBtn.style.display = "none";
    return;
  }

  if (subject === "Mathematics") {

  output.innerHTML =
    buildMathQuestionPaper({}, paper);

}
else {

  output.innerHTML =
    buildQuestionPaper({}, paper);

}

  downloadBtn.style.display = "block";

  output.scrollIntoView({
    behavior: "smooth"
  });

};


// ======================
// DOWNLOAD PDF
// ======================
downloadBtn.onclick = async () => {

  if (!output.innerHTML) {
    alert("Generate question paper first.");
    return;
  }

  const className = document.getElementById("className").value;
  const subject = document.getElementById("subject").value;
  const examType = document.getElementById("examType").value;

  const paper = output.firstElementChild;

  if (!paper) {
    alert("Question paper element not found.");
    return;
  }

  downloadBtn.disabled = true;
  downloadBtn.textContent = "Generating PDF...";

  // Save original styles
  const originalFontSize = paper.style.fontSize;
  const originalLineHeight = paper.style.lineHeight;

  // Temporary PDF styles
  paper.style.fontSize = "13px";
  paper.style.lineHeight = "1.35";

  // Always portrait
  const orientation = "portrait";

  try {

    await html2pdf()
      .set({

        margin: [5, 5, 5, 5],

        filename: `${className}_${subject}_${examType}.pdf`,

        image: {
          type: "png",
          quality: 1
        },

        html2canvas: {

          scale: 2,

         letterRendering: true,

          backgroundColor: "#ffffff",

          allowTaint: true,

          useCORS: true,

          scrollX: 0,

          scrollY: 0

        },

        jsPDF: {

          unit: "mm",

          format: "a4",

          orientation,

          putOnlyUsedFonts: true,

          compress: true

        },

        pagebreak: {

          mode: [ "legacy"]

        }

      })

      .from(paper)

      .save();

  }

  catch (err) {

    console.error(err);

    alert("PDF Download Failed");

  }

  // Restore original styles
  paper.style.fontSize = originalFontSize;
  paper.style.lineHeight = originalLineHeight;

  downloadBtn.disabled = false;
  downloadBtn.textContent = "DOWNLOAD PDF";

};

