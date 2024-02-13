// Any JS for the home page goes here
// hint- remember to import them in your handlebars!
// feature discovery js
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Feature Discovery
    var elems = document.querySelector(".tap-target");
    var instances = M.TapTarget.init(elems);
  
    // Open Feature Discovery on button click
    document.getElementById("menu").addEventListener("click", function () {
      var instance = M.TapTarget.getInstance(
        document.querySelector(".tap-target")
      );
      instance.open();
    });
  
    // Handle form submission
    var form = document.getElementById("featureForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var inputs = form.querySelectorAll("input");
      inputs.forEach(function (input) {
        // Do something with each input value
        console.log(input.value);
        // You can perform any action with the input value here
        // For demonstration, we're just logging it to the console
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });
const button= document.getElementById('set-city');
  button.addEventListener('click', function() {
    location.href=`/api/set/${document.querySelector('#input2').value}`
  });

