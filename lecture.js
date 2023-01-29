const titre = document.querySelector('.titre')
const suivant = document.querySelector('.suivant')
const retour = document.querySelector('.retour')
const play = document.querySelector('.play-pause')
const pause = document.querySelector('.pause')
const audio = document.querySelector('.audio')
const artiste = document.querySelector('.artiste')
const key = document.querySelector('.key')
const img = document.querySelector('.img')
const lecture = document.querySelector('.lecture')

const liste = [
    {
        src: "./src/believer.mp3",
        nom: "Believer",
        artiste: "Imagine Dragons",
        img: "./assets/miniatures/Believer.png"
    },
    {
        src: "./src/better.mp3",
        nom: "Better of alone",
        artiste: "Alice Deejay",
        img: "./assets/miniatures/Better-of-alone.png"
    },    
    {
        src: "./src/hymn.mp3",
        nom: " Hymn For The Weekend",
        artiste: "Coldplay",
        img: "./assets/miniatures/Hymn-for-the-weekend.png"
    },    
    {
        src: "./src/eye.mp3",
        nom: "Eye of Tiger ",
        artiste: "Survivor",
        img: "./assets/miniatures/Eye-of-tiger.png"
    },
    {
        src: "./src/final.mp3",
        nom: "The final countdown ",
        artiste: "Europe",
        img: "./assets/miniatures/The-final-coutdown.png"
    },
];

let musiquePlay = false;

function playMusique(){
    musiquePlay = true;
    audio.play();
    play.innerHTML = `<img src="./assets/icons/play-actif.png">`
    play.classList.add('active');
}
function pauseMusique(){
    musiquePlay = false;
    audio.pause();
    play.innerHTML = `<img src="./assets/icons/pause.png">`
    play.classList.remove('active');
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


audio.addEventListener("ended", suivantMusique)



// lecture Better

let image = document.querySelector('.play')
let Better = document.querySelector('.better')

musiquePlayBetter = false;

function playMusiqueBetter(){
    musiquePlayBetter = true;
    Better.play();
    image.src = "./assets/icons/play-actif.png";
    image.classList.add('active');
}
function pauseMusiqueBetter(){
    musiquePlayBetter = false;
    Better.pause();
    image.src = "./assets/icons/pause.png";
    image.classList.remove('active');
}

image.addEventListener('click', ()=> (musiquePlayBetter ? pauseMusiqueBetter() :
playMusiqueBetter()));

// lecture hymn

let image2 = document.querySelector('.play2')
let Hymn = document.querySelector('.hymn')

musiquePlayHymn = false;

function playMusiqueHymn(){
    musiquePlayHymn = true;
    Hymn.play();
    image2.src = "./assets/icons/play-actif.png";
    image2.classList.add('active');
}
function pauseMusiqueHymn(){
    musiquePlayHymn = false;
    Hymn.pause();
    image2.src = "./assets/icons/pause.png";
    image2.classList.remove('active');
}

image2.addEventListener('click', ()=> (musiquePlayHymn ? pauseMusiqueHymn() :
playMusiqueHymn()));

// lecture eye

let image3 = document.querySelector('.play3')
let Eye = document.querySelector('.eye')

musiquePlayEye = false;

function playMusiqueEye(){
    musiquePlayEye = true;
    Eye.play();
    image3.src = "./assets/icons/play-actif.png";
    image3.classList.add('active');
}
function pauseMusiqueEye(){
    musiquePlayEye = false;
    Eye.pause();
    image3.src = "./assets/icons/pause.png";
    image3.classList.remove('active');
}

image3.addEventListener('click', ()=> (musiquePlayEye ? pauseMusiqueEye() :
playMusiqueEye()));

// lecture final

let image4 = document.querySelector('.play4')
let Final = document.querySelector('.final')

musiquePlayFinal = false;

function playMusiqueFinal(){
    musiquePlayFinal = true;
    Final.play();
    image4.src = "./assets/icons/play-actif.png";
    image4.classList.add('active');
}
function pauseMusiqueFinal(){
    musiquePlayFinal = false;
    Final.pause();
    image4.src = "./assets/icons/pause.png";
    image4.classList.remove('active');
}

image4.addEventListener('click', ()=> (musiquePlayFinal ? pauseMusiqueFinal() :
playMusiqueFinal()));

// lecture believer

let image5 = document.querySelector('.play5')
let Believer = document.querySelector('.believer')

musiquePlayBeliever = false;

function playMusiqueBeliever(){
    musiquePlayBeliever = true;
    Believer.play();
    image5.src = "./assets/icons/play-actif.png";
    image5.classList.add('active');
}
function pauseMusiqueBeliever(){
    musiquePlayBeliever = false;
    Believer.pause();
    image5.src = "./assets/icons/pause.png";
    image5.classList.remove('active');
}

image5.addEventListener('click', ()=> (musiquePlayBeliever ? pauseMusiqueBeliever() :
playMusiqueBeliever()));