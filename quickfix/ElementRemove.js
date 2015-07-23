/**
 * @license Copyright (c) 2014-2015, CKSource - Frederico Knabben. All rights reserved.
 */

( function() {
	'use strict';

	CKEDITOR.plugins.a11ychecker.quickFixes.get( {
		name: 'QuickFix',
		callback: function( QuickFix ) {
			/**
			 * The ultimate fix for unsolvable problem - removing an element.
			 *
			 * @member CKEDITOR.plugins.a11ychecker.quickFix
			 * @class ElementRemove
			 * @constructor
			 * @param {CKEDITOR.plugins.a11ychecker.Issue} issue
			 */
			function ElementRemove( issue ) {
				QuickFix.call( this, issue );
			}

			ElementRemove.prototype = new QuickFix();
			ElementRemove.prototype.constructor = ElementRemove;

			ElementRemove.prototype.display = function( form ) {
				form.setInputs( {} );
			};

			ElementRemove.prototype.fix = function( formAttributes, callback ) {
				this.issue.element.remove();

				if ( callback ) {
					callback( this );
				}
			};

			CKEDITOR.plugins.a11ychecker.quickFixes.add( 'ElementRemove', ElementRemove );
		}
	} );
}() );