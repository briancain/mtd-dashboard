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

  if (goalName == "") {
    alert("WARNING: You did not enter anything");
    return;
  }
  else if (goalName.length >= 100) {
    alert("WARNING: Your goal name is too long");
    return;
  }
  else {
    goalSubNameHTML = "<br/><p>Give your goal a subname</p>";
    goalSubNameHTML += "<div class=\"input-group\"><input type=\"text\" class=\"form-control\" id=\"goalSubNameText\" placeholder=\"Enter sub-goal name\"><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" onclick=\"loadRoles()\">Go!</button></span></div><!-- /input-group -->";

    $('#goalName').html(goalSubNameHTML);
  }
}

function loadRoles() {
  var subGoalName = $('#goalSubNameText').val(),
      rolesHTML = "";

  if (subGoalName == "") {
    alert("WARNING: You did not enter anything");
    return;
  }
  else if (subGoalName.length >= 500) {
    alert("WARNING: Your sub-goal name is too long");
    return;
  }
  else {
    rolesHTML = "<br/><p>Add roles</p>";
    rolesHTML += "<div class=\"input-group\"><input type=\"text\" class=\"form-control\" id=\"rolesText\" placeholder=\"Enter a role\"><span class=\"input-group-btn\"><button class=\"btn btn-default\" type=\"button\" onclick=\"addRole()\">Add</button></span></div><!-- /input-group -->";

    $('#roleList').html(rolesHTML);
  }
}
