var Event = require("./lib/Event.js");
var events = require("./events.json");

for (var i = 0; i < events.length; i++) {
	var event = new Event(events[i]);
	event.enqueue();
}
