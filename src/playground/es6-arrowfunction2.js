// arguments object = no longer bound with arrow functions

const add =  (a,b) => {
    // console.log(arguments);
    return a+b;
}

console.log(add(55,1, 1001));


// this keyword = no longer bound

const user  = {
    name: 'Tomas',
    cities: ['Bratislava', 'Boston'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in '+ city;
        });

        return cityMessages;

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
 };

 console.log(user.printPlacesLived());
 console.log(user.cities);




 const multiplier = {
    numbers: [10,2,56,23],
    multiplyBy: 10,
    multiply(){
        const multiplied = this.numbers.map((cislo) => cislo * this.multiplyBy);

        return multiplied;
    }
 }

console.log(multiplier.multiply());



