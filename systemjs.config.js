System.config({
  paths: {
    'npm:': '/node_modules/'
  },
  map: {
    app: 'AngularSystemJS',
    '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.min.js',
    '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.min.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
    '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
    '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
    '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.min.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
    'core-js': 'npm:core-js',
    'zone.js': 'npm:zone.js',
    'rxjs': 'npm:rxjs',
    'tslib': 'npm:tslib'
  },
  packages: {
    'AngularSystemJS': {
      defaultExtension: 'js'
    },
    'rxjs': {
      defaultExtension: 'js'
    },
    'core-js': {},
    'zone.js': {},
    primeng: {
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    },
    'tslib': {
      main: 'tslib.js',
      defaultExtension: 'js'
    },
  }
});