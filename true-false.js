// Falsey:
// false
// 0
// ""
// undefined
// null
// Truthy"
// "0" 
// ' ', 'false'
// []

let name = 12;
if (name || name == 0) {
    console.log("true")
} else {
    console.log("false")
}