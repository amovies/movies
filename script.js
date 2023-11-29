const movies = [
    // { title: "", releaseDate: "2023-08-25", genre: "Action", languge: "Kannada",  downloadLink: "" },//




    { title: "Baanadariyalli", releaseDate: "2023-09-28", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/aztzphz10pz6/Baanadariyalli---40-2023--41--Kannada-HQ-HDRip---700MB---x264---AAC---ESub.mkv" },
    { title: "Swathi Mutthina Male Haniy", releaseDate: "2023-11-24", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/dar9c9emakio/Swathi-Mutthina-Male-Haniye---40-2023--41--Kannada-HQ-PreDVD---720p---x264---HQ-Clean-Aud---1.1GB.mkv" },
    { title: "once upon a time in jamaligudda", releaseDate: "2022-12-30", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/x48a8mwxymrv/Once-Upon-A-Time-In-Jamaaligudda---40-2023--41--Kannada-HQ-HDRip---x264---AAC---700MB-ESub.mkv" },
    { title: "Bad Manners", releaseDate: "2023-01-24", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/dp0do9pflo8k/Bad-Manners---40-2023--41--Kannada-HQ-PreDVD---700MB---x264---HQ-Clean-Aud.mkv" },
    { title: "Raja Marthanda (2023) ", releaseDate: "2023-08-06", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/2ckvmzhhp45x/Raja-Marthanda---40-2023--41--Kannada-HQ-HDRip---700MB---x264---AAC---ESub.mkv" },
    { title: "Sapta Sagaradaache Ello - Side B ", releaseDate: "2023-11-17", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/4jh0u8oeh1gv/Sapta-Sagaradaache-Ello---Side-B---40-2023--41--Kannada-HQ-PreDVD---700MB---x264---HQ-Clean-Aud.mkv" },
    { title: "Ghost (2023) ", releaseDate: "2023-10-19", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/gr91gxnun83g/Ghost---40-2023--41--Kannada-HQ-PreDVD---700MB---x264---HQ-Clean-Aud.mkv" },
    { title: "Tatsama Tadbhava HD (2023) Kannada ", releaseDate: "2023-09-15", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/dfqk500rc1ug/Thathsama-Thathbhava---40-2023--41--Kannada-HQ-HDRip---700MB---x264---AAC---ESub.mkv" },
    { title: "LEO (2023) Telugu", releaseDate: "2023-10-20", genre: "Action", languge: "Telugu",  downloadLink: "https://uploady.io/po2269jkw30i/LEO---40-2023--41---Telugu---Proper-PreDVDRip---x264---AAC---700MB---HQ-Line-Audio-.mkv" },
    { title: "Leo (2023) Tamil", releaseDate: "2023-10-19", genre: "Action", languge: "Tamil",  downloadLink: "https://uploady.io/2e99jrtph4uv/Leo---40-2023--41--Tamil-C2-A0Proper-HQ-PreDVD---700MB---x264---HQ-Clean-Aud.mkv" },
    { title: " Ghost Kannada 2023", releaseDate: "2023-10-19", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/f5jn76gg9oxb/Ghost---40-2023--41--Kannada-HQ-PreDVD---700MB---x264---HQ-Clean-Aud.mkv" },
    { title: "Hostel Hudugaru Bekagiddare (2023) HD", releaseDate: "2023-07-21", genre: "Action,Comady", languge: "Kannada",  downloadLink: "https://uploady.io/fhs6w7lmery7/Hostel-Hudugaru-Bekagiddare---40-2023--41--C2-A0Kannada-C2-A0HQ-HDRip---700MB---x264---AAC---ESub.mkv.mp4" },
    { title: "Sapta Sagaradaache Ello - Side A (2023) HD", releaseDate: "2023-09-01", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/rxwszso6d1kv/Sapta-Sagaradaache-Ello---Side-A---40-2023--41--HQ-HDRip---720p---HEVC-----40-AAC-2.0--41---Tam--Kan--Tel--Mal----800MB---ESub.mkv" },
    { title: "Meg 2: The Trench (2023)", releaseDate: "2023-08-04", genre: "Action", languge: "Hindi",  downloadLink: "https://uploady.io/6qddlux4eon7/Meg-2---40-2023--41--HQ-HDRip---720p---HEVC---Org-Auds--Tam--Tel--Hin--Eng-.mkv" },
    { title: "The Nun II", releaseDate: "2023-09-07", genre: "Action", languge: "Hindi",  downloadLink: "https://uploady.io/prvz4pom3ucn/The-Nun-II---40-2023--41--Hindi-HQ-HDCAM---720p---x264---HQ-Clean-Aud---AAC---1GB.mkv" },
    { title: " Jawan (2023) Hindi", releaseDate: "2023-09-7", genre: "Action", languge: "Hindi",  downloadLink: "https://uploady.io/l3n0xbbsgepo/Jawan---40-2023--41--Hindi-HQ-PreDVD---700MB---x264---HQ-Clean-Aud---MP3.mkv" },
    { title: "Gadar 2 (2023) Hindi", releaseDate: "2023-08-11", genre: "Action", languge: "Hindi",  downloadLink: "https://uploady.io/aesuu2u5yqgd/Gadar-2---40-2023--41--Hindi-HQ-PreDVD---700MB---x264---MP3.mkv" },
    { title: "Kushi (2023) Kannada", releaseDate: "2023-09-01", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/i8vvf57x98e8/Kushi---40-2023--41--Kannada-HQ-PreDVD---720p---x264---HQ-Clean-Aud---1.4GB.mkv" },
    { title: "Vedha (2022) ", releaseDate: "2022-12-23", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/bj3rsq2r8xmc/Vedha---40-2022--41--HQ-HDRip---720p---HEVC-----40-AAC-2.0--41---Tam--Tel--Kan--Mal----900MB---ESub.mkv" },
    { title: "Toby kannada", releaseDate: "2023-08-25", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/djli84qbf0hk/Toby---40-2023--41--Kannada-HQ-PreDVD---720p---x264---HQ-Clean-Aud---1.6GB.mkv.mp4" },
   // { title: "", releaseDate: "2023-08-25", genre: "Action", languge: "Kannada",  downloadLink: "" },//
    // Add more movie objects


    
    { title: "Gurudev Hoysala (2023) ", releaseDate: "2023-03-30", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/x5hpuyok1c37/Gurudev-Hoysala---40-2023--41--Kannada-HQ-HDRip---700MB---x264---AAC---ESub.mkv" },
    { title: "Kabzaa (2023) ", releaseDate: "2023-03-17", genre: "Action", languge: "Kannada,Hindi,Tamil,Mal,Telg",  downloadLink: "https://uploady.io/f5591d9sw4rd/TheMoviesBoss---Kabzaa.--40-2023--41-.720p.AMZN.WebRip.Multi.AAC2.0.H.264-themoviesboss.mkv" },
    { title: "Shivaji surathkal 2", releaseDate: "2023-04-14", genre: "Action", languge: "Kannada",  downloadLink: "https://uploady.io/42ysclqhvhte/Shivaji-Surathkal-2---40-2023--41--Kannada-HQ-HDTVRip---720p---x264---AAC---1.2GB.mkv" },


];


const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const movieList = document.getElementById("movieList");
const movieDetail = document.getElementById("movieDetail");

// Display movie listings
function displayMovies(movieArray) {
    movieList.innerHTML = "";
    movieArray.forEach(movie => {
        const movieThumbnail = document.createElement("div");
        movieThumbnail.classList.add("movie-thumbnail");
        movieThumbnail.innerHTML = `<h3>${movie.title}</h3><p>Release Date: ${movie.releaseDate}</p>`;
        movieThumbnail.addEventListener("click", () => showMovieDetail(movie));
        movieList.appendChild(movieThumbnail);
    });
}

// Show individual movie detail
function showMovieDetail(movie) {
    movieDetail.innerHTML = `
        <h2>${movie.title}</h2>
        <p>Release Date: ${movie.releaseDate}</p>
        <p>Genre: ${movie.genre}</p>
        <p>Language: ${movie.languge}</p>
       
      
        
        <button id="downloadButton">Download</button>
    `;
    movieDetail.style.display = "block";

    const downloadButton = document.getElementById("downloadButton");
    downloadButton.addEventListener("click", () => downloadMovie(movie.downloadLink));
}

// Simulate download action
function downloadMovie(link) {
    window.location.href = link; // Replace with actual download logic
}

// Initial display of movies
displayMovies(movies);

// Search functionality
searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
});

