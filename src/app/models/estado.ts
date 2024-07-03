import { Tipo_Estado } from './tipo-estado';

export interface Estado {
    id_estado: number;
    nombre: string;
    descripcion: string;
    id_tipo_estado: number;

    tipo_estado: Tipo_Estado;
  }