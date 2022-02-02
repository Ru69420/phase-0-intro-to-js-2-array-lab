
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const newCats = [...cats];
    return [...newCats, name];
}

function prependCat(name) {
    const newCats = [...cats];
    return [name, ...newCats]
}

function removeLastCat() {
    const copyCats = cats.slice(0, cats.length -1);
    return copyCats;
}

function removeFirstCat() {
    const copyCats = cats.slice(1);
    return copyCats;
}