<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>YouTube Thumbnail Downloader</title>
</head>
<body>
    <header>
        <h1>YouTube Thumbnail Downloader</h1>
    </header>
    <main>
        <div class="thumbnail-container">
            <input type="text" id="videoUrl" placeholder="Enter YouTube Video URL">
            <button id="downloadButton">Download Thumbnail</button>
        </div>
        <div class="thumbnail-preview">
            <h2>Thumbnail Preview</h2>
            <img class="thumbnail-image" id="thumbnailImage" src="" alt="Downloaded Thumbnail">
        </div>
    </main>
    <footer>
        <p>&copy; 2023 YouTube Thumbnail Downloader. All rights reserved.</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
