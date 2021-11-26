import { Dispositivo } from './clases/dispositivo'
import { Ordenador } from './clases/ordenador'
import { Telefono } from './clases/telefono'
import { Pedido } from './clases/pedido'
import { Reposicion } from './clases/reposicion'
import { Programado } from './clases/programado'
import { Dispositivos, Disp, Ord, Telf } from './schemas/dispositivo'
import { Pedidos, Ped, Rep, Progr } from './schemas/pedido'
import { menuPrinc, menuDisp, menuPedido } from './view/menuPrinc'
import { leerTeclado } from './view/entradaTeclado'
import { db } from './database/database'

const F_covid: Date = new Date("2019-01-01")

let n2: number
let Atlas: string = "N"
let dispositivos: Array<Dispositivo> = new Array<Dispositivo>();
let pedidos: Array<Pedido> = new Array<Pedido>();

//Dispositivos de prueba
dispositivos[0] = new Ordenador("D8785", new Date("2018-01-01"), 1243, true, true, F_covid)
dispositivos[0] = new Ordenador("D9483", new Date("2017-01-01"), 500, true, false, F_covid)
dispositivos[0] = new Ordenador("D9563", new Date("2010-01-01"), 300, false, true, F_covid)
dispositivos[0] = new Telefono("D9873", new Date("2018-01-01"), 1300, true, "ips")
dispositivos[0] = new Telefono("D0384", new Date("2012-01-01"), 200, false, "ips")
dispositivos[0] = new Telefono("D8456", new Date("2007-01-01"), 700, true, "amoled")

//Pedidos de prueba
pedidos[0] = new Programado("P6764", 30, "express", "Voluntad 32", true)
pedidos[0] = new Programado("P6764", 30, "express", "Voluntad 32", true)
pedidos[0] = new Programado("P6764", 30, "express", "Voluntad 32", true)
pedidos[0] = new Reposicion("P8465", 20, "estandar", "Esp de triana 4", false )
pedidos[0] = new Reposicion("P8465", 20, "estandar", "Esp de triana 4", false )
pedidos[0] = new Reposicion("P8465", 20, "estandar", "Esp de triana 4", false )

const setBD = async (local: boolean) => {
  const bdLocal = 'Proyecto1_DanielMN'
  const conexionLocal = `mongodb://localhost/${bdLocal}`

  if (local) {
    db.cadenaConexion = conexionLocal
  } else {
    const bdAtlas = 'Proyecto1_DanielMN'
    const userAtlas = await leerTeclado('Usuario BD Atlas')
    const passAtlas = await leerTeclado('Password BD Atlas')
    const conexionAtlas =  
    `mongodb+srv://${userAtlas}:${passAtlas}@cluster0.49asp.mongodb.net/${bdAtlas}?retryWrites=true&w=majority`
    db.cadenaConexion = conexionAtlas
  }
}

//Crear nuevo Ordenador Probar si funciona esto solo 
const nuevoOrd = async (dispositivos: Array<Dispositivo>) =>  {                                 
  ord: Ordenador;
  id = await leerTeclado('\nID: ');
  F_fabric = await leerTeclado('Fecha de fabricacion');
  precioBase = await leerTeclado('Precio base') ;
  Wifi = Boolean ( await leerTeclado('¿Tiene Wifi? si o no:') );
  if (Wifi == "si") {
    Wifi = true
  } else {
    Wifi = false
  }
  grafica_dedic = Boolean( await leerTeclado('¿Tiene grafica dedicada?') );
  const F_covid = new Date("2019-01-01");
  ord = new Ordenador (id, F_fabric, precioBase, Wifi, grafica_dedic, F_covid);
  dispositivos.push(ord);

  //Ver si poner el campo Tipo objeto
  await db.conectarBD()
    const ordSchema ={
        _id: ordenador.id,
        _F_fabric: ordenador.F_fabric,
        _precio_base: ordenador.precioBase,
        _Wifi: ordenador.Wifi,
        _grafica_dedic: ordenador.grafica_dedic,
        _F_covid: ordenador.F_covid
    }
    const Schema = new Dispositivos(ordSchema)
    await Schema.save()
    .then((doc: string)=> console.log('El ordenador se ha guardado correctamente' + doc))
    .catch((err:any)=> console.log(err))
    await db.desconectarBD()
    return ord
}

let n: number
let ord: Ordenador | undefined
let menuPrincipal: number
let menuDispositivo: number
let menuPedido: number
let dispositivo: Dispositivo
let ordenador: Ordenador
let telefono: Telefono
let pedido: Pedido
let reposicion: Reposicion
let programado: Programado


