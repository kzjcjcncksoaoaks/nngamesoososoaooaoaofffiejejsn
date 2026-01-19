// Инициализация Telegram WebApp API
const tg = window.Telegram.WebApp;

document.addEventListener('DOMContentLoaded', () => {
    // Сообщаем TG, что приложение загрузилось
    tg.ready(); 
    
    // Растягиваем на всю возможную высоту
    tg.expand(); 
    
    // Настраиваем цвета статус-бара и фона самого приложения
    tg.headerColor = '#000000';
    tg.backgroundColor = '#000000';

    // Слушаем нажатие на встроенную кнопку "Назад" в интерфейсе Telegram
    tg.BackButton.onClick(() => {
        router.go('home');
    });

    // Добавляем тактильную отдачу (вибрацию) при кликах на кнопки меню для мобилок
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

    /**
     * Переход между секциями сайта
     * @param {string} routeId - ID секции (home, forbidden, и т.д.)
     */
    go: function(routeId) {
        if (this.currentRoute === routeId) return;

        // Находим все экраны
        const views = document.querySelectorAll('.view');
        
        // Скрываем текущие и активируем нужный
        views.forEach(el => {
            el.classList.remove('active');
            if (el.id === routeId) {
                el.classList.add('active');
            }
        });
        
        // Всегда скроллим в начало страницы при переходе
        window.scrollTo({ top: 0, behavior: 'smooth' }); 

        this.currentRoute = routeId;

        // Логика отображения кнопки "Назад" в верхнем баре TG
        if (routeId === 'home') {
            tg.BackButton.hide();
        } else {
            tg.BackButton.show();
        }
    }
};
