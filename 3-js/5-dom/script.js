document.querySelector("button").addEventListener("click", (ev) => {
	const message = ev.target.dataset.message;

	console.log(message);
	alert(message);

	document.querySelector("p").textContent = "¡Hola, DOM!";
});
