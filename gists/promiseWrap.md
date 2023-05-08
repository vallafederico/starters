# Wrap Promise.all w/ callbacks

```js
export function allProgress(proms, progress_cb) {
  let d = 0;
  progress_cb(0);
  for (const p of proms) {
    p.then(() => {
      d++;
      progress_cb((d * 100) / proms.length);
    });
  }
  return Promise.all(proms);
}

function test(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Waited ${ms}`);
      resolve("somedata");
    }, ms);
  });
}

function progressCallback(p) {
  console.log(`${p.toFixed(0)} %`);
}

async function init() {
  const [data1, data2, data3, data4] = await allProgress(
    [test(1000), test(3000), test(2000), test(3500)],
    progressCallback
  );

  console.log(data1, data2, data3, data4);
}

init();
```
