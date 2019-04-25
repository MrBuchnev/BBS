var currentClass = 'nav__link--current';
var url = '/sites/andrey/Lists/Employees/AllItems.aspx'

$('.nav__link').on('click', function () {
    $('.' + currentClass).removeClass(currentClass);
    $(this).addClass(currentClass);
});
