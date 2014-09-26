
define( function() {

	/**
	 * A controller mode which should detach all the Accessibility Checker functionality and
	 * limit itself to gently notify end user about its presence.
	 *
	 * @class CKEDITOR.plugins.a11ychecker.ListeningMode
	 * @constructor
	 */
	function ListeningMode( controller ) {
		/**
		 * @property {CKEDITOR.plugins.a11ychecker.Controller} controller
		 */
		this.controller = controller;
	}

	ListeningMode.prototype = {};
	ListeningMode.prototype.constructor = ListeningMode;

	/**
	 * Method to be called when controller enters this mode.
	 *
	 * @member CKEDITOR.plugins.a11ychecker.ListeningMode
	 */
	ListeningMode.prototype.init = function() {
	};

	/**
	 * Method to be called when controller leaves this mode.
	 *
	 * @member CKEDITOR.plugins.a11ychecker.ListeningMode
	 */
	ListeningMode.prototype.close = function() {
	};

	return ListeningMode;
} );