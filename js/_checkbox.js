// This function stores data attributes on checkboxes in local storage
// and automatically marks them as checked when a user refreshes or visits the
// page again at a later date.

// IMPORTANT
// Make sure that each data-store value is unique across all pages.

// Provide a unique identifier for the data-store attribute on any checkbox
// which needs to be stored.

$(function(){
  var storedCheckBoxes = document.querySelectorAll(".mdl-checkbox__input");

  for (var i = 0; i < storedCheckBoxes.length; i++) {
    var box = storedCheckBoxes[i];
    if (box.hasAttribute("data-store")) {
      store(box);
    }
  }

  function store(box) {
    var themeStore = box.getAttribute("data-store");
    var oldVal = localStorage.getItem(themeStore);
    box.checked = oldVal === "true" ? true : false;

    box.addEventListener("change", function() {
      localStorage.setItem(themeStore, this.checked);
    });
  }
});
