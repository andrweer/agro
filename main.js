document.getElementById('learnMore').addEventListener('click', function() {
    window.location.href = '#about';
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});