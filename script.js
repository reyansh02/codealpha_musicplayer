document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        { title: 'Hostel Life', artist: 'Khasa Aala Chahar', src: 'Hostellife.mp3', cover: 'https://a10.gaanacdn.com/gn_img/albums/BZgWoOW2d9/ZgWolB4Eb2/size_l.jpg' },
        { title: 'Dabya Ni Karde', artist: 'ND Kundu & Bintu Pabra', src: 'Dabyanikarde.mp3', cover: 'https://i.ytimg.com/vi/jaNt-FvdjlQ/maxresdefault.jpg' },
        { title: 'Choudhar Jaat Ki', artist: 'Raju Punjabi', src: 'Chodharjaatki.mp3', cover: 'https://i.ytimg.com/vi/Xq5zvXK4PX4/maxresdefault.jpg' },
        { title: 'Combination', artist: 'Amrit Maan', src: 'Combination.mp3', cover: 'https://i.ytimg.com/vi/K9ElLVJTfbA/maxresdefault.jpg' },
        { title: 'Roots', artist: 'Bintu Pabra', src: 'Roots.mp3', cover: 'https://tse1.mm.bing.net/th?id=OIP.KQSgXyvn7JLXuDCwBdYiTAHaHa&pid=Api&P=0&h=180' },
        { title: 'Western UP', artist: 'Eshan Bhati', src: 'Westernup.mp3', cover: 'https://i.ytimg.com/vi/rq_L9RowkBg/maxresdefault.jpg' },
    ];

    let currentSongIndex = 0;

    const audioPlayer = document.getElementById('audioPlayer');
    const playerTitle = document.getElementById('playerTitle');
    const playerArtist = document.getElementById('playerArtist');
    const playerCover = document.getElementById('playerCover');
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const songElements = document.querySelectorAll('.song');

    function loadSong(songIndex) {
        const song = songs[songIndex];
        playerTitle.textContent = song.title;
        playerArtist.textContent = song.artist;
        audioPlayer.src = song.src;
        playerCover.src = song.cover;
    }

    function playSong() {
        audioPlayer.play();
        playBtn.textContent = 'Pause';
    }

    function pauseSong() {
        audioPlayer.pause();
        playBtn.textContent = 'Play';
    }

    playBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            playSong();
        } else {
            pauseSong();
        }
    });

    prevBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    nextBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    songElements.forEach((songElement, index) => {
        songElement.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });
    });

    audioPlayer.addEventListener('ended', () => {
        nextBtn.click();
    });

    // Initial load
    loadSong(currentSongIndex);
});
