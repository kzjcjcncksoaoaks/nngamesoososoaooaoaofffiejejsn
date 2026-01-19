const tg = window.Telegram.WebApp;

document.addEventListener('DOMContentLoaded', () => {
    tg.ready(); 
    
    tg.expand(); 
    
    tg.headerColor = '#000000';
    tg.backgroundColor = '#000000';

    tg.BackButton.onClick(() => {
        router.go('home');
    });

    document.querySelectorAll('.nav-btn, .outline-btn, .c-item').forEach(btn => {
        btn.addEventListener('click', () => {
            if (tg.HapticFeedback) {
                tg.HapticFeedback.impactOccurred('light');
            }
        });
    });
});

const router = {
    currentRoute: 'home',

    go: function(routeId) {
        if (this.currentRoute === routeId) return;

        const views = document.querySelectorAll('.view');
        
        views.forEach(el => {
            el.classList.remove('active');
            if (el.id === routeId) {
                el.classList.add('active');
            }
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' }); 

        this.currentRoute = routeId;

        if (routeId === 'home') {
            tg.BackButton.hide();
        } else {
            tg.BackButton.show();
        }
    }
};
