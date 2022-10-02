/* Set 100vh */
document.documentElement.style.setProperty(
  "--100vh",
  `${window.innerHeight}px`
);

/* Set U -vh constantly */
["DOMContentLoaded", "resize"].forEach((event) => {
  window.addEventListener(event, (_) => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
});
