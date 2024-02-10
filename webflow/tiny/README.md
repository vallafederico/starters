# Webflow Dev Boilerplate

Not sure it's needed should just use VITE

```html
<!--Double script for localhost vs cdn-->
<script>
  function onErrorLoader() {
    const script = document.createElement("script");
    script.src = "...";
    script.defer = "true";
    document.head.appendChild(script);
  }
</script>

<script
  defer
  src="http://localhost:8000/app.js"
  onerror="onErrorLoader()"
></script>
```
