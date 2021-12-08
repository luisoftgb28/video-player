const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');


$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}
function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;

}

function handleForward() {
    $video.currentTime += 10;
}

function handleBackward (){
    $video.currentTime -= 10;
}

$video.addEventListener('loadedmetadata', handleLoaded);

function handleLoaded() {
    $progress.max = $video.duration;
    console.log('Video cargado correctamente', $video.duration);
}
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
}

$progress.addEventListener('input', handleInput);

function handleInput(){
    $video.currentTime = $progress.value;
}

