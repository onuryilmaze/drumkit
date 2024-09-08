//Ses dosyaları tanımlandı
const audioList = [
    'media/ses1.wav',
    'media/ses2.wav',
    'media/ses3.wav',
    'media/ses4.wav',
    'media/ses5.wav',
    'media/ses6.wav',
    'media/ses7.wav',
    'media/ses8.wav',
    'media/ses9.wav'
];

//Tıklama özelliği tanımlandı
for (let i=1; i<= 9; i++) {
    document.getElementById('btn' + i).addEventListener('click', function() {
        let audio = new Audio(audioList[i - 1]);
        audio.play();
    });
}

//Klavye tuşlarının kullanımı(DİNLEME) eklendi
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'A':
            playSound(0);
            break;
        case 'S':
            playSound(1);
            break;
        case 'D':
            playSound(2);
            break;
        case 'F':
            playSound(3);
            break;
        case 'G':
            playSound(4);
            break;
        case 'H':
            playSound(5);
            break;
        case 'J':
            playSound(6);
            break;
        case 'K':
            playSound(7);
            break;
        case 'L':
            playSound(8);
            break;
        case 'a':
            playSound(0);
            break;
        case 's':
            playSound(1);
            break;
        case 'd':
            playSound(2);
            break;
        case 'f':
            playSound(3);
            break;
        case 'g':
            playSound(4);
            break;
        case 'h':
            playSound(5);
            break;
        case 'j':
            playSound(6);
            break;
        case 'k':
            playSound(7);
            break;
        case 'l':
            playSound(8);
            break;
        default:
            break;
    }
});

//ses oynatma fonksiyonu eklendi

function playSound(index) {
    let audio = new Audio(audioList[index]);
    audio.play();
}

