//The following arrays of words will be used to make fun sentences
const subjects = ['dog', 'hippo', 'plane', 'basketball', 'soda can', 'pencil', 'pumpkin', 'cup'];
const activeVerbs = ['runs', 'jumps', 'flies', 'cries', 'eats', 'smells', 'walks', 'talks'];
const prepositions = ['on', 'over', 'around', 'near', 'close to', 'far from', 'under', 'above'];
const directObjects = ['rock', 'chair', 'table', 'couch', 'stairs', 'stove', 'dishwasher', 'tv'];

//The following numbers are randomized for each array each time the program is run.
const randIndex = () => {
    return Math.floor(Math.random() * 8);
}

//The following prints our weird statement.
console.log(`The ${subjects[randIndex()]} ${activeVerbs[randIndex()]} ${prepositions[randIndex()]} the ${directObjects[randIndex()]}.`);