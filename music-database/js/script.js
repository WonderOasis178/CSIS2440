function getAlbumImage() {
    var selectedAlbum = a.options[a.selectedIndex].value;
    var albumImage = '../img/img_placeholder.png';
 
    if(selectedAlbum == 'Blood Harmony') {
     albumImage = '../img/bloodharmony.jpg'
    }
    else if(selectedAlbum == 'Happier than ever') {
     albumImage = '../img/Billie-Eilish-Happier-Than-Ever.jpeg';
    }
    else if(selectedAlbum == 'When we all fall asleep, where do we go?') {
     albumImage = '../img/when-we-all-fall-asleep.jpg';
    }
    else if(selectedAlbum == 'CALM') {
     albumImage = '../img/CALM.jpg';
    }
    else if(selectedAlbum == 'Youngblood') {
     albumImage = '../img/youngblodd.jpg';
    }
    else if(selectedAlbum == 'Sounds Good Feels Good') {
     albumImage = '../img/sgfg.jpg';
    }
    else if(selectedAlbum == 'AM') {
     albumImage = '../img/_AM__(Arctic_Monkeys).jpg';
    }
    else if(selectedAlbum == '5 Seconds Of Summer') {
     albumImage = '../img/5secondsofsummer.jpeg';
    }
    else if(selectedAlbum == 'Sour') {
     albumImage = '../img/sour.png';
    }
    else if(selectedAlbum == "Teatro d'ira - vol. i") {
     albumImage = '../img/maneskin.jpeg';
    }
    else if(selectedAlbum == 'When facing the things we turn away from') {
     albumImage = '../img/lukehemmings.png';
    }
    else if(selectedAlbum == 'Back from the edge') {
     albumImage = '../img/jamesarthur.jpg';
    }
    else
     albumImage = '../img/CALM.jpg';
 
    return albumImage;
 
 }
 