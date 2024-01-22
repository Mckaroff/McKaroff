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
// вариант с несколькими иконками
// document.addEventListener("DOMContentLoaded", function() {
    // Список пунктов навигации и соответствующих им иконок
    var navItems = [
        { title: "Home", iconClass: "fas fa-home" },
        { title: "About", iconClass: "fas fa-info-circle" },
        { title: "Contact", iconClass: "fas fa-envelope" },
        // Добавьте дополнительные пункты здесь
    ];

    // Поиск элементов навигации и добавление иконок
    var navLinks = document.querySelectorAll('.md-nav__link');
    navLinks.forEach(function(link) {
        navItems.forEach(function(item) {
            if (link.textContent.trim() === item.title) {
                link.innerHTML = '<i class="' + item.iconClass + '"></i> ' + link.innerHTML;
            }
        });
    });
});
