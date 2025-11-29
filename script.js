// 搜索功能
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const siteCards = document.querySelectorAll('.site-card');
    
    siteCards.forEach(card => {
        const siteName = card.getAttribute('data-name').toLowerCase();
        if (siteName.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// 添加点击动画效果
document.querySelectorAll('.site-card').forEach(card => {
    card.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// 键盘快捷键支持
document.addEventListener('keydown', function(e) {
    if (e.key === '/' && e.target !== document.getElementById('searchInput')) {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// 显示欢迎消息
console.log('欢迎使用个人导航站！快捷键：按 / 键快速搜索');
