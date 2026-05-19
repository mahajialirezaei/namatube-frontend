document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const title = encodeURIComponent(card.dataset.title || card.querySelector('.video-title')?.innerText || 'Video');
        const channel = encodeURIComponent(card.dataset.channel || 'DevMind Academy');
        const views = encodeURIComponent(card.dataset.views || '0');
        const date = encodeURIComponent(card.dataset.date || 'unknown');
        const thumb = encodeURIComponent(card.dataset.thumb || 'assets/images/micro-service.png');
        window.location.href = `watch.html?title=${title}&channel=${channel}&views=${views}&date=${date}&thumb=${thumb}`;
    });
});