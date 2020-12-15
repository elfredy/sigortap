$(document).ready(function () {
  function addIcon() {
    const icon = document.createElement("i");
    icon.className = "fas selectArrow fa-angle-down";

    $("select").parents(".form-group").append(icon);
  }

  addIcon();
});
