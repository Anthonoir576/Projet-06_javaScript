
changeBackground();

function changeBackground() {

    const colonne1 = aleatoireRGB();
    const colonne2 = aleatoireRGB();
    const colonne3 = aleatoireRGB();

    const couleurCaractere = `rgb(${colonne1}, ${colonne2}, ${colonne3})`


}



function aleatoireRGB() {

    const pars = parseInt('Math.floor(Math.random * 256)', 10);

    return pars;

};

console.log(aleatoireRGB())


// REVOIR LE CODE