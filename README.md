CKEditor Accessibility Checker
==============================

# Overview

This repository contains the development version of the Accessibility Checker Plugin for CKEditor.

## Requirements

* CKEditor **4.3.0** or later.
* jQuery **1.x** in order to run [Quail](http://quailjs.org/).

## Installation

### Development Version

If you're not interested in developing core Accessibility Checker features, feel free to skip this section.

```bash
# Assuming that $CKEDITOR_DEV_PATH is your CKEditor path.
cd $CKEDITOR_DEV_PATH/plugins
git clone -b dev git@github.com:cksource/ckeditor-plugin-a11ychecker.git a11ychecker
```

#### Checkout Balloon Plugin

```bash
git clone git@github.com:cksource/ckeditor-plugin-balloonpanel.git balloonpanel
```

#### Building Extra Stuff

You'll also need to build a CSS, since we use LESS.

```bash
npm install
grunt build-css
```

//Pro tip:// you can also use `grunt watch:less`.

### Distribution Version

For more information about the distribution version see [`DISTRIBUTION.md`](DISTRIBUTION.md) file.

### Building a Distribution Version

You can build a distribution package using grunt.

Main changes in distribution version:

* It doesn't use RequireJS, so all the classes are inlined.
* It contains the `CKEDITOR.plugins.a11ychecker.rev` property with a revision hash.
* Quick-fixes are minified.
* It will automatically create a zip archive so that you can share it without publishing the code into a public repo.

To build the Accessibility Checker simply go to the `a11ychecker` plugin directory. And execute following commands:

```bash
npm install
grunt build
```

Build files are put in `build` directory of the `a11ychecker` plugin directory.

#### Building a Full Distribution

Since the Accessibility Checker has actually a few dependencies, you might want to include all the dependent plugins, just to make installation easier.

We have a build-full feature, that will include also dependent plugins into the build directory, and created a zip archive.

```bash
npm install
grunt build-full
```

Now another person might simply get the zip, extract it to `ckeditor/plugins` directory and everything is ready to go.

## Where Do I Start?

You should use `plugins/a11ychecker/samples/a11ychecker.html` sample to test the Accessibility Checker (eg. [ckeditor.dev](http://ckeditor.dev/plugins/a11ychecker/samples/a11ychecker.html)).

Other samples will not work because of RequireJS dependency, which is not a part of standard CKEditor distribution.

## Unit Testing

Both unit tests and integration tests are placed in `tests` directory.

They should be automatically detected by Bender as a "External Plugins", so make sure that `bender.js` in your CKEditor directory contains entry like following:

```javascript
'External Plugins': {
	applications: [ 'ckeditor' ],
	basePath: 'plugins/',
	paths: [
		'*/tests/**',
		'!**/_*/**'
	]
}
```

## License

Copyright (c) 2014 CKSource - Frederico Knabben. All rights reserved.<br>
License under the terms of the open source [GPL license](http://www.gnu.org/licenses/gpl-2.0.html).

See LICENSE.md for more information.
