const titre = document.querySelector('.titre')
const suivant = document.querySelector('.suivant')
const retour = document.querySelector('.retour')
const play = document.querySelector('.play-pause')
const audio = document.querySelector('audio')
const artiste = document.querySelector('.artiste')
const key = document.querySelector('.key')
const img = document.querySelector('.img')

const liste = [
    {
        src: "./src/audio-1.mp3",
        nom: "Believer",
        artiste: "Imagine Dragons",
        img: "./assets/miniatures/Believer.png"
    },
    {
        src: "./src/audio-2.mp3",
        nom: "Better of alone",
        artiste: "Alice Deejay",
        img: "./assets/miniatures/Better-of-alone.png"
    },    
    {
        src: "./src/audio-3.mp3",
        nom: " Hymn For The Weekend",
        artiste: "Coldplay",
        img: "./assets/miniatures/Hymn-for-the-weekend.png"
    },    
    {
        src: "./src/audio-5.mp3",
        nom: "Eye of Tiger ",
        artiste: "Survivor",
        img: "./assets/miniatures/Eye-of-tiger.png"
    },
    {
        src: "./src/audio-4.mp3",
        nom: "The final countdown ",
        artiste: "Europe",
        img: "./assets/miniatures/The-final-coutdown.png"
    },
];

let musiquePlay = false;

function playMusique(){
    musiquePlay = true;
    audio.play();
    play.classList.add('active');
    play.innerHTML = `<img src="assets/icons/play.png">`
}
function pauseMusique(){
    musiquePlay = false;
    audio.pause();
    play.classList.remove('active');
    play.innerHTML = `<img src="./assets/icons/pause.png">`
}

play.addEventListener('click', ()=> (musiquePlay ? pauseMusique() :
playMusique()));

function loadMusique(liste){
    titre.textContent = liste.nom;
    audio.src = liste.src;
    artiste.textContent = liste.artiste
    img.src = liste.img;
}

let i = 1;

loadMusique(liste[i])

function retourMusique(){
    i--;
    if(i < 0){
        i = liste.length - 1;
    }
    loadMusique(liste[i]);
    playMusique();
}

retour.addEventListener('click', retourMusique);

function suivantMusique(){
    i++;
    if(i > liste.length - 1){
        i = 0;
    }
    loadMusique(liste[i]);
    playMusique();
}

suivant.addEventListener('click', suivantMusique);

// function espace(event){
//     alert("ca marche")
// }