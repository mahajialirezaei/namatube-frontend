const trendingVideos = [
    { title: "K8s: orchestration & resilience", channel: "DevOps Lab", views: "32K", date: "Trending • 1 day ago", thumb: "assets/images/K8s-orchestrasation.jpg" },
    { title: "Microservices Architecture in Cloud", channel: "DevMind Academy", views: "24K", date: "Trending • 2 days ago", thumb: "assets/images/micro-service.png" },
    { title: "Containers vs VMs: cloud scalability", channel: "CloudNative Hub", views: "19K", date: "Trending • 3 days ago", thumb: "assets/images/containers-vms.png" },
    { title: "Subnetting, NAT & DHCP – Deep Dive", channel: "NetPro Engineering", views: "12K", date: "Trending • 1 week ago", thumb: "assets/images/Subnetting.jpg" },
    { title: "Designing REST APIs", channel: "Backend Mastery", views: "9.7K", date: "Trending • 6 days ago", thumb: "assets/images/restful-api.png" },
    { title: "Modern UI Design", channel: "Creative Studio", views: "8.2K", date: "Trending • 5 days ago", thumb: "assets/images/modern-ui.png" }
];

const grid = document.getElementById('trendingGrid');
trendingVideos.forEach(v => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('data-title', v.title);
    card.setAttribute('data-channel', v.channel);
    card.setAttribute('data-views', v.views.split(' ')[0]);
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
    grid.appendChild(card);
});