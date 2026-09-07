export function genLoteryNumber(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }

    return arr;
}

export function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}