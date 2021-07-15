(function() {


    // CONSTANTE ET VARIABLE
    const button = document.getElementById('color');



    // FONCTIONS
    function aleatoireRGB() {
    
        return Math.floor(Math.random() * 256);

    };
    
    
    function changeBackground() {

        const colonne1 = aleatoireRGB();
        const colonne2 = aleatoireRGB();
        const colonne3 = aleatoireRGB();
        
        const couleurCaractere = `rgb(${colonne1}, ${colonne2}, ${colonne3})`;

        document.getElementById('affichage').style.background = couleurCaractere;
        document.getElementById('color').innerHTML = couleurCaractere;

    };

    button.addEventListener('click', changeBackground);
    
})()

    




