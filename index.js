/* eslint-env node */
'use strict';

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')
const renameFiles = require('broccoli-rename-files');

module.exports = {
  name: 'redux-undo',

  treeForAddon (tree) {
    const reduxUndoPath = path.dirname(require.resolve('redux-undo/dist/redux-undo.js'))
    let reduxUndoTree = this.treeGenerator(reduxUndoPath);

    reduxUndoTree = renameFiles(reduxUndoTree, {
      transformFilename: function(filename) {
        return filename.replace('redux-undo', 'index');
      }
    });

    if (!tree) {
      return this._super.treeForAddon.call(this, reduxUndoTree)
    }

    const trees = mergeTrees([reduxUndoTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
};
