(function() {

    // CONSTANTE ET VARIABLE
    const colonne1 = aleatoireRGB();
    const colonne2 = aleatoireRGB();
    const colonne3 = aleatoireRGB();

    const couleurCaractere = `rgb(${colonne1}, ${colonne2}, ${colonne3})`;


    // FONCTIONS
    function changeBackground() {

        document.getElementById('affichage').style.background = couleurCaractere;

    };


    function aleatoireRGB() {

        return Math.floor(Math.random() * 256);

    };


    changeBackground()

})()





