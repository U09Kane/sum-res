const { sum } = require("./sum_rs");

function nativeSum(nums) {
  return nums.reduce((total, i) => total + i);
}
const n = 10;
const arr = [...Array(n)].map((_, i) => i + 1);

const t0 = performance.now();
const res = sum(arr);
const t1 = performance.now();

const t2 = performance.now();
const other = nativeSum(arr);
const t3 = performance.now();

console.log('results', res, other);
const perfJS = t3 - t2;
const perfWASM = t1 - t0;
console.table([
  {
    platform: 'js',
    time: `${perfJS.toFixed(3)} milliseconds`,
  },
  {
    platform: 'wasm-rust',
    time: `${perfWASM.toFixed(3)} milliseconds`,
  }
]);
const results = [perfWASM, perfJS];
const x = (Math.max(...results) / Math.min(...results)).toFixed(1);
console.log(`${x}x difference`)
