import EventEmitter from "events";

const em = new EventEmitter();

EventEmitter.on("test", () => {
	console.log("hola mundo");
});

EventEmitter.emit("test");
