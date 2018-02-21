const add = function (a, b){
    return a+b;
};

console.log(add(22, 1));

const multiplier = {
    numbers : [1,2,4],
    multiplyBy : 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }

};

console.log(multiplier.multiply());