export class Alumno {
  id: number;
  nombre: string;
  apellido: string;
  nota: number;
  destacado: boolean;
  nacimiento: Date;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    nota: number,
    destacado: boolean,
    nacimiento: Date
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nota = nota;
    this.destacado = destacado;
    this.nacimiento = nacimiento;
  }

  destacar() {
    this.nota >= 7 ? (this.destacado = true) : (this.destacado = false);
  }
}
