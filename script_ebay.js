    // Récupérer tous les boutons et toutes les descriptions
    const buttons = document.querySelectorAll('.btn');
    const descriptions = document.querySelectorAll('.description');

    // Ajouter un écouteur d'événements à chaque bouton
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        // Masquer toutes les descriptions
        descriptions.forEach((description) => {
          description.style.display = 'none';
        });
        // Afficher la description correspondante
        descriptions[index].style.display = 'block';
      });
    });
