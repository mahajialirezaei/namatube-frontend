document.addEventListener('DOMContentLoaded', () => {
    const libraryGrid = document.getElementById('libraryGrid');
    const playlistGrid = document.getElementById('playlistGrid');

    if (libraryGrid) {
        libraryGrid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">Loading saved videos...</p>';

        fetch('/api/library/videos')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                libraryGrid.innerHTML = '';

                if (data.length === 0) {
                    libraryGrid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">No saved videos found.</p>';
                    return;
                }

                data.forEach(v => {
                    const card = document.createElement('div');
                    card.className = 'video-card';
                    card.setAttribute('data-title', v.title);
                    card.setAttribute('data-channel', v.channel);
                    card.setAttribute('data-views', v.views);
                    card.setAttribute('data-date', v.date);
                    card.setAttribute('data-thumb', v.thumb);

                    card.innerHTML = `
                            <div class="thumbnail" style="background-image: url('${v.thumb}'); background-size: cover;"></div>
                            <div class="video-info">
                                <div class="video-title">${v.title}</div>
                                <div class="channel-name">${v.channel}</div>
                                <div class="video-stats">${v.views} views • ${v.date}</div>
                            </div>
                        `;

                    card.addEventListener('click', () => {
                        const title = encodeURIComponent(card.dataset.title);
                        const channel = encodeURIComponent(card.dataset.channel);
                        const views = encodeURIComponent(card.dataset.views);
                        const date = encodeURIComponent(card.dataset.date);
                        const thumb = encodeURIComponent(card.dataset.thumb);
                        window.location.href = `watch.html?title=${title}&channel=${channel}&views=${views}&date=${date}&thumb=${thumb}`;
                    });

                    libraryGrid.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Error fetching library videos:', error);
                libraryGrid.innerHTML = '<p style="color: #b91c1c; grid-column: 1 / -1;">Failed to load saved videos.</p>';
            });
    }

    // دریافت Playlists
    if (playlistGrid) {
        playlistGrid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">Loading playlists...</p>';

        fetch('/api/library/playlists')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                playlistGrid.innerHTML = '';

                if (data.length === 0) {
                    playlistGrid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">No playlists found.</p>';
                    return;
                }

                data.forEach(p => {
                    const card = document.createElement('div');
                    card.className = 'video-card';
                    card.style.cursor = 'pointer';
                    card.onclick = () => alert(`📁 Playlist: ${p.title}\n${p.videos} (Dynamic data)`);

                    card.innerHTML = `
                            <div class="thumbnail" style="background-image: url('${p.thumb}'); background-size: cover;"></div>
                            <div class="video-info">
                                <div class="video-title">${p.title}</div>
                                <div class="video-stats">${p.videos}</div>
                            </div>
                        `;
                    playlistGrid.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Error fetching playlists:', error);
                playlistGrid.innerHTML = '<p style="color: #b91c1c; grid-column: 1 / -1;">Failed to load playlists.</p>';
            });
    }
});