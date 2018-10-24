module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-intl-shim'),
      require('karma-typescript'),
    ],

    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    files: [
      // Polyfills for PhantomJS which is behind Chrome in ES6 support.
      { pattern: 'node_modules/babel-polyfill/dist/polyfill.js', watched: false },
      { pattern: 'node_modules/intl/dist/Intl.js', watched: false },
      { pattern: 'node_modules/intl/locale-data/jsonp/en-US.js', watched: false },

      // Application
      { pattern: "karma.spec.ts" }, // Load base spec first to initalize testbed
      { pattern: "Content/**/*.module.ts" }, // Load modules first
      { pattern: "Content/**/*.+(ts|html|css)" }
    ],

    preprocessors: {
      "**/*.ts": ["karma-typescript"],
    },

    // Proxied base paths for loading assets
    proxies: {
      '/node_modules/': '/base/node_modules/',
      '/AngularSystemJS/': '/base/Content/AngularSystemJS/'
    },

    // Exclude main index.html because it starts to load up systemJS, which is unnecessary with the karma-typescript commonjs bundle
    exclude: ['**/*.d.ts', 'index.html'],
    reporters: ["progress", "kjhtml", "karma-typescript", "junit"],
    karmaTypescriptConfig: {
      bundlerOptions: {
        entrypoints: /\.spec\.ts$/,
      },
      compilerOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        module: "commonjs",
        moduleResolution: "node",
        sourceMap: true,
        target: "ES5",
      },
      reports:
      {
        lcovonly: {
          filename: "lcov.info"
        },
        html: "coverage",
        'text-summary': ""
      }
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    coverageReporter: {
      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    },
    junitReporter: {
      suite: 'Angular',
      useBrowserName: false,
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'PhantomJS'],
    customLaunchers: {
      Chrome_with_debugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9222'],
        debug: true
      }
    },
    singleRun: false,
    browserNoActivityTimeOut: 60000,
  })
}