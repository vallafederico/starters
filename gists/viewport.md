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

```js
export function viewportUnits() {
  document.documentElement.style.setProperty(
    "--vw",
    document.documentElement.clientWidth * 0.01 + "px"
  );

  document.documentElement.style.setProperty(
    "--dvh",
    window.innerHeight * 0.01 + "px"
  );

  document.documentElement.style.setProperty(
    "--svh",
    document.documentElement.clientHeight * 0.01 + "px"
  );

  document.documentElement.style.setProperty("--lvh", "1vh");
}
```
