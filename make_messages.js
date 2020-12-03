//The following arrays of words will be used to make fun sentences
const subjects = ['dog', 'hippo', 'plane', 'basketball', 'soda can', 'pencil', 'pumpkin', 'cup'];
const activeVerbs = ['runs', 'jumps', 'flies', 'cries', 'eats', 'smells', 'walks', 'talks'];
const prepositions = ['on', 'over', 'around', 'near', 'close to', 'far from', 'under', 'above'];
const directObjects = ['rock', 'chair', 'table', 'couch', 'stairs', 'stove', 'dishwasher', 'tv'];

//The following numbers are randomized for each array each time the program is run.
let subjectIndex = Math.floor(Math.random() * subjects.length);
let activeVerbIndex = Math.floor(Math.random() * activeVerbs.length);
let prepositionIndex = Math.floor(Math.random() * prepositions.length);
let directObjectIndex = Math.floor(Math.random() * directObjects.length);