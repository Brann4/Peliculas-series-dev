/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

const netflixModal = document.getElementById('netflixModal');
const hboModal = document.getElementById('hboModal');
const disneyModal = document.getElementById('disneyModal');
const amazonPrimeModal = document.getElementById('amazonPrimeModal');
const starPlusModal = document.getElementById('starPlusModal');

const spotifyModal = document.getElementById('spotifyModal');
const youtubePremiumModal = document.getElementById('youtubePremiumModal');
const tidalHifiModal = document.getElementById('tidalHifiModal');

const ultraPlayModal = document.getElementById('ultraPlayModal');
const movistarPlayModal = document.getElementById('movistarPlayModal');


const netflixButton  = document.querySelector('.platform__container_streaming .platform__card:nth-child(1) .platform__button');
const hboButton  = document.querySelector('.platform__container_streaming .platform__card:nth-child(2) .platform__button');
const disneyButton= document.querySelector('.platform__container_streaming .platform__card:nth-child(3) .platform__button');
const amazonPrimeButton = document.querySelector('.platform__container_streaming .platform__card:nth-child(4) .platform__button');
const starPlusButton = document.querySelector('.platform__container_streaming .platform__card:nth-child(5) .platform__button');

const spotifyButton = document.querySelector('.spotify_button');
const youtubePremiumButton = document.querySelector('.youtube_premium_button');
const tidalHifButton = document.querySelector('.tida_hifi_button');

const movistarPlayButton = document.querySelector('.movistar_play_button');
const ultraPlayButton = document.querySelector('.ultra_play_button');


const closeNetflixModal = document.querySelector('#netflixModal .closeBtn');
const closeHboModal = document.querySelector('#hboModal .closeBtn');
const closeDisneyModal = document.querySelector('#disneyModal .closeBtn');
const closeAmazonPrimeModal = document.querySelector('#amazonPrimeModal .closeBtn');
const closeStarPlusModal = document.querySelector('#starPlusModal .closeBtn');

const closeSpotifyModal = document.querySelector('#spotifyModal .closeBtn');
const closeYoutubePremiumModal = document.querySelector('#youtubePremiumModal .closeBtn');
const closeTidiHifiModal = document.querySelector('#tidalHifiModal .closeBtn');

const closeUltraPlayModal = document.querySelector('#ultraPlayModal .closeBtn');
const closeMovistaPlayModal = document.querySelector('#movistarPlayModal .closeBtn');

/*===== MENU SHOW =====*/
/* Validate if navToggle exist in DOM*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if navClose exist in DOM*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 30) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== MODAL PLANS TRANSITION ====================*/

netflixButton.addEventListener('click', (e) => {
    netflixModal.style.display = (netflixModal.classList.contains('display_none') ? 'block' : '');
});
closeNetflixModal.addEventListener('click', () => {
    netflixModal.style.display = (netflixModal.classList.contains('display_block') ? 'none' : '');
});


hboButton.addEventListener('click', () => {
    hboModal.style.display = (hboModal.classList.contains('display_none') ? 'block' : '');
});
closeHboModal.addEventListener('click', () => {
    hboModal.style.display = (hboModal.classList.contains('display_block') ? 'none' : '');
});


disneyButton.addEventListener('click', () => {
    disneyModal.style.display = (disneyModal.classList.contains('display_none') ? 'block' : '');
});
closeDisneyModal.addEventListener('click', () => {
    disneyModal.style.display = (disneyModal.classList.contains('display_block') ? 'none' : '');
});

amazonPrimeButton.addEventListener('click', () => {
    amazonPrimeModal.style.display = (amazonPrimeModal.classList.contains('display_none') ? 'block' : '');
});
closeAmazonPrimeModal.addEventListener('click', () => {
    amazonPrimeModal.style.display = (amazonPrimeModal.classList.contains('display_block') ? 'none' : '');
});

starPlusButton.addEventListener('click', () => {
    starPlusModal.style.display = (starPlusModal.classList.contains('display_none') ? 'block' : '');
});
closeStarPlusModal.addEventListener('click', () => {
    starPlusModal.style.display = (starPlusModal.classList.contains('display_block') ? 'none' : '');
});



spotifyButton.addEventListener('click', () => {
    spotifyModal.style.display = (spotifyModal.classList.contains('display_none') ? 'block' : '');
});
closeSpotifyModal.addEventListener('click', () => {
    spotifyModal.style.display = (spotifyModal.classList.contains('display_block') ? 'none' : '');
});

youtubePremiumButton.addEventListener('click', () => {
    youtubePremiumModal.style.display = (youtubePremiumModal.classList.contains('display_none') ? 'block' : '');
});
closeYoutubePremiumModal.addEventListener('click', () => {
    youtubePremiumModal.style.display = (youtubePremiumModal.classList.contains('display_block') ? 'none' : '');
});

tidalHifButton.addEventListener('click', () => {
    tidalHifiModal.style.display = (tidalHifiModal.classList.contains('display_none') ? 'block' : '');
});
closeTidiHifiModal.addEventListener('click', () => {
    tidalHifiModal.style.display = (tidalHifiModal.classList.contains('display_block') ? 'none' : '');
});




movistarPlayButton.addEventListener('click', () => {
    movistarPlayModal.style.display = (movistarPlayModal.classList.contains('display_none') ? 'block' : '');
});
closeMovistaPlayModal.addEventListener('click', () => {
    movistarPlayModal.style.display = (movistarPlayModal.classList.contains('display_block') ? 'none' : '');
});

ultraPlayButton.addEventListener('click', () => {
    ultraPlayModal.style.display = (ultraPlayModal.classList.contains('display_none') ? 'block' : '');
});
closeUltraPlayModal.addEventListener('click', () => {
    ultraPlayModal.style.display = (ultraPlayModal.classList.contains('display_block') ? 'none' : '');
});



window.addEventListener('click', clickOutside);


function clickOutside(e){
    switch (e.target) {
        case netflixModal:
            netflixModal.style.display = 'none';
            break;
        case hboModal:
            hboModal.style.display = 'none';
            break;
        case disneyModal:
            disneyModal.style.display = 'none';
            break;
        case amazonPrimeModal:
            amazonPrimeModal.style.display = 'none';
            break;
        case starPlusModal:
            starPlusModal.style.display = 'none';
            break;
        
        case spotifyModal:
            spotifyModal.style.display = 'none';
            break;
        case youtubePremiumModal:
            youtubePremiumModal.style.display = 'none';
            break;
        case tidalHifiModal:
            tidalHifiModal.style.display = 'none';
            break;

        case movistarPlayModal:
            movistarPlayModal.style.display = 'none';
            break;
        case ultraPlayModal:
            ultraPlayModal.style.display = 'none';
                break;
        default:
            break;
    }
}

/*==================== SCROLL REVEAL ANIMATION ====================*/

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})

sr.reveal(`.platform__card`, {
    origin: 'top',
    interval: 700,
});

sr.reveal(`.home__data,
           .home__social,
           .intruct__card`,{
    origin: 'left',
    interval: 700,
});

sr.reveal(`.home__info` ,{ origin: 'right' , interval: 500});

sr.reveal(`.whatsappBtn,
           .home__social,
           .footer__data`,{
    origin: 'top',
    interval: 700,
});
