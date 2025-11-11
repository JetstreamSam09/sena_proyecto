/*4. Algoritmo para contar ocurrencias de 'a' en un texto*/
const texto = "Camilo esta estudiando en el sena una tecnologia de analisis de desarrollo de software"
let contador = 0

for(let i=0; i < texto.length; i++){
    if(texto[i].toLowerCase()=== 'a'){
        contador++
    }
}
console.log('El texto tiene un total de '+texto.length+'')
console.log()
