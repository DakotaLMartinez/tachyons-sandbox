function showMobileNav() {
  document.getElementsByClassName("navbar")[0].classList.toggle("responsive");  
}

$(document).ready(function(){
  $(document).on('click', '.navbar .link', function(){
    $('.navbar .link').removeClass('lime').addClass('white');
    console.log(this);
    $(this).removeClass('white').addClass('lime');
  });
})