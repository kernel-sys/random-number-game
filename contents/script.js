$(document).ready(function() {
    const randomNumber = Math.floor(Math.random() * 101); // Génère un nombre aléatoire entre 0 et 100

    $('#guessForm').on('submit', function(event) {
        event.preventDefault();

        const userGuess = parseInt($('#userGuess').val());

        if (userGuess === randomNumber) {
            alert('Félicitations ! Vous avez deviné le nombre.');
        } else if (userGuess < randomNumber) {
            $('#hint').text('Le nombre que vous cherchez est plus grand.');
        } else {
            $('#hint').text('Le nombre que vous cherchez est plus petit.');
        }
    });
});
