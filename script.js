const tg = window.Telegram.WebApp;

document.addEventListener('DOMContentLoaded', () => {
    tg.ready(); 
    tg.expand(); 
    
    // Настраиваем цвета хедера телеграма под наш черный стиль
    if (tg.headerColor) tg.setHeaderColor('#000000');
    if (tg.backgroundColor) tg.setBackgroundColor('#000000');

    tg.BackButton.onClick(() => {
        router.go('home');
    });
});

const router = {
    currentRoute: 'home',

    go: function(routeId) {
        if (this.currentRoute === routeId) return;

        const views = document.querySelectorAll('.view');
        views.forEach(el => el.classList.remove('active'));
        
        const target = document.getElementById(routeId);
        if (target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
        }

        this.currentRoute = routeId;

        if (routeId === 'home') {
            tg.BackButton.hide();
        } else {
            tg.BackButton.show();
        }
    }
};
