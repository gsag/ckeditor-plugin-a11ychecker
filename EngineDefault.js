/**
 * @license Copyright (c) 2014-2015, CKSource - Frederico Knabben. All rights reserved.
 */

define( [ 'Engine', 'IssueList', 'Issue', 'IssueDetails' ], function( Engine, IssueList, Issue, IssueDetails ) {
	'use strict';

	/**
	 * A default engine driver which has to be overriden. This engine won't find
	 * any issues.
	 *
	 * @constructor
	 */
	function EngineDefault( options, plugin ) {
	}

	EngineDefault.prototype = new Engine();
	EngineDefault.prototype.constructor = EngineDefault;

	EngineDefault.prototype.fixesMapping = {};

	/**
	 * Performs accessibility checking for the current editor content.
	 *
	 * @member CKEDITOR.plugins.a11ychecker.EngineDefault
	 * @param {CKEDITOR.plugins.a11ychecker.Controller} a11ychecker
	 * @param {CKEDITOR.dom.element} contentElement DOM object of container which contents will be checked.
	 * @param {Function} callback
	 */
	EngineDefault.prototype.process = function( a11ychecker, contentElement, callback ) {
		var issueList = new IssueList();

		this.filterIssues( issueList, contentElement );

		if ( callback ) {
			callback( issueList );
		}
	};

	return EngineDefault;
} );