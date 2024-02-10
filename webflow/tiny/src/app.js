class App {
  constructor() {
    console.log("App live");
  }
}

window.add = new App();

// <!--Double script for localhost vs cdn-->
// <script>
// 	function onErrorLoader(){
// 	const script = document.createElement("script");
// 	script.src = "..."
// 	script.defer="true";
// 	document.head.appendChild(script);
// 	}
// </script>

// <script defer
// 	src="http://localhost:8000/app.js"
// 	onerror="onErrorLoader()"
// ></script>
