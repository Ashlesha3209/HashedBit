const nums = [10, 20, 30, 40];

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray(nums)); // 100
