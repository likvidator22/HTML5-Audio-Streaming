var audio = new Audio(); // Audio() тег
audio.setAttribute("src", "http://live.gorodfm.kg:8080/gorodfm"); // атрибут scr 
audio.setAttribute("type", "audio/mpeg"); // MIME



function toggleLoader() {
    var el = document.getElementById('loader');
    el.classList.toggle('hidden');
    el.classList.toggle('visible');

}

var init = function () {
    var playing = 0; // 0=стоп 1=пауза 2=плей
    var playpause = document.getElementById('playpause'); // магия онклика
    playpause.addEventListener('click', function () {
        if (playing == 2) {
            audio.pause();
            document.getElementById('playpause').innerHTML = "Воспроизвести";
            playing = 1;
        } else if (playing == 1) {
            audio.play();
            document.getElementById('playpause').innerHTML = "Пауза"; // показываем паузу
            playing = 2;
        } else {
            audio.play();
            document.getElementById('playpause').innerHTML = "Пауза"; // 
            playing = 2;
        }
    }, false);

    // обработчик события громкости
    var volume = document.getElementById('volume');
    volume.addEventListener('change', function () {
        audio.volume = parseFloat(this.value / 100); //
    }, false);

    // это обработчик события для вывода времени воспроизведения
    audio.addEventListener("timeupdate", function () {
        var duration = document.getElementById('duration');
        var s = parseInt(audio.currentTime % 60);
        var m = parseInt((audio.currentTime / 60) % 60);
        duration.innerHTML = m + ':' + s + '';
    }, false);

    audio.addEventListener('loadstart', toggleLoader);
    console.log('loadstart');
    audio.addEventListener('loadeddata', toggleLoader);
    console.log('loadeddata');
}

// вместо <body onload="init();">
window.onload = init;


