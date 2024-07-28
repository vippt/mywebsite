// Replace 'YOUR_API_KEY' with your actual YouTube Data API key
const API_KEY = 'AIzaSyBiKaWVqw_N0_-Ko6I-S60dDuNq980PAcM';

function searchYouTube() {
    const query = document.getElementById('query').value;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const results = document.getElementById('results');
            results.innerHTML = '';
            data.items.forEach(item => {
                const li = document.createElement('li');
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${item.id.videoId}`;
                iframe.width = 560;
                iframe.height = 315;
                li.appendChild(iframe);
                results.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
}
