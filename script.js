const tg = window.Telegram.WebApp;

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Сообщаем телеграму, что приложение готово
    tg.ready(); 
    tg.expand(); // Раскрыть на весь экран (по желанию, можно убрать)
    
    // Установка цветов темы от Telegram (опционально, но мы форсируем свою зеленую тему)
    // Если захотите, чтобы фон менялся под тему пользователя, раскомментируйте:
    /*
    if (tg.themeParams) {
        if (tg.themeParams.bg_color) {
             // Можно подстраивать только фон, оставляя зеленый акцент
             // document.documentElement.style.setProperty('--bg-color', tg.themeParams.bg_color);
        }
    }
    */

    // Обработка нативной кнопки "Назад" в Telegram интерфейсе
    tg.BackButton.onClick(() => {
        router.go('home');
    });
});

const router = {
    currentRoute: 'home',

    go: function(routeId) {
        // Если мы уже на этом роуте, ничего не делаем (избегаем мерцания)
        if (this.currentRoute === routeId) return;

        // Скрываем все views
        const views = document.querySelectorAll('.view');
        views.forEach(el => el.classList.remove('active'));
        
        // Показываем нужный
        const target = document.getElementById(routeId);
        if (target) {
            target.classList.add('active');
            // Плавная прокрутка вверх
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
        }

        this.currentRoute = routeId;

        // Управление кнопкой "Назад"
        if (routeId === 'home') {
            tg.BackButton.hide();
        } else {
            tg.BackButton.show();
        }
    }
};
