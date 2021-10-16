import { Ordenador } from './clases/ordenador';
import { Sobremesa } from './clases/sobremesa';
//import { portatil } from './clases/portatil';

let pc: Ordenador;
let todoTerreno: Sobremesa;
// Declaramos tipo array de tipo Ordenador de dos formas
let Ordenadores: Array<Ordenador> = new Array<Ordenador>();

pc = new Ordenador(20000, 160);
console.log(`Precio base pc: ${pc.precioBase}`);
console.log(`Consumo Maximo pc: ${pc.comsumoMaximo}`);
console.log(`Precio: ${pc.precio()}`);

todoTerreno = new Sobremesa(30000, 130, '4x4');
console.log(`Precio base todoTerreno: ${todoTerreno.precioBase}`);
console.log(`Potencia todoTerreno: ${todoTerreno.potenciaMotor}`);
console.log(`Ángulo Ataque todoTerreno: ${todoTerreno.traccion}`);
console.log(`Precio todoTerreno: ${todoTerreno.precio()}`);

// Podemos asignar tanto Ordenador como Sobremesa
Ordenadores[0] = new Ordenador(25000, 130);
Ordenadores[1] = new Ordenador(35000, 170);
Ordenadores[2] = new Sobremesa(40000, 190, '4x2');
Ordenadores[3] = new Sobremesa(38000, 145, '4x4');

// recorremos el array
// Polimorfismo la variable a puede ser de cualquiera
// de los tipos y sabe qué método ejecutar
for (let a of Ordenadores) {
  console.log(a instanceof Sobremesa);
  console.log(`${a.todo()}, precio: ${a.precio()}`);
}
