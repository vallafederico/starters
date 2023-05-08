# Cookie Ops

#### 100vh Viewport Height variable set

```js
export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function handleCookie(name = "NAME", value = "VALUE") {
  //   const cname = "COOKIE NAME";
  //   const cval = "COOKIE VALUE";

  const vcookie = getCookie(cname);

  if (vcookie) {
    return false;
  } else {
    const exdays = 1;

    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();

    document.cookie = cname + "=" + cval + ";" + expires;

    return true;
  }
}
```
