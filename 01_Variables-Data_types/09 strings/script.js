'use strict';


let x; 

const meThoughtISaw = new String(`Methought I saw my late espoused saint\n\tBrought to me, like Alcestis, from the grave,\n\tWhom Jove's great son to her glad husband gave,\n\tRescu'd from death by force, though pale and faint.\nMine, as whom wash'd from spot of child-bed taint\n\tPurification in the old Law did save,\n\tAnd such as yet once more I trust to have\n\tFull sight of her in Heaven without restraint,\nCame vested all in white, pure as her mind;\n\tHer face was veil'd, yet to my fancied sight\n\tLove, sweetness, goodness, in her person shin'd\nSo clear as in no face with more delight.\n\tBut Oh! as to embrace me she inclin'd,\n\tI wak'd, she fled, and day brought back my night.`);

x = meThoughtISaw.__proto__;

x = meThoughtISaw.indexOf(`Rescu'd`); // 136
x = meThoughtISaw.charAt(136); // `R`

x = meThoughtISaw.substring(136, 143); // `Rescu'd`

x = meThoughtISaw.substring(413);  // `Her face was veil'd, yet to my fancied isght...` 

// to get the true primitive value of a variable

x = meThoughtISaw.valueOf();


console.log(x);