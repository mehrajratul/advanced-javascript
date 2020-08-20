const student = [
    {id: 21, name: 'omar sunny'},
    {id: 31, name: 'manna'},
    {id: 41, name: 'mayori'},
    {id: 71, name: 'Deepjol'},
];

// output = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     const result = student.name; 

//     output.push(result);
        
// }
const names = student.map( s => s.name);
const ids = student.map(s => s.id);
console.log(ids);