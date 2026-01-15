// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Сообщаем телеграму, что приложение готово и разворачиваем на весь экран
tg.ready();
tg.expand(); 

// Переменные для навигации
const homeView = document.getElementById('view-home');
let currentView = null;

// Функция перехода на страницу (Router)
function router(pageId) {
    const targetView = document.getElementById('view-' + pageId);
    
    if (targetView) {
        // Показываем нативную кнопку "Назад" телеграма
        tg.BackButton.show();
        
        // Анимация входа
        targetView.style.transform = 'translateX(0)';
        currentView = targetView;
        
        // Скроллим вверх
        targetView.scrollTop = 0;
    }
}

// Функция "Назад"
function goBack() {
    if (currentView) {
        // Скрываем текущий экран (уезжает вправо)
        currentView.style.transform = 'translateX(100%)';
        currentView = null;
        
        // Скрываем нативную кнопку "Назад", так как мы вернулись домой
        tg.BackButton.hide();
    }
}

// Слушаем нажатие на нативную кнопку "Назад" в интерфейсе Telegram
tg.BackButton.onClick(function() {
    goBack();
});

// Настройка цветов хедера (чтобы сливался с фоном)
tg.setHeaderColor(tg.themeParams.bg_color || '#1c1c1e');
tg.setBackgroundColor(tg.themeParams.bg_color || '#1c1c1e');