const main = async () => {
  let n: number
  let ord: Ordenador | undefined
  let menuPrincipal: number
  let menuDispositivo: number
  let menuPedido: number
  let dispositivo: Dispositivo
  let ordenador: Ordenador
  let telefono: Telefono
  let pedido: Pedido
  let reposicion: Reposicion
  let programado: Programado

  do {
    menuPrincipal = await menuPrinc()
      switch(menuPrincipal) {
          case 1:
              let id: number, F_fabric: Date, precioBase: number, Wifi: Boolean, grafica_dedic: Boolean
              let F_covid = new Date("2019-01-01");
              let menuDispositivo: number
              do{
                  menuDispositivo = await menuDisp()
                  switch(menuDispositivo) {
                      case 1:
                          id = parseInt(await leerTeclado("Identificador del nuevo paciente: "))
                          nombre = await leerTeclado("Nombre: ")
                          apellido1 = await leerTeclado("Primer apellido: ")
                          apellido2 = await leerTeclado("Segundo apellido: ")
                          edad = parseInt(await leerTeclado("Edad del paciente: "))
                          dni = await leerTeclado("DNI: ")
                          asegurado = await leerTeclado("¿Tiene seguro medico?: ")
                              if (asegurado == "si" || asegurado == "Si" || asegurado == "SI") {
                                seguro = true
                              } else {
                                 seguro = false
                          }
                          telefono = parseInt(await leerTeclado("Teléfono:  "))
                          dolencia = await leerTeclado("¿Qué le ocurre?: ")
                          tipo = await leerTeclado("Tipo de paciente: ")
                              if(tipo=="covid"){
                                  test = await leerTeclado("¿Qué test se va a hacer?")
                                  coste = covid.pago()
                              } else if (tipo == "urgencias"){
                                  prueba = await leerTeclado("¿Qué pruebas se le van a hacer?")
                                  coste = urgencias.pago()
                              }
                      break
                      case 2:
                          await db.conectarBD()
                          const paciSchema ={
                              _id: paciente.id,
                              _nombre: paciente.nombre,
                              _apellido1: paciente.apellido1,
                              _apellido2: paciente.apellido2,
                              _edad: paciente.edad,
                              _dni: paciente.dni,
                              _seguro: paciente.seguro,
                              _telefono: paciente.telefono,
                              _dolencia: paciente.dolencia,
                              _prueba: urgencias.prueba,
                              _test: covid.test,
                              _preciobase: paciente
                          }
                          const Schema = new Pacientes(paciSchema)
                          await Schema.save()
                          .then((doc: string)=> console.log('El paciente se ha guardado correctamente' + doc))
                          .catch((err:any)=> console.log(err))
                          await db.desconectarBD()
                      break
                      case 3:
                          await db.conectarBD()
                          await pacientes.find({},
                              (err:any, doc: null) => {
                                  if(err){
                                      console.log(err)
                                  }else{
                                      if(doc == null) console.log(`No existen documentos`)
                                      else console.log
                                  }
                              }) 
                              await db.desconectarBD()
                      break
                      case 4:
                          await db.conectarBD()
                          const borrar = parseInt(await leerTeclado('Ponga el ID del paciente que quiere eliminar'))
                          await Pacientes.findOneAndDelete(
                              {
                                  _id: borrar
                              },
                              (err:any, doc: string | null) => {
                                  if(err){
                                      console.log(err)
                                  }else{
                                      if(doc == null)console.log(`No se ha encontrado dicho paciente`)
                                      else console.log(`Documento Borrado`+ doc)
                                  }
                              })
                          await db.desconectarBD()
                      break
                  }
              } while (menuDispositivo!=5)
          case 2:
              let idemp:number, nombreemp:string, apellido:string, puesto:string
              let sueldo: number, especialidad: string, segundoIdioma: string, contacto: number
              let idpaciente:number
              let menuPedido: number,
              do{
                  menuPedido = await emplear()
                  switch(menuPedido) {
                      case 1:
                          idemp = parseInt(await leerTeclado("Identificador del nuevo empleado: "))
                          nombreemp = await leerTeclado("Nombre: ")
                          apellido = await leerTeclado("Primer apellido: ")
                          contacto = parseInt(await leerTeclado("Teléfono:  "))
                          idpaciente = parseInt(await leerTeclado("Que pacientes tiene asignado: "))
                          puesto = await leerTeclado ("Que tipo de trabajador es"){
                              if (puesto=="medico"){
                                  especialidad = await leerTeclado("¿Qué especialidad tiene?")
                                  sueldo = medicos.salario()
                              } else if (puesto=="administrativo"){
                                  segundoIdioma = await leerTeclado("¿Cual es su segundo idioma?")
                                  sueldo = administrativo.salario()
                              }
                          }
                      } 
                      break
                      case 2:
                          await db.conectarBD()
                          const paciSchema ={
                              _idemp: empleado.idemp,
                              _nombreemp: empleado.nombreemp,
                              _apellido: empleado.apellido,
                              _contacto: empleado.contacto,
                              _especialidad: medicos.especialidad,
                              _segundoIdioma: administrativo.segundoIdioma,
                              _preciobase: paciente
                          }
                          const Schema = new Pacientes(paciSchema)
                          await Schema.save()
                          .then((doc: string)=> console.log('El paciente se ha guardado correctamente' + doc))
                          .catch((err:any)=> console.log(err))
                          await db.desconectarBD()
                      break
                      case 3:
                          await db.conectarBD()
                          await empleado.find({},
                              (err:any, doc: null) => {
                                  if(err){
                                      console.log(err)
                                  }else{
                                      if(doc == null) console.log(`No existen documentos`)
                                      else console.log
                                  }
                              }) 
                              await db.desconectarBD()
                      break
                      case 4:
                      await db.conectarBD()
                          const delete = parseInt(await leerTeclado('Ponga el ID del empleado que quiere eliminar'))
                          await empleados.findOneAndDelete(
                              {
                                  _id: borrar
                              },
                              (err:any, doc: string | null) => {
                                  if(err){
                                      console.log(err)
                                  }else{
                                      if(doc == null)console.log(`No se ha encontrado dicho empleado`)
                                      else console.log(`Documento Borrado`+ doc)
                                  }
                              })
                          await db.desconectarBD()
                      break
                  }
              }while (menuPedido!=5)
          break
          case 3:
              let menu4: number, salario: number, idemp: number
              let objIndex: number
              do{
                  menu4 = await emplear()
                  switch(menu4){
                      case 1:
                          await db.conectarBD()
                          const buscar = async () => {
                              let identificador: number
                              identificador = parseInt(await leerTeclado("Teléfono:  "))
                              if(identificador==empleados.idemp){
                                  for (let a of Empleados) {
                                      console.log(a.todo())
                                  }
                              }
                          }
                          }
                      break
                  }while(menu4!=3)
          break
      }
  } while(menuPrincipal!=3)
}
main()