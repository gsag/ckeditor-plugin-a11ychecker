
( function() {
	'use strict';

	CKEDITOR.plugins.a11ychecker.quickFixes.get( { langCode: 'it',
		name: 'QuickFix',
		callback: function( QuickFix ) {

			var emptyWhitespaceRegExp = /^[\s\n\r]+$/g;

			/**
			 * Fixes the image with missing alt attribute.
			 *
			 * @constructor
			 */
			function ImgAlt( issue ) {
				QuickFix.call( this, issue );
			}

			/**
			 * Maximal count of characters in the alt. It might be changed to `0` to prevent
			 * length validation.
			 *
			 * @member CKEDITOR.plugins.a11ychecker.quickFix.AttributeRename
			 * @static
			 */
			ImgAlt.altLengthLimit = 100;

			ImgAlt.prototype = new QuickFix();
			ImgAlt.prototype.constructor = ImgAlt;

			ImgAlt.prototype.display = function( form ) {
				form.setInputs( {
					alt: {
						type: 'text',
						label: this.lang.altLabel,
						value: this.issue.element.getAttribute( 'alt' ) || ''
					}
				} );
			};

			ImgAlt.prototype.fix = function( formAttributes, callback ) {
				this.issue.element.setAttribute( 'alt', formAttributes.alt );

				if ( callback ) {
					callback( this );
				}
			};

			ImgAlt.prototype.validate = function( formAttributes ) {
				var ret = [],
					proposedAlt = formAttributes.alt + '',
					imgElem = this.issue && this.issue.element;


				if ( !proposedAlt ) {
					ret.push( this.lang.errorEmpty );
				}

				// Test if the alt has only whitespaces.
				if ( proposedAlt.match( emptyWhitespaceRegExp ) ) {
					ret.push( this.lang.errorWhitespace );
				}

				// Testing against exceeding max length.
				if ( ImgAlt.altLengthLimit && proposedAlt.length > ImgAlt.altLengthLimit ) {
					ret.push( 'Alternative text is too long. It should be up to ' + ImgAlt.altLengthLimit +
						' characters while your has ' + proposedAlt.length + '.' );
				}

				if ( imgElem ) {
					var fileName = String( imgElem.getAttribute( 'src' ) ).split( '/' ).pop();
					if ( fileName == proposedAlt ) {
						ret.push( 'Image alt should not be the same as the file name.' );
					}
				}

				return ret;
			};

			ImgAlt.prototype.lang = {};
			CKEDITOR.plugins.a11ychecker.quickFixes.add( 'it/ImgAlt', ImgAlt );
		}
	} );
}() );