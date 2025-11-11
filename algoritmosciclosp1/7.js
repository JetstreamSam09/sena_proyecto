/*7. Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.*/

let numeros = [4,5,2,3,8,10,3,4,7]
function numeroMayor (array){
    let numeroMayor = 0;
    for(let i=0; i<=numeroMayor.length; i++ ){
        if(array[i]>array[i+1]){
            numeroMayor=array[i];
        }
    }
    return numeroMayor;
}
console.log(numeroMayor(numeros));
