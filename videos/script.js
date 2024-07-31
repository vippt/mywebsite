document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'AIzaSyBiKaWVqw_N0_-Ko6I-S60dDuNq980PAcM'; // Thay thế bằng khóa API của bạn
    const apiUrl = 'https://www.googleapis.com/youtube/v3/videos';
    const videoList = document.getElementById('video-list');

    async function fetchTrendingVideos() {
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&key=${apiKey}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            displayVideos(data.items);
        } catch (error) {
            console.error('Có lỗi xảy ra:', error);
        }
    }

    function displayVideos(videos) {
        videoList.innerHTML = '';
        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.innerHTML = `
                <a href="https://www.youtube.com/watch?v=${video.id}">
                    <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
                </a>
                <div class="video-info">
                    <h3>${video.snippet.title}</h3>
                    <p>${video.snippet.channelTitle}</p>
                </div>
            `;
            videoList.appendChild(videoItem);
        });
    }

    fetchTrendingVideos(); // Tải video khi trang được tải

    document.getElementById('search-btn').addEventListener('click', function() {
        const query = document.getElementById('search').value;
        window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    });
});
