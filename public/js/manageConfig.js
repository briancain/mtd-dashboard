/*
 *  JS for loading configuration
 *  with /dashboard/manage
 *
 *  Brian Cain
 *  brianccain@gmail.com
 *
 */

var goalName, subGoalName, roleArr;

var goalNameTextLabel = '#goalNameText',
    subGoalNameDiv = '#subGoalName',
    subGoalNameTextLabel = '#goalSubNameText',
    subGoalID = 'goalSubNameText',
    rolesListDiv = '#roleList',
    rolesTextLabel = '#rolesText',
    rolesID = 'rolesText',
    roleArrDropdownDiv = '#rolesDropdown';

function loadSubGoalName() {
  var goalSubNameHTML = "";

  goalName = $(goalNameTextLabel).val();

  if (validateInput(goalName)) {
    goalSubNameHTML = "<br/><p>Give your goal a subname</p>";
    goalSubNameHTML += "<div class=\"input-group\"><input type=\"text\" class=\"form-control\" id=\"" + subGoalID + "\" placeholder=\"Enter sub-goal name\"><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" onclick=\"loadRoles()\">Go!</button></span></div><!-- /input-group -->";

    $(subGoalNameDiv).html(goalSubNameHTML);
  }
}

function loadRoles() {
  var rolesHTML = "";

  subGoalName = $(subGoalNameTextLabel).val();

  if (validateInput(subGoalName)) {
    rolesHTML = "<br/><p>Add comma separated roles (i.e. role1,role2,role3)</p>";
    rolesHTML += "<div class=\"input-group\"><input type=\"text\" class=\"form-control\" id=\"" + rolesID + "\" placeholder=\"Enter a role\"><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" onclick=\"addRole()\">Add</button></span></div><!-- /input-group -->";

    $(rolesListDiv).html(rolesHTML);
  }
}

function addRole() {
  var roleListHTML = "<br/><p>Role List</p>",
      newRoles = $(rolesTextLabel).val(),
      roleArr;

  if (validateInput(newRoles)) {
    // split on ,
    roleArr = newRoles.split(",");

    roleListHTML += "<div id=\"nodes\" class=\"tab-pane\"><select class=\"form-control\">";

    for (var role in roleArr) {
      roleListHTML += "<option>" + roleArr[role] + "</option>";
    }

    roleListHTML += "</select></div>";

    // modal button
    roleListHTML += "<br/><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#roleModal\">Configure Goals</button>";

    // modal popup

    if (validateInput(goalName) && validateInput(subGoalName)) {
      roleListHTML += generateGoalModal(goalName, subGoalName, roleArr);
      $(roleArrDropdownDiv).html(roleListHTML);
    }

  }
}

function generateGoalModal(goalName, goalSubName, roleList) {
  var modalHTML = "<!-- Modal --><div class=\"modal fade\" id=\"roleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myRoleModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button><h4 class=\"modal-title\" id=\"myRoleModalLabel\">Proposed Goal Config</h4></div><div class=\"modal-body\">";

  modalHTML += "<p>Below is the proposed Goal configuration</p><h2>Goal Name</h2><p>" + goalName + "</p><h2>Goal Sub Name</h2><p>" + goalSubName + "</p><h2>Role List</h2>";

  modalHTML += "<ul>";
  for(var role in roleList) {
    modalHTML += "<li>" + roleList[role] + "</li>";
  }
  modalHTML += "</ul>";

  modalHTML += "</div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button><button type=\"button\" class=\"btn btn-primary\" onclick=\"loadRoleConfig()\">Save changes</button></div></div><!-- /.modal-content --></div><!-- /.modal-dialog --></div><!-- /.modal -->";

  return modalHTML;
}

/*
 *  Disable all goal textboxes and generate next steps
 */
function loadRoleConfig() {
  $('#roleModal').modal('hide');

}

/*
 *  Validates the given input from the config
 *  text boxes.
 *
 *  Returns false if fails requirements, 
 *  else returns true if input is "valid".
 */
function validateInput(input) {
  if (input == "" ) {
    alert("WARNING: You did not enter anything");
    return false;
  }
  else if (input.length >= 500) {
    alert("WARNING: Your entry name is too long");
    return false;
  }
  else {
    return true;
  }
}
