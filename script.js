const downloadButton = document.getElementById("downloadButton");
const videoUrlInput = document.getElementById("videoUrl");
const thumbnailContainer = document.getElementById("thumbnailContainer");

downloadButton.addEventListener("click", async () => {
    const videoUrl = videoUrlInput.value;
    const videoId = videoUrl.split("v=")[1];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = thumbnailUrl;

    thumbnailContainer.innerHTML = "";
    thumbnailContainer.appendChild(thumbnailImage);
});
