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
            obraz = 'img/wodnik.png';
            opis = 'Wodniki to osoby, które często bujają w obłokach, mając głowy pełne marzeń i rewolucyjnych pomysłów.';
        }

        else if ((dzien >= 19 && miesiac === 'luty') || (dzien <= 20 && miesiac === 'marzec')){
            znak = 'Ryby';
            obraz = 'ryby.png';
            opis = 'Ryby to komunikatywność, otwartość, empatia, bezinteresowność, opiekuńczość, naiwność oraz spryt.';
        }

        else if ((dzien >= 21 && miesiac === 'marzec') || (dzien <= 19 && miesiac === 'kwiecien')){
            znak = 'Baran';
            obraz = 'baran.png';
            opis = 'Barany charakteryzują się silną wolą, determinacją i niezależnością.';
        }
        else if ((dzien >= 20 && miesiac === 'kwiecien') || (dzien <= 20 && miesiac === 'maj')){
            znak = 'Byk';
            obraz = 'byk.png';
            opis = 'Byki są stałe w uczuciach. Cechują się wytrwałością w dążeniu do obranych celów; są osobami solidnymi i niezawodnymi – na Byka można liczyć.';
        }
        else if ((dzien >= 21 && miesiac === 'maj') || (dzien <= 20 && miesiac === 'czerwiec')){
            znak = 'Bliźnięta';
            obraz = 'bliznieta.png';
            opis = 'Bliźnięta łączą w sobie cechy dwóch osobowości: są elastyczne i ekspresyjne. Osoby urodzone pod tym znakiem są towarzyskie, komunikatywne i radosne, a zarazem otwarte, ciekawe świata i pomysłowe.';
        }
        else if ((dzien >= 21 && miesiac === 'czerwiec') || (dzien <= 22 && miesiac === 'lipiec')){
            znak = 'Rak';
            obraz = 'rak.png';
            opis = 'Raki charakteryzują się głęboką emocjonalnością, intuicją i troską o innych.';
        }
        else if ((dzien >= 23 && miesiac === 'lipiec') || (dzien <= 22 && miesiac === 'sierpien')){
            znak = 'Lew';
            obraz = 'lew.png';
            opis = ' Lwy są z natury dobroduszne. Wywierają pozytywny wpływ na swoje otoczenie.';
        }
        else if ((dzien >= 23 && miesiac === 'sieprien') || (dzien <= 22 && miesiac === 'wrzesien')){
            znak = 'Panna';
            obraz = 'panna.png';
            opis = 'Panna charakteryzuje się praktycznym podejściem do życia, skrupulatnością i perfekcjonizmem.';
        }
        else if ((dzien >= 23 && miesiac === 'wrzesien') || (dzien <= 22 && miesiac === 'pazdziernik')){
            znak = 'Waga';
            obraz = 'waga.png';
            opis = 'Wagi wyróżniają się swoim dążeniem do równowagi, dyplomacją i umiłowaniem piękna.';
        }
        else if ((dzien >= 23 && miesiac === 'pazdziernik') || (dzien <= 21 && miesiac === 'listopad')){
            znak = 'Skorpion';
            obraz = 'skorpion.png';
            opis = 'Skorpiony charakteryzują się odwagą, przebiegłością i intensywnym życiem wewnętrznym. Są lojalne, zaangażowane.';
        }
        else if ((dzien >= 22 && miesiac === 'listopad') || (dzien <= 21 && miesiac === 'grudzien')){
            znak = 'Strzelec';
            obraz = 'strzelec.png';
            opis = 'Strzelce to prawdziwi poszukiwacze przygód. Są pełne energii, optymizmu i entuzjazmu do życia. Ich cechy charakterystyczne to niezależność, otwartość na nowe doświadczenia i dążenie do poznawania świata.';
        }
        else if ((dzien >= 22 && miesiac === 'grudzien') || (dzien <= 19 && miesiac === 'styczen')){
            znak = 'Koziorożec';
            obraz = 'koziorozec.png';
            opis = 'Koziorożce to jednostki, które rzadko bujają w obłokach i wolą planować swoje życie. Koziorożce cenią sobie dyscyplinę i dążą do perfekcji, a ich podejście do życia jest racjonalne i skoncentrowane na osiąganiu konkretnych celów.';
        }
        else{
            
        }
        
        // Ustaw obraz i opis
        $('#obraz_zodiaku').attr('src', obraz).show();
        $('#opis_zodiaku').text(opis).show();

        // Wyświetl sekcję wyniku
        $('#wynikZodiaku').show();
    });
});
