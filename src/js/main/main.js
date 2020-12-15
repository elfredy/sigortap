$(document).ready(function () {
  $(".loginCompany").click(function () {
    $(".sidebar").fadeIn("fast");
    $(".sidebarRight").addClass("sidebarRightShow");
  });
  $(".sidebarClose").click(function () {
    $(".sidebar").fadeOut("fast");
    $(".sidebarRight").removeClass("sidebarRightShow");
  });

  /*  $(".sidebar").click(function (event) {
    if ($(event.target).is(".sidebarRight")) {
      console.log("içeri");
    } else {
      $(".sidebar").fadeOut("fast");
    }
  }); */

  $(".closeRegister").click(function () {
    $("#reqisterModal").modal("hide");
  });
  $(".closeLogin").click(function () {
    $("#loginModal").modal("hide");
  });
});
