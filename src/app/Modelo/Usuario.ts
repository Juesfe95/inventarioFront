import { Cargo } from "./Cargo";

export class Usuario{
  id:number;
  nombre:string;
  correo:string;
  edad:number;
  fechaIngreso: Date;
  cargo:Cargo;
}
