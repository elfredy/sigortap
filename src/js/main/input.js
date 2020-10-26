$(document).ready(function (e) {
  let myinp = $(".filterTop__search");

  myinp.click(function (event) {
    // ---------------end

    let myform = $(this).parents("form");

    myform.find("input.required").each(function () {
      if ($(this).val() == "") {
        $(this).addClass("invalidInputs");

        event.preventDefault();
      } else {
        $(this).removeClass("invalidInputs");
      }
    });

    // 	end ------------------
   /*    myform.find('select.required').each(function(){
       
        console.log( $(this).find("option:selected").val());
    }); */

    myform.find("select.required").each(function () {
       // console.log($(this).find("option:selected").val().length);
      if ($(this).find("option:selected").val() == "") {
        $(this).addClass("invalidInputs");
       // console.log('akber');
        event.preventDefault();
      } else {
        $(this).removeClass("invalidInputs");
      }
    });
  });
});
