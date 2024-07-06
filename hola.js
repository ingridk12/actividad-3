//variables
alert('Bienvenidos al juego del número secreto');
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
while(numeroUsuario != numeroSecreto){
   numeroUsuario = prompt('Elige un número entre 1 y 10 por favor:');

    console.log(numeroUsuario);
    /*
   este código realiza
   la comparación
   */
   if (numeroUsuario == numeroSecreto) {
   //se cumplio la condicion 
    alert(`Adivinaste, el número es:  ${numeroUsuario}. Lo hiciste en ${intentos} intentos`);
    } else{
    if (numeroUsuario > numeroSecreto){
    alert("El número secreto es menor");
    }else{
    alert("El numero secreto es mayor");
     }
// incrementamos el contador
     intentos =intentos +1;
    //no se cumplio
    //alert("Lo siento no acertaste el númro")
   } 
}