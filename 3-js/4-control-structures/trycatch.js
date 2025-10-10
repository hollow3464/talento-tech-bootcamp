function div(a, b) {
	try {
		if (!b) {
			throw new Error("division por 0");
		}
		console.log(`El resultado de la división es  ${a / b}`);
	} catch (error) {
		console.log(`❌ Error: ${error.message}`);
	} finally {
		console.log("Operación finalizada");
	}
}

div(1, 0);
div(1, 2);
div(2, 3);
