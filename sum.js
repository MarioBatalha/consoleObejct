const message = () => {
    console.log('We are stydying js')
}

const numbers = [2, 34, 1, 5, 78, 33];

numbers.map(function (index, value) {
    return value + 2
})

console.log(numbers)

const foo = () => {
    function bar() {
        console.log("test");
    }
    bar();
}

foo();

const module = n => {
    try {
        if (n % 2 == 0) {
            console.log('pair')
        }
    } catch (error) {
        console.log(error)
    }
}

const welcome = new Promise(function (resolve, reject) {
    console.log('Happy birthday')
});



function double(function sum(a, b) {
    return a + b;
}) {}

let temperature = 22;

async function weather() {
    await temperature = -2
    console.log(temperature)
};