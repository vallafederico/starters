# Viewport Utils

## CSS

#### 100vh Viewport Height variable set

```Javascript
document.documentElement.style.setProperty(
  "--100vh",
  `${window.innerHeight}px`
);
```

#### Set VH unit (constantly)

```Javascript
['DOMContentLoaded', 'resize'].forEach(event => {
    window.addEventListener(event, _ => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
 });
```
