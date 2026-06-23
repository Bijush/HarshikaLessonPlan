import {
questionPapers as class5BengaliQuestionPapers
}
from "../database/questionPaper/class5/bengali/index.js";

import {
questionPapers as class5EnglishQuestionPapers
} from "../database/questionPaper/class5/english/index.js";

import {
questionPapers as class5MathQuestionPapers
}
from "../database/questionPaper/class5/math/index.js";


const database = {

V:{

Bengali:
class5BengaliQuestionPapers,

English:
class5EnglishQuestionPapers,

Mathematics:
class5MathQuestionPapers

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