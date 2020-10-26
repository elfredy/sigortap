/* 
$('.offerCard__label').click(function () {
    $('.offerCard__checkImg').toggleClass('checkImg');
    $(this).toggleClass('labelClick');
}); */

/* unction checkhed(){
    const check = document.getElementsByName('offerCard__checkImg');

    check.addEventLister('click',()=>{
        check.classlist('checkImg')
    })

} */
function showIcon() {
  var checkLabel = $(".offerCard__label");

  $(checkLabel).click(function () {
    $(this).siblings(".offerCard__checkImg").toggleClass("checkImg");
    $(this).toggleClass('labelClick');
  });
}

showIcon();
