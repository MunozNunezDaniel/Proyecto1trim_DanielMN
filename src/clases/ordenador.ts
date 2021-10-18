export class Ordenador {
  protected _precioBase: number; // para acceder en la subclase
  protected _id: string;
  protected _comsumoMaximo: number;
  protected _capacidadRAM: number;
  protected _graficaDedicada: Boolean;
  
  constructor( id: string, precioBase: number, comsumoMaximo: number, capacidadRAM: number, graficaDedicada: Boolean) {
    this._id = id; //Este dato será unico
    this._precioBase = precioBase;
    this._comsumoMaximo = comsumoMaximo;
    this._capacidadRAM = capacidadRAM;
    this._graficaDedicada = graficaDedicada;
  }
  get precioBase() {
    return this._precioBase;
  }
  get id() {
    return this._id;
  }
  get comsumoMaximo() {
    return this._comsumoMaximo;
  }
  get capacidadRAM() {
    return this._capacidadRAM;
  }
  get graficaDedicada() {
    return this._graficaDedicada;
  }

  //si tiene grafica dedicada es mas cara
  precio(): number {
    let precio: number;
    precio = this._precioBase;
    if (this._graficaDedicada == true) {
      precio += 0.5 * precio;
    }
    return precio;
  }
  todo() {
    return `Identificador: ${this._id}, Precio base: ${this._precioBase}, Consumo Máximo: ${this._comsumoMaximo}, Capacidad de la RAM: ${this._capacidadRAM}, Tarjeta Grafica Dedicada: ${this._graficaDedicada},`;
  }
}
