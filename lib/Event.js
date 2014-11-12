var moment = require('moment');


var Event = (function () {

	var Event = function (data) {
		this.name = data.name;
		this.time = data.time;
		this.note = data.note;
	};

	Event.prototype.enqueue = function () {

		var thisEvent = this;

		var pieces = this.time.split(":");
		var eventTime = moment()
			.hours(pieces[0])
			.minutes(pieces[1])
			.startOf("minute");

		var waitTime = eventTime.diff(moment());

		if (waitTime < 0) {
			console.log("Event \"" + this.name + "\" has already happened today.");
			return;
		}

		console.log("Queueing event \"" + this.name + "\".");

		setTimeout(function () {
			thisEvent.trigger();
		}, waitTime);
	};

	Event.prototype.trigger = function () {
		console.log("Event: " + this.name);

		//TODO actually send the midi message
		console.log("MIDI note: " + this.note);
	};

	return Event;
})();

module.exports = Event;
