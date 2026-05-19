const urlParams = new URLSearchParams(window.location.search);
const title = decodeURIComponent(urlParams.get('title') || 'Microservices Architecture in Cloud');
const channel = decodeURIComponent(urlParams.get('channel') || 'DevMind Academy');
const views = decodeURIComponent(urlParams.get('views') || '24K');
const date = decodeURIComponent(urlParams.get('date') || '3 days ago');
const thumb = decodeURIComponent(urlParams.get('thumb') || 'assets/images/micro-service.png');

document.getElementById('videoTitle').innerText = title;
document.getElementById('videoStats').innerHTML = `${views} views • ${date}`;
document.getElementById('channelName').innerHTML = channel;
document.getElementById('subscriberCount').innerHTML = '128K subscribers';

const playerDiv = document.querySelector('.player');
if (playerDiv) {
    const oldBlur = playerDiv.querySelector('.player-blur-bg');
    if (oldBlur) oldBlur.remove();

    const blurDiv = document.createElement('div');
    blurDiv.className = 'player-blur-bg';
    blurDiv.style.backgroundImage = `url('${thumb}')`;
    playerDiv.insertBefore(blurDiv, playerDiv.firstChild);

    playerDiv.style.background = 'none';
}

const avatarDiv = document.getElementById('channelAvatar');
if (avatarDiv && channel) {
    const initials = channel.split(' ').map(word => word[0]).join('').substring(0,2).toUpperCase();
    avatarDiv.innerText = initials;
}