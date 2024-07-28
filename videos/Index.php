<?php

// Your API key
$apiKey = 'YOUR_API_KEY';

// The search query
$query = 'YOUR_SEARCH_QUERY';

// API URL
$apiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=' . urlencode($query) . '&key=' . $apiKey;

// Initialize cURL
$ch = curl_init();

// Set the options
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the request
$response = curl_exec($ch);

// Close cURL
curl_close($ch);

// Decode the JSON response
$data = json_decode($response, true);

// Check if the response contains items
if (isset($data['items'])) {
    foreach ($data['items'] as $item) {
        // Get the video ID and title
        $videoId = $item['id']['videoId'];
        $title = $item['snippet']['title'];

        // Construct the watch URL
        $watchUrl = 'https://www.youtube.com/watch?v=' . $videoId;

        // Output the video details
        echo 'Title: ' . $title . '<br>';
        echo 'Watch URL: <a href="' . $watchUrl . '" target="_blank">' . $watchUrl . '</a><br><br>';
    }
} else {
    echo 'No results found.';
}

?>
