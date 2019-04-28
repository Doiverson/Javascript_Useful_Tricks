
// Merge Objects
const tylor = {
    country : "USA",
    a : "Shake it off"
}

const justin = {
    country : "USA",
    b : "What do you mean"
}

const Katy = {
    country : "USA",
    c : "Roar"
}

const summary = {
    ...justin,
    ...tylor,
    ...Katy
}

console.log(summary);
