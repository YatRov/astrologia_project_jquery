$(function() {
    $('.title').fadeIn(2000);//Animacja z tytułem

    $('.kula').on('click', function() {// Kliknięcie na kulę
        $('#form_1').fadeIn();
        $('#form_1').toggleClass('podswietlenie_form');//Po naciśnięciu kulki pojawia się formularz
    });

    
    $('.kula').on('mouseover', function() {// Najechanie kursorem na kulę
        $('.tekst_przy_najechaniu').fadeIn();//Wyświetla tekst po najechanie kursorem
    });

    
    $('.kula').on('mouseout', function() {// Odsunięcie kursora z elementu
        $('.tekst_przy_najechaniu').fadeOut();
    });

    
    $('.przycisk_form_2').on('click', function() {// Kliknięcie na przycisk z formularza 2
        $('#form_2').fadeIn();
        $('#form_2').toggleClass('podswietlenie_form_2');//Po naciśnięciu przycisk pojawia się formularz
    });
});

//Funkcja do formularz 2
/*
$(function(){
    $('').on('click', function(){
        let dzien = parseInt($('#dzien').val());
        let miesiac = $('#miesiac').val();
        let znak = '';
        let img = '';
        let opis = '';

        if ((dzien >= 20 && miesiac === 'styczen') || (dzien <= 18 && miesiac === 'marzec')){
            znak = 'Wodnik';
            obraz = '';
            opis = '';

        }else if (){

        }
    });
});
*/
