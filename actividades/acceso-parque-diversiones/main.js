const truthy = [true, 1, "true", "y", "yes", "s", "si"];

const messages = {
	IN: "\nPuede pasar\n",
	OUT: "\nIngreso no permitido\n",
};

const edad = parseInt(prompt("\nIngrese su edad:")?.trim());
const vip = truthy.includes(
	prompt("\n¿Tiene pase VIP?:")?.toLowerCase().trim(),
);
const adulto = truthy.includes(
	prompt("\n¿Viene acompado de un adulto?")?.toLowerCase().trim(),
);

if (edad < 12) {
	console.log(messages.OUT);
} else if (edad >= 18) {
	console.log(messages.IN);
} else if (adulto) {
	console.log(messages.IN);
} else {
	console.log(messages.OUT);
}
