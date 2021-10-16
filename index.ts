import { Automovil } from './clases/automovil';
import { TodoTerreno } from './clases/todoTerreno';
let auto: Automovil;
let todoTerreno: TodoTerreno;
// Declaramos tipo array de tipo Automovil de dos formas
let automoviles: Array<Automovil> = new Array<Automovil>();

auto = new Automovil(20000, 160);
console.log(`Precio base auto: ${auto.precioBase}`);
console.log(`Potencia auto: ${auto.potenciaMotor}`);
console.log(`Precio: ${auto.precio()}`);

todoTerreno = new TodoTerreno(30000, 130, '4x4');
console.log(`Precio base todoTerreno: ${todoTerreno.precioBase}`);
console.log(`Potencia todoTerreno: ${todoTerreno.potenciaMotor}`);
console.log(`Ángulo Ataque todoTerreno: ${todoTerreno.traccion}`);
console.log(`Precio todoTerreno: ${todoTerreno.precio()}`);

// Podemos asignar tanto Automovil como TodoTerreno
automoviles[0] = new Automovil(25000, 130);
automoviles[1] = new Automovil(35000, 170);
automoviles[2] = new TodoTerreno(40000, 190, '4x2');
automoviles[3] = new TodoTerreno(38000, 145, '4x4');

// recorremos el array
// Polimorfismo la variable a puede ser de cualquiera
// de los tipos y sabe qué método ejecutar
for (let a of automoviles) {
  console.log(a instanceof TodoTerreno);
  console.log(`${a.todo()}, precio: ${a.precio()}`);
}
