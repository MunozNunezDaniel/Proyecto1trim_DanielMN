import { Ordenador } from './clases/dispositivo';
import { Sobremesa } from './clases/sobremesa';
import { menuPrinc, tipos } from './view/menuPrinc';
import { leerTeclado } from './view/entradaTeclado';
import { Portatil } from './clases/ordenador';

const main = async () => {
  let n: number;
  let n2: number;
  let ordenador: Ordenador;
  let sobremesa: Sobremesa;
  let portatil: Portatil;
  let Ordenadores: Array<Ordenador> = new Array<Ordenador>();

  Ordenadores[0] = new Ordenador("PC2000", 2000, 500, 16, false)
  Ordenadores[1] = new Sobremesa("PC1000", 1000, 300, 16, true, "liquida", "NOX Coolbay SX")
  Ordenadores[2] = new Sobremesa("PC3000", 3000, 600, 32, true, "liquida", "NOX Hummer MC")
  Ordenadores[3] = new Portatil("g15", 3000, 200, 32, true, "OLED", "400")
  Ordenadores[4] = new Portatil("g14", 2000, 100, 16, false, "IPS", "600")

  do {
      n = await menuPrinc()
      switch(n){
        //Añadir ordenador
          case 1:
              console.log("\nEstas en la opción 1")

              let id: string, precioBase: number, comsumoMaximo: number, capacidadRAM: number, graficaDedicada: boolean;
              let grafica: string;
              let refrigeracion: string, modeloCaja: string;
              let tipoPantalla: string, duracionBateria: string;
              do {
                  n2 = await tipos()
                  switch (n2) {
                    //Añadir ordenador normal
                    case 1:
                      id = await leerTeclado('\nIntroduzca el identificador del ordenador')
                      precioBase =  parseInt( await leerTeclado('Introduzca el precio base'))
                      comsumoMaximo =  parseInt( await leerTeclado('Introduzca el consumo maximo en vatios'))
                      capacidadRAM =  parseInt( await leerTeclado('Introduzca la capacidad de memoria RAM en GB'))
                      grafica =  await leerTeclado('Diga si el equipo posee tarjeta gráfica dedicada, introduzca si o no')
                      if (grafica == "si") {
                        graficaDedicada = true
                       } else {
                        graficaDedicada = false
                      }
                      ordenador = new Ordenador (id, precioBase, comsumoMaximo, capacidadRAM, graficaDedicada);
                      Ordenadores.push(ordenador);
                    break
                    //Añadir ordenador sobremesa
                    case 2:
                      id = await leerTeclado('\nIntroduzca el identificador del ordenador')
                      precioBase =  parseInt( await leerTeclado('Introduzca el precio base'))
                      comsumoMaximo =  parseInt( await leerTeclado('Introduzca el consumo maximo en vatios'))
                      capacidadRAM =  parseInt( await leerTeclado('Introduzca la capacidad de memoria RAM en GB'))
                      grafica =  await leerTeclado('Diga si el equipo posee tarjeta gráfica dedicada, introduzca si o no')
                      if (grafica == "si") {
                        graficaDedicada = true
                       } else {
                        graficaDedicada = false
                      }
                      refrigeracion = await leerTeclado('Introduzca el tipo de refrigeracion del ordenador, introduzca liquida o aire')
                      modeloCaja = await leerTeclado('Introduzca el modelo de la caja del ordenador')
                      sobremesa = new Sobremesa (id, precioBase, comsumoMaximo, capacidadRAM, graficaDedicada, refrigeracion, modeloCaja);
                      Ordenadores.push(sobremesa);
                      break;
                    //Añadir ordenador portatil
                    case 3:
                      id = await leerTeclado('\nIntroduzca el identificador del ordenador')
                      precioBase =  parseInt( await leerTeclado('Introduzca el precio base'))
                      comsumoMaximo =  parseInt( await leerTeclado('Introduzca el consumo maximo en vatios'))
                      capacidadRAM =  parseInt( await leerTeclado('Introduzca la capacidad de memoria RAM en GB'))
                      grafica =  await leerTeclado('Diga si el equipo posee tarjeta gráfica dedicada, introduzca si o no')
                      if (grafica == "si") {
                        graficaDedicada = true
                       } else {
                        graficaDedicada = false
                      }
                      tipoPantalla = await leerTeclado('Introduzca el tipo pantalla del portatil')
                      duracionBateria = await leerTeclado('Introduzca la duracion de la bateria en minutos')
                      portatil = new Portatil (id, precioBase, comsumoMaximo, capacidadRAM, graficaDedicada, tipoPantalla, duracionBateria);
                      Ordenadores.push(portatil);
                      break;
                  }
              } while (n2!=4);   
              break
        //Listar todos los ordenadores
          case 2:
              console.log("\nEstoy en opción 2")
              for (let a of Ordenadores) {
                console.log(a instanceof Sobremesa);
                console.log(a instanceof Portatil);
                console.log(`${a.todo()}, precio: ${a.precio()}`);
              }
              break
        //Modificar ordenador      
          case 3:
              console.log("\nOpción 3")
                let graficaDedicada_mod: boolean;
                let id_mod= await leerTeclado('Id del ordenador que desea modificar: ')
                let precioBase_mod= parseInt(await leerTeclado("Nuevo precio base del ordenador: "))
                let comsumoMaximo_mod= parseInt(await leerTeclado("Nuevo consumo maximo: "))
                let capacidadRAM_mod= parseInt(await leerTeclado("Nueva capacidad de RAM: "))
                let grafica_mod =  await leerTeclado('Diga si el equipo posee tarjeta gráfica dedicada, introduzca si o no')
                if (grafica_mod == "si") {
                  graficaDedicada_mod = true
                 } else {
                  graficaDedicada_mod = false
                }
                let PC_nuevo = new Ordenador (id_mod, precioBase_mod, comsumoMaximo_mod, capacidadRAM_mod, graficaDedicada_mod)

                let refrigeracion_mod = await leerTeclado("Nuevo tipo de refrigeracion, introduzca liquida o aire: ")
                let modeloCaja_mod = await leerTeclado("Nuevo modelo de caja: ")

                let FIJO_nuevo = new Sobremesa (id_mod, precioBase_mod, comsumoMaximo_mod, capacidadRAM_mod, graficaDedicada_mod, refrigeracion_mod, modeloCaja_mod)
            
                let tipoPantalla_mod = await leerTeclado ("Nuevo tipo de pantalla: ")
                let duracionBateria_mod = await leerTeclado ("Nueva duracion de batería en minutos: ")

                let PORTATIL_nuevo = new Portatil (id_mod, precioBase_mod, comsumoMaximo_mod, capacidadRAM_mod, graficaDedicada_mod, tipoPantalla_mod, duracionBateria_mod)
                
                let modifica = Ordenadores.findIndex(Ordenadores => Ordenadores.id==id_mod)
                Ordenadores[modifica] = PC_nuevo;
                Ordenadores[modifica] = FIJO_nuevo;
                Ordenadores[modifica] = PORTATIL_nuevo;
              break
        //Eliminar ordenador, cambiar y hacer que primero te los muestre y que eligas el que quieres borrar, hacerlo con splice
          case 4:
              console.log("\nEstoy en opción 4")
              let eliminar = await leerTeclado("Introduzca el id del ordenador a eliminar: ")
              let borrar = Ordenadores.findIndex(Ordenadores=>Ordenadores.id==eliminar)
              let suprimir = Ordenadores.splice(borrar,1)
              break
        //Ver un ordenador concreto
          case 5:
              console.log("\nEstoy en opción 5")
              let ver = await leerTeclado("Escriba el id del ordenador que quiere ver: ")
              let info = Ordenadores.findIndex(Ordenadores=>Ordenadores.id==ver)
              console.log(Ordenadores[info])
              break
        //Salir
          case 0:
              console.log('\nAdios')
              break
          default:
              console.log("\nOpción incorrecta")
              break
      }
  } while (n != 0)
}
main()
