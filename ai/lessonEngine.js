// ======================
// CLASS IV
// ======================
/*
import {
mathLessons as class4MathLessons
}
from "../database/class4/math/index.js";

import {
englishLessons as class4EnglishLessons
}
from "../database/class4/english/index.js";

*/

// ======================
// CLASS V
// ======================

import {
mathLessons as class5MathLessons
}
from "../database/class5/math/index.js";

import {
englishLessons as class5EnglishLessons
}
from "../database/class5/english/index.js";

/*
import {
evsLessons as class5EVSLessons
}
from "../database/class5/evs/index.js";

import {
assameseLessons as class5AssameseLessons
}
from "../database/class5/assamese/index.js";


*/

// ======================
// MAIN DATABASE
// ======================

const database = {
/*
IV:{

Mathematics:
class4MathLessons,

English:
class4EnglishLessons

},

*/

V:{

Mathematics:
class5MathLessons,

English:
class5EnglishLessons

//EVS:
//class5EVSLessons,

//Assamese:
//class5AssameseLessons

}

};




// ======================
// GET LESSONS
// ======================

export function getLessons(

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