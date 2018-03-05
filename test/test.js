'use strict';

const path     = require('path'),
      sassTrue = require('sass-true');

const sassFile = path.join(__dirname, 'scss', 'test.scss');
sassTrue.runSass({file: sassFile}, describe, it);
