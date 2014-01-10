var editor = ace.edit("newEditor"),
    YAMLMode = require("ace/mode/yaml").Mode;

editor.setValue($('textarea#configure_content').val());
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

function insertNewKeyData(data) {
  var msg = "";
  if (data == 'goals') {
    msg = "goals:\n\texample_goal:\n\t\tname: TemplateName\n\troles:\n\t\t\t- TemplateRole";
  }
  else if (data == 'roles') {
    msg = "\n\texampleRole:\n\t\tname: TemplateName\n\t\tmin: 1\n\t\texports:\n\t\t\t- export_example\n\t\t\t- export_example_two\n\t\timports:\n\t\t\t- example_import";
  }

  editor.insert(msg);
}

function saveNewConfig() {
  var editor = ace.edit("newEditor"),
      data = editor.getValue();

  $('textarea#configure_content').val(data);
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
