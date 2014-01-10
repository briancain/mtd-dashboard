var editor = ace.edit("newEditor"),
    YAMLMode = require("ace/mode/yaml").Mode;

editor.setValue("");
editor.getSession().setMode(new YAMLMode());
editor.getSession().setTabSize(2);
editor.getSession().setUseWrapMode(true);
editor.getSession().setUseSoftTabs(true);

var undoRedoManager = editor.getSession().getUndoManager();

$(document).ready(function() {
  move();
});

function move() {
  var editor = ace.edit("newEditor");

  editor.gotoLine(0);
}

function doUndo() {
  if (undoRedoManager.hasUndo()) {
    undoRedoManager.undo();
  }
}

function doRedo() {
  if (undoRedoManager.hasRedo()) {
    undoRedoManager.redo();
  }
}

function displayInfo() {
  var editor = ace.edit("newEditor");
      data = editor.getSession().getValue();

  alert(data);
}
