(function () {
    var preload = ["ENVIORNMENT/Art_Room.png", "ENVIORNMENT/Cafeteria.png", "ENVIORNMENT/Gym.png", "ENVIORNMENT/Classroom.png"];

    window._ImageCache = preload.map(function (url) {
        var image = document.createElement('img');
        image.src = url;
        return image;
    });
})();