$(document).ready(function() {
  document.getElementById("easterEgg").disabled = false;
});

function loadClippy(){
  clippy.load('Clippy', function(agent) {
      // Do anything with the loaded agent
      agent.show();

      agent.speak("It looks like you're trying to defend your moving target, would you like some help?");

      agent.animate();

      document.getElementById("easterEgg").disabled = true;
  });
}
