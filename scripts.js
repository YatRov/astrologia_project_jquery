$(function() {
    $('.kula').on('click', function() {
        $('#form_1').fadeIn(); 
        $('#form_1').toggleClass('podswietlenie_form'); 
    });
});

$(function(){
    $('.kula').on('mouseover', function(){
        $('.tekst_przy_najechaniu').fadeIn()
    });
    $('.kula').on('mouseout', function() {
        $('.tekst_przy_najechaniu').fadeOut(); 
    });
});

$(function() {
    $('.title').fadeIn(2000);
});


