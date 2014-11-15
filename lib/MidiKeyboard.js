var midi = require('midi');

var MidiKeyboard = (function () {

	var MidiKeyboard = function () {
		this.output = new midi.output();
	};

	MidiKeyboard.prototype.connect = function (midiPort) {
		this.output.openPort(midiPort);
	};

	MidiKeyboard.prototype.disconnect = function () {
		this.output.closePort();
	};

	MidiKeyboard.prototype.trigger = function (pitch) {
		var thisKeyboard = this;

		this.output.sendMessage([144, pitch, 127]);	//note on
		setTimeout(function () {
			thisKeyboard.output.sendMessage([128, pitch, 127]);	//note off
		}, 10);
	};

	return MidiKeyboard;
})();

module.exports = MidiKeyboard;
