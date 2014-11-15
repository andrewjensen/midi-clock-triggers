//Include dependencies
var MidiKeyboard = require("./lib/MidiKeyboard.js");
var Event = require("./lib/Event.js");

//Include defined events
var events = require("./events.json");

//Run
var keyboard = new MidiKeyboard();
keyboard.connect(1);	//Connect to MIDI port 1

for (var i = 0; i < events.length; i++) {
	var event = new Event(events[i], keyboard);
	event.enqueue();
}

process.on("SIGTERM", function () {
	console.log("Exiting.");
	keyboard.disconnect();
});
