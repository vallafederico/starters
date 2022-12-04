# Viewport Utils

## CSS

#### 100vh Viewport Height variable set

```js
document.documentElement.style.setProperty(
  "--100vh",
  `${window.innerHeight}px`
);
```

#### Set VH unit (constantly)

```js
["DOMContentLoaded", "resize"].forEach((event) => {
  window.addEventListener(event, (_) => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
});
```

#### Detect Browser window / tab state

```js
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("hidden");
  } else {
    console.log("visible");
  }
});

window.addEventListener("focus", () => {
  console.log("focus");
});

window.addEventListener("blur", () => {
  console.log("blur");
});
```
