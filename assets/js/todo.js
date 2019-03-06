/* eslint-disable no-undef */

//check off specific todos by clicking
//!when li is click inside that ul, use ON not click
$('ul').on('click', 'li', function () {
  //if li is grey, turn black, else its grey
  $(this).toggleClass('completed');
});

//click on x to delete todo
$('ul').on('click', 'span', function () {
  $(this).parent().fadeOut(500, function () {
    $(this).remove(); //! delete todo
  });
  event.stopPropagation(); //!stop trigger other click
});

//add new todo
// eslint-disable-next-line quotes
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //adding new todo text from input
    const todoText = $(this).val();
    $(this).val('');
    //create a new li and to ul
    // eslint-disable-next-line quotes
    $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

$('.fa-plus').click(function () {
  // eslint-disable-next-line quotes
  $("input[type='text']").fadeToggle();
});
