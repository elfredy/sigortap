/* $(document).ready(function () {
  let div = document.createElement("div");
  let span = document.createElement("span");
  span.className = "myFilterPopup__span";

  let a = document.createElement("a");
  a.className = "myFilterPopup__link";
  a.href = "#";

  $(div).append(a);
  $(div).append(span);

  div.className = "myFilterPopup";

  $(".offerCard__check").append(div);

  $(document).on("change", ".offerCard__checkBox", function () {
    $(".myFilterPopup").hide();
    let length = $(".offerCard__checkBox:checked").length;
    if ($(this).is(":checked")) {
      if (length == 1) {
        $(this).parents(".offerCard__check").find(".myFilterPopup").show();
        $(this)
          .parents(".offerCard__check")
          .find(".myFilterPopup")
          .find("span")
          .show()
          .text("En az 2 sec");
        $(this)
          .parents(".offerCard__check")
          .find(".myFilterPopup")
          .find("a")
          .hide();
      }

      if (length > 1 && length <= 3) {
        $(this).parents(".offerCard__check").find(".myFilterPopup").show();
        $(this)
          .parents(".offerCard__check")
          .find(".myFilterPopup")
          .find("span")
          .hide();
        $(this)
          .parents(".offerCard__check")
          .find(".myFilterPopup")
          .find("a")
          .show()
          .text("Müraciət et");
      }

      if (length > 3) {
        $(this).prop("checked", false);

        $(this).parents(".offerCard__check").find(".myFilterPopup").show();
        $(this)
          .parents(".offerCard__check")
          .find(".myFilterPopup")
          .find("span")
          .show()
          .text("Maximum 3 eded sec");
        $(this)
          .parents(".offerCard__check")
          .find(".myFilterPopup")
          .find("a")
          .show()
          .text("Müraciət et");
      }
    } else {
      $(".myFilterPopup").hide();
      console.log("false");
      $(this).attr("value", "false");
      $(this).parents(".offerCard__check").find(".myFilterPopup").hide();

      if (length == 1) {
        $(this).parents(".offerCard__check").find(".myFilterPopup").show();
        $(this)
          .parents(".offerCard__check")
          .find(".myFilterPopup")
          .find("span")
          .show()
          .text("En az 2 sec");
        $(this)
          .parents(".offerCard__check")
          .find(".myFilterPopup")
          .find("a")
          .hide();
      }

      if (length > 1 && length <= 3) {
        $(this).parents(".offerCard__check").find(".myFilterPopup").show();
        $(this)
          .parents(".offerCard__check")
          .find(".myFilterPopup")
          .find("span")
          .hide();
        $(this)
          .parents(".offerCard__check")
          .find(".myFilterPopup")
          .find("a")
          .show()
          .text("Müraciət et");
      }
    }
  });
});
 */