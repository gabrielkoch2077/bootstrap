document.addEventListener('DOMContentLoaded', function () {
    let visitas = localStorage.getItem('visitas');
    if (!visitas) {
        visitas = 0;
    }
    visitas++;
    localStorage.setItem('visitas', visitas);
    document.getElementById('contador').textContent = visitas;





    const titulo = document.querySelector('h1');
    const textoOriginal = titulo.textContent;
    titulo.textContent = '';

    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < textoOriginal.length) {
            titulo.textContent += textoOriginal.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);
});