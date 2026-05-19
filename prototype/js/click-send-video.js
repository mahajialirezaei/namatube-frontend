document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = encodeURIComponent(card.dataset.title);
        const channel = encodeURIComponent(card.dataset.channel);
        const views = encodeURIComponent(card.dataset.views);
        const date = encodeURIComponent(card.dataset.date);
        const thumb = encodeURIComponent(card.dataset.thumb);
        window.location.href = `watch.html?title=${title}&channel=${channel}&views=${views}&date=${date}&thumb=${thumb}`
})});
