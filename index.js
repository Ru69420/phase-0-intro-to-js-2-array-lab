const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
cats.push('Ralph');
}

function destructivelyPrependCat(){
cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats];
    return [...newCats, name];
}

function prependCat(name){
    const anotherCats = [...cats]
    return [name, ...anotherCats]
}

function removeLastCat() {
    const copyCats = cats.slice(0, cats.length -1);
    return copyCats;
}

function removeFirstCat() {
    const copyCats = cats.slice(1);
    return copyCats;
}