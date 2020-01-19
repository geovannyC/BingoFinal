const numerosUs = require('./bingo')
const numerosUsados = new Array();
let cartillas = numerosUs.numerosUs;
let index;
let cartillasGanadoras;
const lanzar=()=> {
    if(numerosUsados.length<90){
        let misbolas = Math.floor(Math.random() * 65) + 1;
        if (numerosUsados.includes(misbolas))
            lanzar();
        else {
            numerosUsados.push(misbolas);
        }
    }
};
const exportar = () =>{
    lanzar();
    comprobar();

    return numerosUsados[numerosUsados.length-1];
    
};
const exportar2 = () =>{
    
    return JSON.stringify(numerosUsados);
};
const comprobar = () =>{
    for(let i =0; i>cartillas.length; i++){
        if(cartillas[i].includes(numerosUsados)){
            index.push(i)
            cartillasGanadoras(cartillas[i])
        }
    }
}
exports.exportar = exportar;
exports.exportar2 = exportar2;
