document.getElementById('burgermenu').onclick = function () {
    // On execute une fonction si on click sur le menu
    if (window.screen.width < 1200) {

        // Je verifie que nous sommes bien en version mobile/tablette
        if (this.className.match(' fa-solid fa-bars burgermenu fa-2xl burgermenu show')) {
            // si mon element navbat a la class "show" alors je fais :
            this.className = 'fa-solid fa-bars burgermenu fa-2xl burgermenu ';
            // Je lui met uniquement la class navbar (pour annuler le show)

            var nav = document.querySelectorAll('.navbar__list');
            for (var i = 0; i < nav.length; ++i) {
                nav[i].style.display = "none";
                //   Je boucle pour ne plus afficher mes deux listes de navbar 
            };

        } else {

            this.className = ' fa-solid fa-bars burgermenu fa-2xl burgermenu show';
            // je lui attribue la class show pour afficher les listes
            var nav = document.querySelectorAll('.navbar__list');
            for (var i = 0; i < nav.length; ++i) {
                nav[i].style.display = "flex";
                // Je boucle sur les listes pour les afficher et changer leurs display de none a flex 
            }
        }
    }
}