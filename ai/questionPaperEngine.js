import {
questionPapers as class5BengaliQuestionPapers
}
from "../database/questionPaper/class5/bengali/index.js";

import {
questionPapers as class5EnglishQuestionPapers
} from "../database/questionPaper/class5/English/index.js";

import {
questionPapers as class5MathQuestionPapers
}
from "../database/questionPaper/class5/math/index.js";

import {
questionPapers as class3EnglishQuestionPapers
}
from "../database/questionPaper/class3/English/index.js";


const database = {

V:{

Bengali:
class5BengaliQuestionPapers,

English:
class5EnglishQuestionPapers,

Mathematics:
class5MathQuestionPapers

},

III:{
  English:class3EnglishQuestionPapers
}

};


export function getQuestionPapers(

className,

subject

){

return (

database[
className
]?.[
subject
]

||

{}

);

}