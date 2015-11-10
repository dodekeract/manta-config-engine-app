var dispatcher = require('./dispatcher');
var constants = require('./constants');

var actions = {
	changeLayout: function (id) {
		dispatcher.dispatch({
			type: constants.CHANGE_LAYOUT,
			id: id
		});
	},
	changeBind: function (id) {
		dispatcher.dispatch({
			type: constants.CHANGE_BIND,
			id: id
		});
	},
	closeChanger: function () {
		dispatcher.dispatch({
			type: constants.CLOSE_CHANGER
		});
	},
	saveBinding: function () {
		dispatcher.dispatch({
			type: constants.SAVE_BINDING
		});
	},
	download: function () {
		dispatcher.dispatch({
			type: constants.DOWNLOAD
		});
	},
	activateTab: function (id) {
		dispatcher.dispatch({
			type: constants.ACTIVATE_TAB,
			id: id
		});
	},
	addLayout: function () {
		dispatcher.dispatch({
			type: constants.ADD_LAYOUT
		});
	},
	removeCurrentLayout: function () {
		dispatcher.dispatch({
			type: constants.REMOVE_CURRENT_LAYOUT
		});
	},
	importPreset: function () {
		dispatcher.dispatch({
			type: constants.IMPORT_PRESET
		});
	},
	exportPreset: function () {
		dispatcher.dispatch({
			type: constants.EXPORT_PRESET
		});
	},
	changeSetting: function (e) {
		dispatcher.dispatch({
			type: constants.CHANGE_SETTING,
			id: e.target.id,
			state: e.target.value
		});
	},
	changeChatwheel: function (wheel, slot, value) {
		dispatcher.dispatch({
			type: constants.CHANGE_CHATWHEEL,
			wheel: wheel,
			slot: slot,
			value: value
		});
	},
	addChatwheel: function () {
		dispatcher.dispatch({
			type: constants.ADD_CHATWHEEL
		});
	},
	removeChatwheel: function (slot) {
		dispatcher.dispatch({
			type: constants.REMOVE_CHATWHEEL,
			slot: slot
		});
	}
};

module.exports = actions;
