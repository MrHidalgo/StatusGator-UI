const configPath = require('../config/configPath');


const configOption = {
  pipeBreaking: {
    err: configPath.errorHandler
  },

  cssMinOption: {
    specialComments: 1,
    format: 'beautify',
    level: 1
  },

  sassAPI: {
    errLogToConsole: true,
    outputStyle: 'expanded',
    sourceComments: true
  },

  autoPrefixOptions: {
    browsers: [
      "last 10 versions",
      ">= 1%",
      "dead",
      "unreleased versions",
      "explorer >= 8",
      "chrome >= 21",
      "firefox esr",
      "opera >= 15",
      "android >= 2.3",
      "safari >= 6.2.6",
      "explorermobile >= 10",
      "ios >= 6",
      "blackberry >= 10"
    ],
    cascade: true
  },

  es6: {
    "presets": ["env"]
  },

  svgMin: {
    js2svg: {
      pretty: true
    }
  },

  renameOption: {
    suffix: '.min'
  },

  changed: {
    firstPass: true
  },

  sourceMapStyle: {
    includeContent: true,
    sourceRoot: '../src'
  }
};


module.exports = configOption;
