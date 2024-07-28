// Replace 'YOUR_API_KEY' with your actual YouTube Data API key
const API_KEY = 'AIzaSyBiKaWVqw_N0_-Ko6I-S60dDuNq980PAcM';

function fetchTrendingVideos() {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=10&key=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const results = document.getElementById('results');
            results.innerHTML = '';
            data.items.forEach(item => {
                const li = document.createElement('li');
                const title = document.createElement('h3');
                title.textContent = item.snippet.title;
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${item.id}`;
                li.appendChild(title);
                li.appendChild(iframe);
                results.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Fetch trending videos when the page loads
document.addEventListener('DOMContentLoaded', fetchTrendingVideos);
