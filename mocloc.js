var $clickme = $('.clickme'),
    $box = $('.box');

$box.hide();

$clickme.click( function(e) {
    $(this).text(($(this).text() === '' ? '<1>' : 'Hide')).next('.box').slideToggle();;
    e.preventDefault();
});
