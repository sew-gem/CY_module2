const prevBtn = document.querySelector('.music-player__control__btn-prev');
const playBtn = document.querySelector('.music-player__control__btn-play');
const nextBtn = document.querySelector('.music-player__control__btn-next');
const currentTime = document.querySelector('.music-player__progress__current-time');
const durationTime = document.querySelector('.music-player__progress__duration-time');
const bar = document.querySelector('.music-player__progress__current-bar');
const thumb = document.querySelector('.music-player__progress__thumb-bar');
const listSong = document.querySelector('.music-player__list-song');
let audio = null; //biến lưu âm thanh hiện tại

const songsPath = [
    {
        name: "Let me down slowly", 
        artist: "Alec Benjamin", 
        path: "assets/audio/let-me-down-slowly.mp3",
        cover: "assets/img/let_me_down_slowly_cover.png"
    }, 
    {
        name: "Lovely", 
        artist: "Billie Eilish", 
        path: "assets/audio/lovely.mp3",
        cover: "assets/img/lovely_cover.png" 
    },
    {
        name: "Let me down slowly", 
        artist: "Alec Benjamin", 
        path: "assets/audio/let-me-down-slowly.mp3",
        cover: "assets/img/let_me_down_slowly_cover.png"
    }, 
    {
        name: "Lovely", 
        artist: "Billie Eilish", 
        path: "assets/audio/lovely.mp3",
        cover: "assets/img/lovely_cover.png" 
    },
    {
        name: "Let me down slowly", 
        artist: "Alec Benjamin", 
        path: "assets/audio/let-me-down-slowly.mp3",
        cover: "assets/img/let_me_down_slowly_cover.png"
    }, 
    {
        name: "Lovely", 
        artist: "Billie Eilish", 
        path: "assets/audio/lovely.mp3",
        cover: "assets/img/lovely_cover.png" 
    },
];

function renderSongList(){
    songsPath.forEach((song,index)=>{
        const songItem = document.createElement('ul');
        songItem.classList.add('music-player__list-song__item');
        songItem.setAttribute('data-index', index);
        songItem.innerHTML = `<p class="music-player__list-song__name">${song.name}</p>
                              <p class="music-player__list-song__artist">Song by ${song.artist}</p>`;

        songItem.addEventListener('click', () => {
            currentSong.value = index; 
            playSong(songsPath[currentSong.value]);
        });    
        listSong.appendChild(songItem);                  
    })
}

function playSong(song){
    if (audio) {
        audio.pause(); 
    }
    audio = new Audio(song.path); 
    audio.play(); 
    updateCover(song);
    updateDurationTime(); 
    
    // Update current time and progress bar
    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        currentTimeDisplay.textContent = formatTime(currentTime);
        const duration = audio.duration;
        const progressPercent = (currentTime / duration) * 100;
        currentBar.style.width = `${progressPercent}%`;
        thumbBar.style.left = `${progressPercent}%`;
    });
}

function updateCover(song) {
    const coverElement = document.querySelector('.music-player__cover img');
    const songNameElement = document.querySelector('.music-player__cover p:nth-of-type(2)');
    const artistElement = document.querySelector('.music-player__cover p:nth-of-type(3)');

    coverElement.src = song.cover;
    songNameElement.textContent = song.name; 
    artistElement.textContent = `Artist: ${song.artist}`; 
}

function updateDurationTime(){
    audio.addEventListener('loadedmetadata', () => {
        const duration = audio.duration;
        durationTime.innerHTML = formatTime(duration); // Use formatTime function
    });
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
}
renderSongList();

const currentSong = new Proxy(
    { value: 0 },
    {
        set(o, property, value) {
            o[property] = value;
            const song = songsPath[value];
            if (song) {
                updateCover(song); 
            }
            return true; 
        } 
    }
);

// Play button functionality
playBtn.addEventListener('click', () => {
    if (audio) {
        if (audio.paused) {
            console.log('Playing:', songsPath[currentSong.value].path);
            audio.play();
            playBtn.querySelector('img').src = 'assets/img/pause.svg'; // Change to pause icon
        } else {
            audio.pause();
            playBtn.querySelector('img').src = 'assets/img/play.svg'; // Change to play icon
        }
    } else {
        playSong(songsPath[currentSong.value]); // Play the current song if audio is not initialized
        playBtn.querySelector('img').src = 'assets/img/pause.svg'; // Change to pause icon
    }
});

// Previous and Next button functionality
prevBtn.addEventListener('click', () => {
    currentSong.value = (currentSong.value - 1 + songsPath.length) % songsPath.length; // Loop to the end
    playSong(songsPath[currentSong.value]);
});

nextBtn.addEventListener('click', () => {
    currentSong.value = (currentSong.value + 1) % songsPath.length; // Loop to the start
    playSong(songsPath[currentSong.value]);
});