import { Usuario } from "./Usuario";

export class Producto{
  id:number;
  nombre:string;
  cantidad:number;
  fechaIngreso: Date;
  usuarioId:Usuario;
}
