import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string{
  let X: number = 0
  let fila: string = ""
  while (X <= cantidad){
    fila = fila + letra
  // Para armar la fila de caracteres, construye un fila, q a ese strringg se le agrege
}

  return fila;

}

let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));

// Imprime algo por tamaño
let cont: number = 1;
while (cont<= tamaño){
  console.log (repetirLetra(caracter, tamaño))
  cont = cont + 1;
}