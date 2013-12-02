var editor = ace.edit("editor"),
    YAMLMode = require("ace/mode/yaml").Mode;

editor.getSession().setMode(new YAMLMode());
editor.getSession().setTabSize(2);
editor.getSession().setUseWrapMode(true);
editor.getSession().setUseSoftTabs(true);

var undoRedoManager = editor.getSession().getUndoManager();

$.get('/uploads/fullstack.yaml', function(data) {
    editor.insert(data);
});

$(document).ready(function() {
  alert("ready");
  move();
});

function move() {
  var editor = ace.edit("editor");

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

function saveInfo() {
  var editor = ace.edit("editor");
      data = editor.getSession().getValue();

  $.post("/dashboard/manage",
            {contents: data },
            function() {
                    // add error checking
                    alert('successful save');
            }
    );
}

function displayInfo() {
  var editor = ace.edit("editor");
      data = editor.getSession().getValue();

  alert(data);
}

function aboutEditor() {
  var msg = "This editor shows how a user can edit our DSL to generate a configuration";

  alert(msg);
}

function aboutAngular() {
  var msg = "This demo shows off AngularJS. It has a controller where it stores the 3 default values you see, and uses the view to retrieve and display them.";

  alert(msg);
}
