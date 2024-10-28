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

$(function(){
    $('.przycisk_form_3').on('click', function(event){
        event.preventDefault();
        let dzien = parseInt($('#dzien').val());
        let miesiac = $('#miesiac').val();
        let znak = '';
        let img = '';
        let opis = '';

        if ((dzien >= 20 && miesiac === 'styczen') || (dzien <= 18 && miesiac === 'luty')){
            znak = 'Wodnik';
            obraz = '';
            opis = '';
        }

        else if ((dzien >= 19 && miesiac === 'luty') || (dzien <= 20 && miesiac === 'marzec')){
            znak = 'Ryby';
            obraz = '';
            opis = '';
        }

        else if ((dzien >= 21 && miesiac === 'marzec') || (dzien <= 19 && miesiac === 'kwiecien')){
            znak = 'Baran';
            obraz = '';
            opis = '';
        }
        else if ((dzien >= 20 && miesiac === 'kwiecien') || (dzien <= 20 && miesiac === 'maj')){
            znak = 'Byk';
            obraz = '';
            opis = '';
        }
        else if ((dzien >= 21 && miesiac === 'maj') || (dzien <= 20 && miesiac === 'czerwiec')){
            znak = 'Bliźnięta';
            obraz = '';
            opis = '';
        }
        else if ((dzien >= 21 && miesiac === 'czerwiec') || (dzien <= 22 && miesiac === 'lipiec')){
            znak = 'Rak';
            obraz = '';
            opis = '';
        }
        else if ((dzien >= 23 && miesiac === 'lipiec') || (dzien <= 22 && miesiac === 'sierpien')){
            znak = 'Lew';
            obraz = '';
            opis = '';
        }
        else if ((dzien >= 23 && miesiac === 'sieprien') || (dzien <= 22 && miesiac === 'wrzesien')){
            znak = 'Panna';
            obraz = '';
            opis = '';
        }
        else if ((dzien >= 23 && miesiac === 'wrzesien') || (dzien <= 22 && miesiac === 'pazdziernik')){
            znak = 'Waga';
            obraz = '';
            opis = '';
        }
        else if ((dzien >= 23 && miesiac === 'pazdziernik') || (dzien <= 21 && miesiac === 'listopad')){
            znak = 'Skorpion';
            obraz = '';
            opis = '';
        }
        else if ((dzien >= 22 && miesiac === 'listopad') || (dzien <= 21 && miesiac === 'grudzien')){
            znak = 'Strzelec';
            obraz = '';
            opis = '';
        }
        else if ((dzien >= 22 && miesiac === 'grudzien') || (dzien <= 19 && miesiac === 'styczen')){
            znak = 'Koziorożec';
            obraz = '';
            opis = '';
        }
        else{
            
        }
        
        // Ustaw obraz i opis
        $('#obraz_zodiaku').attr('src', obraz).show();
        $('#opis_zodiaku').text(opis).show();

        // Wyświetl sekcję wyniku
        $('#wynikZodiaku').fadeIn();
    });
});
