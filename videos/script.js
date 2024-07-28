// script.js
const API_KEY = 'AIzaSyBiKaWVqw_N0_-Ko6I-S60dDuNq980PAcM';

async function searchVideos() {
    const query = document.getElementById('search-query').value;
    if (!query) {
        alert('Please enter a search query');
        return;
    }

    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${encodeURIComponent(query)}&part=snippet&type=video&maxResults=10`);
    const data = await response.json();
    displayVideos(data.items);
}

function displayVideos(videos) {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = ''; // Clear previous results

    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        
        const videoThumbnail = document.createElement('img');
        videoThumbnail.src = video.snippet.thumbnails.medium.url;
        videoThumbnail.onclick = () => watchVideo(video.id.videoId);
        
        const videoDetails = document.createElement('div');
        
        const videoTitle = document.createElement('h3');
        videoTitle.textContent = video.snippet.title;
        
        const videoDescription = document.createElement('p');
        videoDescription.textContent = video.snippet.description;
        
        videoDetails.appendChild(videoTitle);
        videoDetails.appendChild(videoDescription);
        
        videoItem.appendChild(videoThumbnail);
        videoItem.appendChild(videoDetails);
        
        videoList.appendChild(videoItem);
    });
}

function watchVideo(videoId) {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = `
        <div>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
        </div>
    `;
}
