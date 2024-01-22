document.addEventListener("DOMContentLoaded", function() {
    // Список пунктов навигации и соответствующих им иконок
    var navItems = [
        { title: "Home", iconClass: "fas fa-home" },
        { title: "Features", iconClass: "fas fa-info-circle" },
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
