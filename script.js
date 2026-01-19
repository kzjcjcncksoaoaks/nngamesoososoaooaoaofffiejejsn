const tg = window.Telegram.WebApp;

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    tg.expand(); // Раскрыть на весь экран
    
    // Установка цветов темы от Telegram (если есть)
    if (tg.themeParams) {
        if (tg.themeParams.bg_color) document.documentElement.style.setProperty('--bg-color', tg.themeParams.bg_color);
        // Можно добавить больше адаптации под тему пользователя
    }

    // Обработка кнопки "Назад" в Telegram интерфейсе
    tg.BackButton.onClick(() => {
        router.go('home');
    });
});

const router = {
    currentRoute: 'home',

    go: function(routeId) {
        // Скрываем все views
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        
        // Показываем нужный
        const target = document.getElementById(routeId);
        if (target) {
            target.classList.add('active');
            window.scrollTo(0, 0); // Прокрутка вверх
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
