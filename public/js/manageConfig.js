/*
 *  JS for loading configuration
 *  with /dashboard/manage
 *
 *  Brian Cain
 *  brianccain@gmail.com
 *
 */

function loadSubGoalName() {
  var goalName = $('#goalNameText').val(),
      goalSubNameHTML = "";

  if (validateInput(goalName)) {
    goalSubNameHTML = "<br/><p>Give your goal a subname</p>";
    goalSubNameHTML += "<div class=\"input-group\"><input type=\"text\" class=\"form-control\" id=\"goalSubNameText\" placeholder=\"Enter sub-goal name\"><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" onclick=\"loadRoles()\">Go!</button></span></div><!-- /input-group -->";

    $('#goalName').html(goalSubNameHTML);
  }
}

function loadRoles() {
  var subGoalName = $('#goalSubNameText').val(),
      rolesHTML = "";

  if (validateInput(subGoalName)) {
    rolesHTML = "<br/><p>Add comma separated roles (i.e. role1,role2,role3)</p>";
    rolesHTML += "<div class=\"input-group\"><input type=\"text\" class=\"form-control\" id=\"rolesText\" placeholder=\"Enter a role\"><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" onclick=\"addRole()\">Add</button></span></div><!-- /input-group -->";

    $('#roleList').html(rolesHTML);
  }
}

function addRole() {
  var roleListHTML = "<br/><p>Role List</p>",
      newRoles = $('#rolesText').val(),
      roleArr;

  if (validateInput(newRoles)) {
    // split on ,
    roleArr = newRoles.split(",");

    roleListHTML += "<div id=\"nodes\" class=\"tab-pane\"><select class=\"form-control\">";

    for (var role in roleArr) {
      console.log(roleArr[role]);
      roleListHTML += "<option>" + roleArr[role] + "</option>";
    }

    roleListHTML += "</select></div>";

    roleListHTML += "<br/><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#roleModal\">Configure Goals</button>"
    // loop through resulting array and add to dropdown, move to next state

    $('#dropdownDiv').html(roleListHTML);
  }
}

function loadGoalConfig() {

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
