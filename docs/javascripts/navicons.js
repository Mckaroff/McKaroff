document.addEventListener("DOMContentLoaded", function() {
    // Иконка FontAwesome, которую вы хотите добавить
    var iconHtml = '<i class="fas fa-info-circle"></i> ';

    // Поиск элемента навигации по тексту
    var navItems = document.querySelectorAll('.md-nav__link');
    navItems.forEach(function(item) {
        if (item.textContent.trim() === 'Features') {
            item.innerHTML = iconHtml + item.innerHTML;
        }
    });
});
