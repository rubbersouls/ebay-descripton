const buttons = document.querySelectorAll('.btn');
const descriptions = document.querySelectorAll('.description');


    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        descriptions.forEach((description) => {
          description.style.display = 'none';
        });
        // Afficher la description correspondante
        descriptions[index].style.display = 'block';
      });
    });
