function square (x) {
    return x*x;
};

console.log(square(3));

// const arrow = (x) => {
//     return x*x;
// }


const arrow = (x) => x*x; 
console.log(arrow(4));



const fullName = (x) => x.split(' ')[0];
const firstName = (x) => {
    return x.split(' ')[0];
}

console.log(fullName('Tomas Chvalny'));

console.log(firstName('Anton Chvalny'));




