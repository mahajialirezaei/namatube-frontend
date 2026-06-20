document.addEventListener('DOMContentLoaded', () => {
    const historyGrid = document.getElementById('historyGrid');

    if (!historyGrid) return;

    // نمایش وضعیت Loading
    historyGrid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">Loading watch history...</p>';

    fetch('/api/videos/history')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            historyGrid.innerHTML = '';

            if (data.length === 0) {
                historyGrid.innerHTML = '<p style="color: #9ca3af; grid-column: 1 / -1;">No watch history found.</p>';
                return;
            }

            data.forEach(vid => {
                const card = document.createElement('div');
                card.className = 'video-card';
                card.setAttribute('data-title', vid.title);
                card.setAttribute('data-channel', vid.channel);
                card.setAttribute('data-views', vid.views);
                card.setAttribute('data-date', vid.date);
                card.setAttribute('data-thumb', vid.thumb);

                card.innerHTML = `
                        <div class="thumbnail" style="background-image: url('${vid.thumb}'); background-size: cover;"></div>
                        <div class="video-info">
                            <div class="video-title">${vid.title}</div>
                            <div class="channel-name">${vid.channel}</div>
                            <div class="video-stats">${vid.views} views • ${vid.date}</div>
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

                historyGrid.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching history videos:', error);
            historyGrid.innerHTML = '<p style="color: #b91c1c; grid-column: 1 / -1;">Failed to load history. Please try again later.</p>';
        });
});