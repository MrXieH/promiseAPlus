const PromiseA = require('./promise')

var t = new PromiseA((resolve, reject) => {
  resolve(1)
}).then(
  (value) => {
    console.log('value', value)
  }
  // (reason) => {
  //   console.log("reason", reason);
  // }
).catch(e => {
  console.log('er2ror', e)
}).finally(() => {
  console.log('f')
})


// console.log('start');
// setTimeout(() => {
//   console.log('setTimeout done.');
// });
// new PromiseA((resolve) => {
//   console.log('promise exec done.')
//   resolve();
// }).then(() => {
//   console.log('then done.');
// });
// console.log('end');
