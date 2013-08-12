/* License: MIT.
 * Copyright (C) 2013, Uri Shaked.
 */

'use strict';

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'],
		singleRun: true,
		files: [
			'components/angular/angular.js',
			'components/angular-mocks/angular-mocks.js',
			'components/spin.js/dist/spin.js',
			'angular-spinner.js',
			'tests.js'
		]
	});
};